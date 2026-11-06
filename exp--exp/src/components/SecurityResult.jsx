function SecurityResult() {
  return (
    <div className="security-result">
      <h2>Security awareness test</h2>

      <p>
        You interacted with a simulated login interface.
        No credentials were collected.
      </p>

      <h3>Things to check before logging in:</h3>

      <ul>
        <li>Is the website domain genuine?</li>
        <li>Did you arrive through an unexpected link?</li>
        <li>Is the page asking for unusual information?</li>
        <li>Can you verify the login through the official app?</li>
      </ul>
    </div>
  );
}

export default SecurityResult;
