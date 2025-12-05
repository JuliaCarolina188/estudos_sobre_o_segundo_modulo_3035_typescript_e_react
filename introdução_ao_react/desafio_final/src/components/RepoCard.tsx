import type { GithubRepo } from "../types/github";

export default function RepoCard({
  repo,
  onClick,
}: {
  repo: GithubRepo;
  onClick: () => void;
}) {
  return (
    <article className="repo-card" onClick={onClick}>
      <h4>{repo.name}</h4>
      <p>{repo.description || "Sem descrição"}</p>
    </article>
  );
}
