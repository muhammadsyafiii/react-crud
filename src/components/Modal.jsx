import React from "react";

export default function Modal({ children, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.4)",
        zIndex: 9999,
        padding: 16,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 6px 30px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ padding: 8, textAlign: "right" }}>
          <button onClick={onClose}>✕</button>
        </div>
        <div style={{ padding: 12 }}>{children}</div>
      </div>
    </div>
  );
}
