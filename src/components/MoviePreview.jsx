import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const options = {
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
    }
};

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const res = await fetch(`${API_BASE_URL}/movie/${id}`, options);
            const data = await res.json();
            setMovie(data);
        };

        fetchDetails();
    }, [id]);

    if (!movie) return <p>Loading...</p>;

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="mt-2 text-gray-400">{movie.overview}</p>
            <img
                className="rounded-lg mt-4"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
        </div>
    );
}
