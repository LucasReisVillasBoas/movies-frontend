import React, { useEffect, useState } from 'react';
import { getGenres, searchMoviesByGenres } from '../api';

const GenreSearch: React.FC = () => {
    const [genres, setGenres] = useState<string[]>([]);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const genreList = await getGenres();
            setGenres(genreList);
        };
        fetchGenres();
    }, []);

    const handleGenreChange = (genre: string) => {
        setSelectedGenres((prev) => 
            prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
        );
    };

    const handleSearch = async () => {
        if (selectedGenres.length) {
            const results = await searchMoviesByGenres(selectedGenres);
            setMovies(results);
        }
    };

    return (
        <div>
            <h2>Busca por Gênero</h2>
            {genres.map((genre) => (
                <div key={genre}>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedGenres.includes(genre)}
                            onChange={() => handleGenreChange(genre)}
                        />
                        {genre}
                    </label>
                </div>
            ))}
            <button onClick={handleSearch}>Buscar</button>
            <ul>
                {movies.map((movie) => (
                    <li key={movie._id}>{movie.title} ({movie.year})</li>
                ))}
            </ul>
        </div>
    );
};

export default GenreSearch;
