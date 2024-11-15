import { PaginationT } from "../../models";
import "./index.css";

function Pagination(props: {
  setPagination: React.Dispatch<React.SetStateAction<PaginationT>>;
  total: number;
  count: number;
  page: number;
}) {
  const { setPagination, total, count, page } = props;
  const pages = Math.ceil(total / count);
  const from = count * (page - 1) + 1;
  const to = count * page < total ? count * page : total;

  return (
    <>
      <div className="select-information">
        <span className="number-information">{`Showing ${from}-${to} of ${total}`}</span>
        {total >= 10 && (
          <select
            onChange={(e) =>
              setPagination((previous: PaginationT) => ({
                ...previous,
                count: parseInt(e.target.value),
                page: 1,
              }))
            }
            defaultValue={count}
          >
            <option value="10">10</option>
            {total >= 20 && <option value="20">20</option>}
            {total >= 30 && <option value="30">30</option>}
            {total >= 40 && <option value="40">40</option>}
            {total >= 50 && <option value="50">50</option>}
          </select>
        )}
      </div>
      <div className="pagination">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            onClick={() =>
              setPagination((previous) => ({ ...previous, page: i + 1 }))
            }
            key={i}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default Pagination;
