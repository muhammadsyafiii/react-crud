import React from "react";
import MovieList from "../components/MovieList";

export default function Home() {
  return (
    <div style={{ padding: 20, maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: 20 }}>
        <h1 style={{ margin: 0 }}>Chill — Movie App</h1>
        <p style={{ marginTop: 6, color: "#666" }}>
          Belajar integrasi API & state management
        </p>
      </header>

      <main>
        <MovieList />
      </main>
    </div>
  );
}
