import type { Meta } from './types';

export function getGithubUrl() {
  return (import.meta as Meta).env.VITE_GITHUB_URL;
}
