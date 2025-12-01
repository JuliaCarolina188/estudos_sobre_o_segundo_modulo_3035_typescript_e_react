import React, { useState } from 'react';
import filmes from './filmes.json'
import './App.css';

function App() {
  const [busca, setBusca] = useState('')
  const filmesFiltrados = filmes.filter(filme =>
    filme.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
        <div>
          <input
            type="text"
            placeholder="Pesquisar filme"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Gênero</th>
                <th>Imagem</th>
              </tr>
            </thead>

            <tbody>
              {filmesFiltrados.map(filme => (
                <tr key={filme.id}>
                  <td>{filme.id}</td>
                  <td>{filme.nome}</td>
                  <td>{filme.genero}</td>
                  <td>
                    <img src={filme.imagem} alt={filme.nome} width="80" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

      </div>

      
  );
}

export default App;
