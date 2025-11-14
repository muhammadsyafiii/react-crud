import React, { useEffect, useState } from "react";
import { useMoviesContext } from "../context/MovieProvider";
import MovieCard from "./MovieCard";
import MovieForm from "./MovieForm";
import Modal from "./Modal";

export default function MovieList() {
  const { state, loadMovies, deleteMovie } = useMoviesContext();
  const { movies, loading, error } = state;

  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openEdit = (movie) => {
    setEditing(movie);
    setShowForm(true);
  };

  const onCloseForm = () => {
    setEditing(null);
    setShowForm(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <h2>Movie List</h2>
        <button
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
        >
          + Add movie
        </button>
      </div>

      {loading && <p>Loading movies...</p>}
      {error && <p style={{ color: "red" }}>Error fetching movies</p>}
      {!loading && movies.length === 0 && <p>No movies yet. Add one!</p>}

      <div style={{ display: "grid", gap: 12 }}>
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            movie={m}
            onEdit={openEdit}
            onDelete={deleteMovie}
          />
        ))}
      </div>

      {showForm && (
        <Modal onClose={onCloseForm}>
          <MovieForm editing={editing} onClose={onCloseForm} />
        </Modal>
      )}
    </div>
  );
}
