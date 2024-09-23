import React, { useState } from "react";
import { searchMoviesByKeyword } from "../api";

const MovieSearch: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const results = await searchMoviesByKeyword(keyword);
      setMovies(results);
      setError("");
    } catch (err) {
      setError("Erro ao buscar filmes");
    }
  };

  return (
    <div>
      <h2>Busca Flexível de Filmes</h2>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Digite uma palavra-chave"
      />
      <button onClick={handleSearch}>Buscar</button>
      {error && <p>{error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
