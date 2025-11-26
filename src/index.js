// Import React dan ReactDOM untuk render komponen
import React from "react";
import ReactDOM from "react-dom/client";

// Import file CSS global
import "./index.css";

// Import App utama
import App from "./App";

// Import Redux Provider dan store
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

// Import reportWebVitals opsional untuk mengukur performa aplikasi
import reportWebVitals from "./reportWebVitals";

// Ambil root element di HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render aplikasi
root.render(
  <React.StrictMode>
    {/* Provider membungkus App supaya seluruh komponen bisa akses Redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Jalankan reportWebVitals jika ingin mengukur performa (opsional)
reportWebVitals();
