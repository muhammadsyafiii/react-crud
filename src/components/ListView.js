import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData, deleteData } from "../services/api";
import { setMovies, deleteMovie } from "../store/redux/movieSlice";

const ListView = () => {
  const movies = useSelector((state) => state.movie.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    getData().then((res) => {
      dispatch(setMovies(res.data));
    });
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteData(id).then(() => {
      dispatch(deleteMovie(id));
    });
  };

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} ({movie.year})
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
