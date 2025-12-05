import type { GithubUser, GithubRepo } from "../types/github";

const BASE = "https://api.github.com/users";

export async function fetchUser(username: string): Promise<GithubUser> {
  const res = await fetch(`${BASE}/${username}`);

  if (!res.ok) {
    throw new Error("Usuário não encontrado.");
  }

  return res.json();
}

export async function fetchRepos(username: string): Promise<GithubRepo[]> {
  const res = await fetch(`${BASE}/${username}/repos`);

  if (!res.ok) {
    throw new Error("Erro ao carregar os repositórios.");
  }

  return res.json();
}
