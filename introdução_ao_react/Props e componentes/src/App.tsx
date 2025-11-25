import React from 'react';
import {Welcome} from './components/welcome'
import './App.css';
import { User } from './components/user';

function App() {
  const nome = 'Julia'
  return (
    <div>
      <Welcome name = {nome} />
      <User nome={nome} idade={17} email='Ablabla' />
    </div>
  )
}

export default App;
