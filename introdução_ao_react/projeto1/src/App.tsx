import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from './components/container'
import { Text } from './components/text';
import { Title } from './components/title';
import { Welcome } from './components/welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome/>

        <Container/>
        <Title/>
        <Text/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
