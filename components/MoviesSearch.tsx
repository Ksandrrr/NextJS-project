"use client";
import { fetchSearchMovies } from "@/Shared/api";
import { ReactEventHandler, useState } from "react";
type Props = {
  onSearch: (value: any[]) => void;
};
const MoviesSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit: ReactEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const movies = await fetchSearchMovies(search);
      onSearch(movies.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
      {loading && <h2>Loading...</h2>}
    </form>
  );
};
export { MoviesSearch };
