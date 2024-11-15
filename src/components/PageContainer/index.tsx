import { useNavigate } from "react-router-dom";

function PageContainer(props: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <div>
      {props.children}
      <button onClick={() => navigate("/")}>Go back to home</button>
    </div>
  );
}

export default PageContainer;
