import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { POKEMON_API_URL } from "../config";
import { CircularProgress } from "@mui/material";
export default function PokemonDetails() {
  const params = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const getPokemonDetails = async () => {
      const response = await axios.get(POKEMON_API_URL + "/" + params.id);
      setPokemonDetails(response.data);
    };
    getPokemonDetails();
  }, [params.id]);

  return pokemonDetails ? (
    <div>
      <h1 style={{ marginTop: 200 }}>
        Hello From Pokemon Details {params.id}
        {console.log(pokemonDetails)}
      </h1>
    </div>
  ) : (
    <CircularProgress style={{ position: "fixed", top: "45%", left: "50%" }} />
  );
}
