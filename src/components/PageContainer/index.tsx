import { useNavigate } from "react-router-dom";

function PageContainer(props: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Go back to home</button>
      {props.children}
    </div>
  );
}

export default PageContainer;
