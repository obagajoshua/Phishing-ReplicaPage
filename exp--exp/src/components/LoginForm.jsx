import { useState } from "react";

function LoginForm({ onComplete }) {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!username.trim()) return;

    // Never collect or transmit passwords.
    setSubmitted(true);
    onComplete();
  }

  return (
    <div className="login-card">
      <h1 className="brand">Instagram</h1>

      {/* <p className="training-label">
        PHISHING AWARENESS SIMULATOR
      </p> */}

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Mobile number, username or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            disabled
            title="Password collection is disabled in this lab"
          />

          <button type="submit">
            Login
          </button>
        </form>
      ) : (
        <p className="success">
          Logged in!
        </p>
      )}

      <p className="forgot">
        Instagram By Meta.
      </p>
    </div>
  );
}

export default LoginForm;
