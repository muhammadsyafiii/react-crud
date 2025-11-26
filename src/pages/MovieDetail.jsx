import React, { useEffect, useState } from "react";
import { movieAPI } from "../services/api";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const res = await movieAPI.getById(id);
        setMovie(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
    </div>
  );
};

export default MovieDetail;
