import React, { createContext, useReducer, useContext } from "react";
import { movieService } from "../services/api";

const MovieContext = createContext();

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: null };
    case "SET_MOVIES":
      return { ...state, movies: action.payload, loading: false };
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
        loading: false,
      };
    case "UPDATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map((m) =>
          m.id === action.payload.id ? action.payload : m
        ),
        loading: false,
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((m) => m.id !== action.payload),
        loading: false,
      };
    case "ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

export function MovieProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadMovies = async () => {
    dispatch({ type: "LOADING" });
    try {
      const res = await movieService.list();
      dispatch({ type: "SET_MOVIES", payload: res.data });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err });
    }
  };

  const addMovie = async (movie) => {
    dispatch({ type: "LOADING" });
    try {
      const res = await movieService.create(movie);
      dispatch({ type: "ADD_MOVIE", payload: res.data });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err });
    }
  };

  const updateMovie = async (id, movie) => {
    dispatch({ type: "LOADING" });
    try {
      const res = await movieService.update(id, movie);
      dispatch({ type: "UPDATE_MOVIE", payload: res.data });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err });
    }
  };

  const deleteMovie = async (id) => {
    dispatch({ type: "LOADING" });
    try {
      await movieService.remove(id);
      dispatch({ type: "DELETE_MOVIE", payload: id });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err });
    }
  };

  return (
    <MovieContext.Provider
      value={{ state, loadMovies, addMovie, updateMovie, deleteMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMoviesContext() {
  return useContext(MovieContext);
}
