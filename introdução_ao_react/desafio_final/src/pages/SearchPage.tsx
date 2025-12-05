import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!username.trim()) {
      setError("Digite um usuário válido.");
      return;
    }

    navigate(`/user/${username}`);
  }

  return (
    <main className="container">
      <h1>Buscar Usuário no GitHub</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Digite o username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Buscar</button>
      </form>

      {error && <p className="error">{error}</p>}
    </main>
  );
}
