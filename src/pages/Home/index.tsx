import { useNavigate } from "react-router-dom";
import { ReactComponent as Logout } from "../../images/log-out.svg";
import "./index.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
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
                Explore the vast universe of Marvel characters! Discover
                detailed profiles of iconic heroes like Spider-Man, Iron Man,
                and Captain America, as well as intriguing villains like Thanos,
                Loki, and Doctor Doom. Dive into their descriptions, comics
                where they participated, series and more.
              </span>
            </div>
            <div className="content-button-container">
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
                Relive the biggest moments in Marvel history! Visit events that
                have shaped the Marvel Universe, from epic crossovers like
                Secret Wars and Civil War to universe-altering sagas like
                Infinity Gauntlet and House of M.
              </span>
            </div>
            <div className="content-button-container">
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
