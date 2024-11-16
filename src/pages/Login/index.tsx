import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

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

    if (password.length === 0) return;

    localStorage.setItem("password", password);
    navigate("/");
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {showPasswordInput ? (
        <form onSubmit={handleSignIn} autoComplete="off">
          <div className="login-container">
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Type your password"
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <div className="button-container">
              <button
                type="submit"
                className="submit-button"
                disabled={password.length === 0}
              >
                Sign in
              </button>
              <span
                onClick={() => setShowPasswordInput(false)}
                className="redirect-button"
              >
                Use another email
              </span>
            </div>
          </div>
        </form>
      ) : (
        <form onSubmit={handleEmailValidation} noValidate>
          <div className="login-container">
            <div className="login-container">
              <label
                htmlFor="email"
                className={`login-label ${error && "error-label"}`}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Type your email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`login-input ${error && "error-input"}`}
              />
              {error && (
                <span className="error-message">Type a valid email</span>
              )}
            </div>
            <div className="button-container">
              <button type="submit" className="submit-button">
                Next
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Login;
