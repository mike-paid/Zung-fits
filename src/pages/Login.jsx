import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth-page">
      <h2>Login</h2>

      <input className="auth-input" type="email" placeholder="Email" />
      <input className="auth-input" type="password" placeholder="Password" />

      <button className="btn btn-primary auth-btn">Login</button>

      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
