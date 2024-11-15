import { ColumnT, ItemT } from "../../models";
import "./index.css";

function Table(props: { items: ItemT[]; columns: ColumnT[] }) {
  const { items, columns } = props;

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
          {items.map((item, index) => (
            <tr key={item.id} className={"tr-data"}>
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
