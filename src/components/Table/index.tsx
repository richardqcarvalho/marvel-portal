import { useState } from "react";
import { ColumnT, ItemT } from "../../models";
import "./index.css";

function Table(props: {
  items: Array<ItemT>;
  columns: Array<ColumnT>;
  onRowClick: (item: ItemT) => void;
  onSearchClick: (filter: string) => void;
  searchTerm: string;
}) {
  const { items, columns, onRowClick, onSearchClick, searchTerm } = props;
  const [filter, setFilter] = useState<string>(searchTerm);

  return (
    <div className="table-contents">
      <div className="search-container">
        <input
          type="text"
          value={filter}
          placeholder="Filter content..."
          onChange={(e) => setFilter(e.target.value)}
          className="search-input"
        />
        <button
          className="search-button"
          disabled={filter.length === 0}
          onClick={() => onSearchClick(filter)}
        >
          Search
        </button>
        <span
          className="clear-button"
          onClick={() => {
            setFilter("");
            onSearchClick("");
          }}
        >
          Clear
        </span>
      </div>
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
    </div>
  );
}

export default Table;
