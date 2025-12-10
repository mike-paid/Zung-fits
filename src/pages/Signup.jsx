import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="auth-page">
      <h2>Create Account</h2>

      <input className="auth-input" type="text" placeholder="Full Name" />
      <input className="auth-input" type="email" placeholder="Email" />
      <input className="auth-input" type="password" placeholder="Password" />

      <button className="btn btn-primary auth-btn">Signup</button>

      <p>
        Already registered? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
