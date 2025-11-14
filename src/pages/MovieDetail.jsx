import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../services/api";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await movieService.get(id);
        setMovie(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>
        {movie.title} ({movie.year})
      </h2>
      <img
        src={movie.poster}
        alt={movie.title}
        style={{ maxWidth: 300, borderRadius: 6 }}
      />
      <p>{movie.description}</p>
    </div>
  );
}
