import { useNavigate } from "react-router-dom";
import { ReactComponent as Logout } from "../../images/log-out.svg";
import "./index.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("id");
    navigate("/login");
  };

  return (
    <div className="home-container">
      <div className="top-bar">
        <h1>Home</h1>
        <button onClick={handleLogout} className="logout-button">
          <Logout className="logout" />
        </button>
      </div>
      <div className="home-content">
        <div className="content-wrapper">
          <div className="content">
            <div className="content-text">
              <h3 className="content-title">Characters</h3>
              <span className="content-description">
                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              </span>
            </div>
            <div className="button-container">
              <button
                onClick={() => navigate("/characters")}
                className="table-button"
              >
                See characters
              </button>
            </div>
          </div>
          <div className="content">
            <div className="content-text">
              <h3 className="content-title">Events</h3>
              <span className="content-description">
                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              </span>
            </div>
            <div className="button-container">
              <button
                onClick={() => navigate("/events")}
                className="table-button"
              >
                See events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
