// ./src/hooks/useStarships.ts
import { useQuery } from "@tanstack/react-query";

async function fetchData() {
  const result = await fetch(`https://api.spaceflightnewsapi.net/v3/articles`);
  const json = await result.json();
  return json;
}

export function useArticleDetails() {
  return useQuery(["article"], fetchData);
}