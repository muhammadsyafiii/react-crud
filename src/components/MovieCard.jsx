import React from "react";

export default function MovieCard({ movie, onEdit, onDelete }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        padding: 12,
        border: "1px solid #ddd",
        borderRadius: 8,
        background: "#fff",
        alignItems: "flex-start",
      }}
    >
      <img
        src={movie.poster || "https://via.placeholder.com/100x140"}
        alt={movie.title}
        style={{ width: 100, height: 140, objectFit: "cover", borderRadius: 6 }}
      />
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: 0 }}>
          {movie.title} <small style={{ color: "#666" }}>({movie.year})</small>
        </h3>
        <p style={{ margin: "6px 0" }}>
          {movie.genre} • Rating: {movie.rating}
        </p>
        <p style={{ margin: "6px 0", color: "#444" }}>
          {movie.description?.slice(0, 140)}
          {movie.description && movie.description.length > 140 ? "…" : ""}
        </p>
        <div style={{ marginTop: 8 }}>
          <button onClick={() => onEdit(movie)} style={{ marginRight: 8 }}>
            Edit
          </button>
          <button onClick={() => onDelete(movie.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
