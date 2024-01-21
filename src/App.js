import "./App.css";

function App() {
  const messages = ["Learn React 📚", "Get Good Job 🤑", "Save Your Money 🏦"];

  return (
    <div className="App">
      <div className="numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="message">
        <p>{messages[0]}</p>
      </div>
      <div className="buttons">
        <button>Previuos</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default App;
