import { ColumnT, ItemT } from "../../models";
import "./index.css";

function Table(props: { items: ItemT[]; columns: ColumnT[] }) {
  const { items, columns } = props;

  return (
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
          <tr key={item.id}>
            {columns.map((column) => (
              <td>{item[column.data]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
