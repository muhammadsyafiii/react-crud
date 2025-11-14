import React, { useState, useEffect } from "react";

function UserForm({ addUser, user, updateUser }) {
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      updateUser(formData);
    } else {
      addUser(formData);
    }
    setFormData({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit">{user ? "Update User" : "Add User"}</button>
    </form>
  );
}

export default UserForm;
