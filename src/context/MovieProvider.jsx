import React, { createContext, useContext, useState, useEffect } from "react";
import { movieAPI } from "../services/api";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    try {
      const res = await movieAPI.getAll();
      setMovies(res.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const addMovie = async (movie) => {
    try {
      const res = await movieAPI.create(movie);
      setMovies([...movies, res.data]);
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  const updateMovie = async (id, updatedMovie) => {
    try {
      const res = await movieAPI.update(id, updatedMovie);
      setMovies(movies.map((mv) => (mv.id === id ? res.data : mv)));
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  const deleteMovie = async (id) => {
    try {
      await movieAPI.remove(id);
      setMovies(movies.filter((mv) => mv.id !== id));
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{ movies, loadMovies, addMovie, updateMovie, deleteMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// Hook custom untuk akses context
export const useMovie = () => useContext(MovieContext);
