import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const handleEmailValidation: FormEventHandler = (e) => {
    e.preventDefault();

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isEmailValid) {
      setError(false);
      localStorage.setItem("email", email);
      setShowPasswordInput(true);
    } else setError(true);
  };

  const handleSignIn: FormEventHandler = (e) => {
    e.preventDefault();

    localStorage.setItem("password", password);
    navigate("/");
  };

  return (
    <div>
      <h1>Login</h1>
      {showPasswordInput ? (
        <form onSubmit={handleSignIn}>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Type your password"
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Sign in</button>
          <button onClick={() => setShowPasswordInput(false)}>
            Use another email
          </button>
        </form>
      ) : (
        <form onSubmit={handleEmailValidation} noValidate>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Type your email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <span>Type a valid email</span>}
          </div>
          <button type="submit">Next</button>
        </form>
      )}
    </div>
  );
}

export default Login;
