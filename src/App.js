import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import PokemonDetails from "./pages/PokemonDetails";
import AppNavigator from "./components/AppNavigator";

export default function App() {
  return (
    <Router>
      <AppNavigator></AppNavigator>
      <Routes>
        <Route exact path="/" element={<Pokedex />}></Route>
        <Route exact path="/pokemon/:id" element={<PokemonDetails />}></Route>
      </Routes>
    </Router>
  );
}
