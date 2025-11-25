import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('Julia')
  const [count, setCount] = useState(0)

  function increment () {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Meu nome é {name}
        </p>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>

        <p>
          Contaddor: {count}
        </p>
        <button onClick={increment}>Adicionar</button>
      </header>
    </div>
  );
}

export default App;
