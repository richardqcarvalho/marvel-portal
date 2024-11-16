import { ColumnT, ItemT } from "../../models";
import "./index.css";

function Table(props: {
  items: Array<ItemT>;
  columns: Array<ColumnT>;
  onRowClick: (item: ItemT) => void;
}) {
  const { items, columns, onRowClick } = props;

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th key={i}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              className="tr-data"
              onClick={() => {
                if (onRowClick) onRowClick(item);
              }}
            >
              {columns.map((column) => (
                <td>{item[column.data] || "-"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
