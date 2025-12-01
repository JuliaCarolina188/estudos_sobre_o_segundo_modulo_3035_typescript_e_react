import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, Setcount] = useState(0)
  const [countB, SetcountB] = useState(0)



  useEffect(() => {
    console.log('Executa quando renderiza')
  })

  useEffect(() => {
    console.log('Executa quando count altera')
  }, [count])

  return (
    
      <div>
      
      <button onClick={() => Setcount((prevCount) => prevCount + 1)}>Adiciona</button>
      <p>Contador: {count}</p>

      <button onClick={() => SetcountB((prevCount) => prevCount + 1)}>Adiciona</button>
      <p>ContadorB: {countB}</p>
      </div>
  )        
    
}

export default App;
