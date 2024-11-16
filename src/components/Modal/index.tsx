import { ReactComponent as Close } from "../../images/x.svg";
import { ItemT } from "../../models";
import "./index.css";

function Modal(props: { onBackgroundClick: () => void; item: ItemT }) {
  const { onBackgroundClick, item } = props;

  return (
    <div className="modal-background" onClick={onBackgroundClick}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="close-container">
          <button className="close-button" onClick={onBackgroundClick}>
            <Close className="x" />
          </button>
        </div>
        <div className="info-container">
          {item.thumbnail && (
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt={item.name}
              className="character-image"
            />
          )}
          {item.name && (
            <div className="info-wrapper">
              <span>
                <b>Name</b>
              </span>
              <span>{item.name}</span>
            </div>
          )}
          {item.title && (
            <div className="info-wrapper">
              <span>
                <b>Title</b>
              </span>
              <span>{item.title}</span>
            </div>
          )}
          {item.description && (
            <div className="info-wrapper">
              <span>
                <b>Description</b>
              </span>
              <span>{item.description}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
