import { useState } from "react";
import "./App.css";

function App() {
  const messages = ["Learn React 📚", "Get Good Job 🤑", "Save Your Money 🏦"];

  const [step, setStep] = useState(1);

  function handleNext() {
    step <= 3 && setStep(step + 1);
  }

  return (
    <div className="App">
      <div className="numbers">
        <div className={step >= 1 ? "numberColor" : ""}>1</div>
        <div className={step >= 2 ? "numberColor" : ""}>2</div>
        <div className={step >= 3 ? "numberColor" : ""}>3</div>
      </div>
      <div className="message">
        <p>{messages[0]}</p>
      </div>
      <div className="buttons">
        <button>Previuos</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
