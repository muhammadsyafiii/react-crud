import React, { useEffect, useState } from "react";
import { useMoviesContext } from "../context/MovieProvider";

function emptyMovie() {
  return {
    title: "",
    year: new Date().getFullYear(),
    genre: "",
    rating: 0,
    description: "",
    poster: "",
  };
}

export default function MovieForm({ editing, onClose }) {
  const { addMovie, updateMovie } = useMoviesContext();
  const [form, setForm] = useState(emptyMovie());
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (editing) setForm(editing);
    else setForm(emptyMovie());
  }, [editing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "rating" || name === "year" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (editing) {
        await updateMovie(editing.id, form);
      } else {
        await addMovie(form);
      }
      onClose();
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan movie.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: 520, maxWidth: "90%", padding: 12 }}
    >
      <h3>{editing ? "Edit Movie" : "Add Movie"}</h3>

      <label>
        Title
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Year
        <input
          name="year"
          type="number"
          value={form.year}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Genre
        <input name="genre" value={form.genre} onChange={handleChange} />
      </label>

      <label>
        Rating
        <input
          name="rating"
          type="number"
          min="0"
          max="10"
          value={form.rating}
          onChange={handleChange}
        />
      </label>

      <label>
        Poster URL
        <input
          name="poster"
          value={form.poster}
          onChange={handleChange}
          placeholder="https://..."
        />
      </label>

      <label>
        Description
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={4}
        />
      </label>

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button type="submit" disabled={submitting}>
          {submitting ? "Saving..." : "Save"}
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
}
