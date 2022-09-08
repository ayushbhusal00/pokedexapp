import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import PokemonDetails from "./pages/PokemonDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokedex />}></Route>
        <Route path="/pokemon/:id" element={<PokemonDetails />}></Route>
      </Routes>
    </Router>
  );
}
