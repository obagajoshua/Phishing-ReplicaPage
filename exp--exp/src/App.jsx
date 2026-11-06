import { useState } from "react";

import LoginForm from "./components/LoginForm";
import SecurityResult from "./components/SecurityResult";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [completed, setCompleted] = useState(false);

  return (
    <main className="app">
      <div className="content">
        <LoginForm onComplete={() => setCompleted(true)} />

        {completed && <SecurityResult />}

        <Footer />
      </div>
    </main>
  );
}

export default App;
