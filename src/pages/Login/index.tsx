import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    localStorage.setItem("id", "123");
    navigate("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <input />
      <input />
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  );
}

export default Login;
