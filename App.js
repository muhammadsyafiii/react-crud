import React from "react";
import ListView from "./components/ListView";
import AddForm from "./components/AddForm";

function App() {
  return (
    <div className="App">
      <h1>My Movie App</h1>
      <AddForm />
      <ListView />
    </div>
  );
}

export default App;
