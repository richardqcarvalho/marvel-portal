import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../images/arrow-left.svg";
import "./index.css";

function PageContainer(props: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <div>
      <button className="back-button" onClick={() => navigate("/")}>
        <ArrowLeft className="arrow-left" />
      </button>
      {props.children}
    </div>
  );
}

export default PageContainer;
