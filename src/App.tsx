import React from "react";
import "./App.css";

let name: string;

name = "Mia";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Hello {name}.</p>
      </header>
    </div>
  );
}

export default App;
