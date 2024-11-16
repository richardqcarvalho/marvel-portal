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
        {(item.name || item.title) && (
          <h2 className="modal-identifier">{item.name || item.title}</h2>
        )}
        {item.thumbnail && (
          <img
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt={item.name}
            className="character-image"
          />
        )}
        <div className="info-container">
          {item.description && (
            <div className="info-wrapper">
              <span>
                <b>Description</b>
              </span>
              <span>{item.description}</span>
            </div>
          )}
          {item.modified && (
            <div className="info-wrapper">
              <span>
                <b>Last modified</b>
              </span>
              <span>{new Date(item.modified).toLocaleDateString()}</span>
            </div>
          )}
          {item.comics && item.comics.items && item.comics.items.length > 0 && (
            <div className="info-wrapper">
              <span>
                <b>Comics</b>
              </span>
              {item.comics.items.map((comicItem) => (
                <span key={comicItem.resourceURI}>{comicItem.name}</span>
              ))}
            </div>
          )}
          {item.stories &&
            item.stories.items &&
            item.stories.items.length > 0 && (
              <div className="info-wrapper">
                <span>
                  <b>Stories</b>
                </span>
                {item.stories.items.map((storyItem) => (
                  <span key={storyItem.resourceURI}>{storyItem.name}</span>
                ))}
              </div>
            )}
          {item.events && item.events.items && item.events.items.length > 0 && (
            <div className="info-wrapper">
              <span>
                <b>Events</b>
              </span>
              {item.events.items.map((eventItem) => (
                <span key={eventItem.resourceURI}>{eventItem.name}</span>
              ))}
            </div>
          )}
          {item.series && item.series.items && item.series.items.length > 0 && (
            <div className="info-wrapper">
              <span>
                <b>Series</b>
              </span>
              {item.series.items.map((seriesItem) => (
                <span key={seriesItem.resourceURI}>{seriesItem.name}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
