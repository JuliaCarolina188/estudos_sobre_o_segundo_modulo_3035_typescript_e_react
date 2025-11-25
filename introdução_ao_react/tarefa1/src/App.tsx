import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [contador, setContador] = useState(0)
  function increment () {
    setContador((prevCount) => prevCount + 1)
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <h2>Contador</h2>
      <p>{contador}</p>
      <button onClick={increment}>Adicionar</button>

    </div>
  );
}

export default App;
