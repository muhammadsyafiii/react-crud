import axios from "axios";

// Ganti <YOUR-MOCKAPI-URL> dengan endpoint MockAPI kamuovies";
const MOVIES_API_BASE =
  "https://642f7c1232a1e2a3b1f1abcd.mockapi.io/api/movies";

export const api = axios.create({
  baseURL: MOVIES_API_BASE,
  timeout: 8000,
});

export const movieService = {
  list: () => api.get("/"),
  get: (id) => api.get(`/${id}`),
  create: (payload) => api.post("/", payload),
  update: (id, payload) => api.put(`/${id}`, payload),
  remove: (id) => api.delete(`/${id}`),
};
