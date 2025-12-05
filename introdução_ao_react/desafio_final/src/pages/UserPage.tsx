import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchUser, fetchRepos } from "../services/github";
import type { GithubUser, GithubRepo } from "../types/github";

import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import RepoCard from "../components/RepoCard";
import RepoModal from "../components/RepoModal";

export default function UserPage() {
  const { username } = useParams();
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedRepo, setSelectedRepo] = useState<GithubRepo | null>(null);

  useEffect(() => {
  if (!username) return;

  setLoading(true);
  setError("");

  Promise.all([fetchUser(username), fetchRepos(username)])
    .then(([userData, repoData]) => {
      setUser(userData);
      setRepos(repoData);
    })
    .catch((err) => {
      setError(err.message || "Erro ao carregar dados.");
    })
    .finally(() => {
      setLoading(false);
    });

}, [username]);


  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <main className="container">
      {user && (
        <section className="user-info">
          <img src={user.avatar_url} alt={user.login} className="avatar" />
          <div>
            <h2>{user.name || user.login}</h2>
            <p>{user.bio}</p>
            <a href={user.html_url} target="_blank">Ver no GitHub</a>
          </div>
        </section>
      )}

      <h3>Repositórios ({repos.length})</h3>

      <section className="repos-grid">
        {repos.map((repo) => (
          <RepoCard
            key={repo.id}
            repo={repo}
            onClick={() => setSelectedRepo(repo)}
          />
        ))}
      </section>

      {selectedRepo && (
        <RepoModal repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
      )}
    </main>
  );
}