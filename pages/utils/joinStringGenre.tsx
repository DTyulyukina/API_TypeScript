export const joinStringGenre = (genres: string[]) => {
  return genres.length !== 1 ? genres.join(", ") || "No genre." : genres[0];
};
