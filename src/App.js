import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
