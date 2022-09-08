import React, { useEffect, useState } from "react";
import { Grid, CircularProgress, Box } from "@mui/material";
import AppNavigator from "../components/AppNavigator";
import axios from "axios";
import { POKEMON_API_URL, IMAGE_API_URL } from "../config";
import PokemonCard from "../components/PokemonCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    textAlign: "center",
    padding: "80px 10px 0px 10px",
  },
}));

export default function Pokedex() {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios.get(POKEMON_API_URL + "?limit=200").then((response) => {
      if (response.status === 200) {
        const { results } = response.data;
        let newPokemonData = [];
        results.forEach((pokemon, index) => {
          index++;
          let pokemonObject = {
            id: index,
            url: IMAGE_API_URL + index + ".png",
            name: pokemon.name,
          };
          newPokemonData.push(pokemonObject);
        });
        setPokemonData(newPokemonData);
      }
    });
  }, []);

  return (
    <Box>
      <AppNavigator></AppNavigator>
      {pokemonData ? (
        <Grid className={classes.pokedexContainer} container spacing={2}>
          {pokemonData.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                image={pokemon.url}
              />
            );
          })}
        </Grid>
      ) : (
        <CircularProgress></CircularProgress>
      )}
    </Box>
  );
}
