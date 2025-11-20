import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Search from "./components/Search.js";
import Spinner from "./components/Spinner.jsx";
import MovieCard from "./components/MovieCard.jsx";
import MoviePreview from "./components/MoviePreview.jsx";

const API_BASE_URL = "https://api.themoviedb.org/3";

// Bearer token from .env
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
    },
};

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchMovies = async (query = "") => {
        setIsLoading(true);
        setErrorMessage("");

        try {
            const endpoint = query
                ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(
                    query
                )}&include_adult=false&language=en-US&page=1`
                : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&language=en-US&page=1`;

            const response = await fetch(endpoint, API_OPTIONS);
            if (!response.ok) throw new Error("Failed to fetch movies");

            const data = await response.json();
            setMovieList(data.results || []);
        } catch (error) {
            console.error("Error fetching movies:", error);
            setErrorMessage("Error fetching movies. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const fetchTrending = async () => {
        try {
            const response = await fetch(
                `${API_BASE_URL}/trending/movie/week?language=en-US`,
                API_OPTIONS
            );

            const data = await response.json();
            setTrendingMovies(data.results || []);
        } catch (error) {
            console.error("Error loading trending movies:", error);
        }
    };

    useEffect(() => {
        fetchMovies(searchTerm);
    }, [searchTerm]);

    useEffect(() => {
        fetchTrending();
    }, []);

    return (
        <main>
            <div className="pattern" />
            <div className="wrapper">
                <header>
                    <img src="./hero.png" className="rounded-2xl" alt="Background" />
                    <h1>
                        Find <span className="text-gradient">Movies</span> You'll Enjoy
                        Without the Hassle,{" "}
                        <span className="text-gradient">Coming Soon!</span>
                    </h1>

                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </header>

                {trendingMovies.length > 0 && (
                    <section className="trending">
                        <h2>Trending Movies</h2>
                        <ul>
                            {trendingMovies.map((movie, index) => (
                                <li key={movie.id || index}>
                                    <p>{index + 1}</p>
                                    <img
                                        src={
                                            movie.poster_path
                                                ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                                                : "./img.png"
                                        }
                                        alt={movie.title}
                                    />
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                <section className="all-movies">
                    <h2>All Movies</h2>

                    {isLoading ? (
                        <Spinner />
                    ) : errorMessage ? (
                        <p className="text-red-500">{errorMessage}</p>
                    ) : (
                        <ul>
                            {movieList.map((movie, index) => (
                                <MovieCard key={movie.id || index} movie={movie} />
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </main>
    );
};

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MoviePreview />} />
        </Routes>
    );
}
