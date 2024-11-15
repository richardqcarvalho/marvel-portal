import { ReactComponent as ChevronLeft } from "../../images/chevron-left.svg";
import { ReactComponent as ChevronRight } from "../../images/chevron-right.svg";
import { ReactComponent as ChevronsLeft } from "../../images/chevrons-left.svg";
import { ReactComponent as ChevronsRight } from "../../images/chevrons-right.svg";
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
    <div className="select-information">
      <span className="number-information">{`Showing ${from}-${to} of ${total}`}</span>
      {total >= 10 && (
        <div className="select-wrapper">
          <div className="select-page">
            <span className="number-information">Rows per page</span>
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
          </div>
          <span className="number-information">{`Page ${page} of ${pages}`}</span>
          <div className="select-page">
            <button
              className="page-button"
              onClick={() => {
                if (page !== 1)
                  setPagination((previous) => ({ ...previous, page: 1 }));
              }}
              disabled={!(page !== 1)}
            >
              <ChevronsLeft className="chevrons" />
            </button>
            <button
              className="page-button"
              onClick={() => {
                if (page > 1)
                  setPagination((previous) => ({
                    ...previous,
                    page: page - 1,
                  }));
              }}
              disabled={!(page > 1)}
            >
              <ChevronLeft className="chevrons" />
            </button>
            <button
              className="page-button"
              onClick={() => {
                if (page < pages)
                  setPagination((previous) => ({
                    ...previous,
                    page: page + 1,
                  }));
              }}
              disabled={!(page < pages)}
            >
              <ChevronRight className="chevrons" />
            </button>
            <button
              className="page-button"
              onClick={() => {
                if (page !== pages)
                  setPagination((previous) => ({
                    ...previous,
                    page: pages,
                  }));
              }}
              disabled={!(page !== pages)}
            >
              <ChevronsRight className="chevrons" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pagination;
