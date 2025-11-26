import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../services/api";
import { addMovie } from "../store/redux/movieSlice";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, year: Number(year) };
    addData(newMovie).then((res) => {
      dispatch(addMovie(res.data));
      setTitle("");
      setYear("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddForm;
