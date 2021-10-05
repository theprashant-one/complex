import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>Fibnnoci Calculator</h2>
          <div>
            <Route exact path="/" component={Fib} />
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
