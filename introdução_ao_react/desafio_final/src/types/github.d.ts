export interface GithubUser {
  login: string;
  avatar_url: string;
  name?: string;
  bio?: string;
  html_url: string;
  public_repos?: number;
}

export interface GithubRepo {
  id: number;
  name: string;
  description?: string;
  html_url: string;
  language?: string | null;
  visibility?: string;
}
