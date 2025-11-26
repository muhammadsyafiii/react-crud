import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieProvider";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <MovieProvider>
      <Router>
        <MovieForm />
        <MovieList />
        <Routes>
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;
