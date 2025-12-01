import React, { useState } from 'react';
import filmesJson from './filmes.json';
import './App.css';

interface Filme {
  id: number;
  nome: string;
  genero: string;
  imagem: string;
}

const App: React.FC = () => { 

  const filmes = filmesJson as Filme[];

  const [busca, setBusca] = useState<string>('');
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const [ultimaSelecionado, setUltimaSelecionado] = useState<string | null>(null);

  const filmesFiltrados = filmes.filter(filme =>
    filme.nome.toLowerCase().includes(busca.toLowerCase())
  );

  function toggleCheck(filme: Filme, checked: boolean) {
    setCheckedIds(prev => {
      if (checked) {
        return prev.includes(filme.id) ? prev : [...prev, filme.id];
      } else {
        return prev.filter(id => id !== filme.id);
      }
    });

    if (checked) {
      setUltimaSelecionado(filme.nome);
    } else {
      setUltimaSelecionado(null);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar filme"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {ultimaSelecionado && <p>Filme selecionado: {ultimaSelecionado}</p>}

      <table>
        <thead>
          <tr>
            <th>Checked</th>
            <th>ID</th>
            <th>Nome</th>
            <th>Gênero</th>
            <th>Imagem</th>
          </tr>
        </thead>

        <tbody>
          {filmesFiltrados.map((filme) => {
            const isChecked = checkedIds.includes(filme.id);
            return (
              <tr key={filme.id}>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => toggleCheck(filme, e.target.checked)}
                    />
                    Marcar
                  </label>
                </td>

                <td>{filme.id}</td>
                <td>{filme.nome}</td>
                <td>{filme.genero}</td>
                <td>
                  <img src={filme.imagem} alt={filme.nome} width="80" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {checkedIds.length > 0 && (
        <div>
          <h3>Filmes marcados:</h3>
          <ul>
            {filmes.filter(f => checkedIds.includes(f.id)).map(f => (
              <li key={f.id}>{f.nome}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
