import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [contador, setContador] = useState(0)
  //const [number, setNumber] = useState(0)
  const numberRef = useRef(0)
  const buttonRef = useRef<HTMLButtonElement>(null)

  function increment () {
    setContador((prevCount) => prevCount + 1)
  }

  useEffect(() => {
    //setNumber((prevNumber) => prevNumber + 10)
    numberRef.current = Math.random()
  })

  useEffect(() => {
    console.log(buttonRef.current?.click)
  }, [])

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <p>Contador: {contador}</p>
      <p>NumberRef: {numberRef.current}</p>
      <button onClick={increment} ref={buttonRef}>Adicionar</button>

    </div>
  );
}

export default App;
