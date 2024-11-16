import { useState } from "react";
import { ColumnT, ItemT } from "../../models";
import "./index.css";

function Table(props: {
  items: Array<ItemT>;
  columns: Array<ColumnT>;
  onRowClick: (item: ItemT) => void;
  onSearchClick: (filter: string) => void;
  searchTerm: string;
  onDatePick: (date: string) => void;
  date: string;
}) {
  const {
    items,
    columns,
    onRowClick,
    onSearchClick,
    searchTerm,
    onDatePick,
    date,
  } = props;
  const [filter, setFilter] = useState<string>(searchTerm);
  const [day, setDay] = useState(new Date(date).getDate() || 1);
  const [month, setMonth] = useState(new Date(date).getMonth() || 1);
  const [year, setYear] = useState(new Date(date).getFullYear() || 1960);
  const months = Array.from({ length: 12 }).map((_, i) => i + 1);
  const years = Array.from({ length: 65 }).map((_, i) => 1960 + i);
  const days = Array.from({
    length: new Date(year, month, 0).getDate(),
  }).map((_, i) => i + 1);

  return (
    <div className="table-contents">
      <div className="search-bar">
        <div className="search-container">
          <input
            type="text"
            value={filter}
            placeholder="Filter content..."
            onChange={(e) => setFilter(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && filter.length > 0) onSearchClick(filter);
            }}
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
        <div className="date-input">
          <label className="date-label">
            Filter by content modified since:
          </label>
          <div className="date-selectors">
            <select
              className="date-select"
              value={day}
              onChange={(e) => {
                const newDay = parseInt(e.target.value);
                setDay(newDay);
                if (newDay > 1)
                  onDatePick(new Date(year, month - 1, newDay).toJSON());
              }}
            >
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <select
              className="date-select"
              value={month}
              onChange={(e) => {
                const newMonth = parseInt(e.target.value);
                setMonth(newMonth);
                if (newMonth > 1)
                  onDatePick(new Date(year, newMonth - 1, day).toJSON());
              }}
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              className="date-select"
              value={year}
              onChange={(e) => {
                const newYear = parseInt(e.target.value);
                setYear(newYear);
                if (newYear > 1)
                  onDatePick(new Date(newYear, month - 1, day).toJSON());
              }}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <button
            className="search-button"
            disabled={day === 1 && month === 1 && year === 1960}
            onClick={() => {
              if (day !== 0) setDay(0);
              if (month !== 0) setMonth(0);
              if (year !== 0) setYear(0);
              onDatePick(new Date(1960, 1, 1).toJSON());
            }}
          >
            Reset
          </button>
        </div>
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
                {columns.map((column, i) => (
                  <td key={i}>{item[column.data] || "-"}</td>
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
