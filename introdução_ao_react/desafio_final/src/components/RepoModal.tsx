import { useEffect } from "react";
import type { GithubRepo } from "../types/github";

export default function RepoModal({
  repo,
  onClose,
}: {
  repo: GithubRepo;
  onClose: () => void;
}) {
  useEffect(() => {
    function key(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>X</button>

        <h3>{repo.name}</h3>
        <p>{repo.description || "Sem descrição"}</p>

        <p><strong>Visibilidade:</strong> {repo.visibility}</p>
        <p><strong>Linguagem:</strong> {repo.language}</p>

        <a href={repo.html_url} target="_blank">Abrir no GitHub</a>
      </div>
    </div>
  );
}
