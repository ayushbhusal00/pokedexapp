import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import PokemonDetails from "./pages/PokemonDetails";
import AppNavigator from "./components/AppNavigator";
import { createContext, useState } from "react";
import Favourites from "./pages/Favourites";

export const FavouritesContext = createContext({
  favourites: "",
  setFavourites: () => {},
});

export default function App() {
  const [favourites, setFavourites] = useState([]);
  const value = { favourites, setFavourites };
  return (
    <FavouritesContext.Provider value={value}>
      <Router>
        <AppNavigator></AppNavigator>
        <Routes>
          <Route exact path="/" element={<Pokedex />}></Route>
          <Route exact path="/pokemon/:id" element={<PokemonDetails />}></Route>
          <Route exact path="/favourites" element={<Favourites />}></Route>
        </Routes>
      </Router>
    </FavouritesContext.Provider>
  );
}
