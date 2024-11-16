import "./index.css";

function TableLoading(props: { message?: string }) {
  return (
    <div className="loading-container">
      <div className="loading" />
      {props.message && (
        <span className="loading-message">{props.message}</span>
      )}
    </div>
  );
}

export default TableLoading;
