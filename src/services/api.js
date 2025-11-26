import axios from "axios";

const API_URL = "http://localhost:3001/movies";

const api = axios.create({
  baseURL: API_URL,
});

export const movieAPI = {
  getAll: () => api.get("/"),
  getById: (id) => api.get(`/${id}`),
  create: (data) => api.post("/", data),
  update: (id, data) => api.put(`/${id}`, data),
  remove: (id) => api.delete(`/${id}`),
};
