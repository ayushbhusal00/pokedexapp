import React, { useContext, useState, useEffect } from "react";
import {
  Grid,
  Box,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FavouritesContext } from "../App";
import { IMAGE_API_URL, POKEMON_API_URL } from "../config";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    textAlign: "center",
    padding: "80px 10px 0px 10px",
    backgroundColor: "rgb(80,80,80)",
  },
  cardMedia: {
    margin: "auto",
    width: 130,
    height: 130,
  },
  card: {
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(90, 90, 90)",
    },
    textAlign: "center",
  },
}));

export default function Favourites() {
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const { favourites, setFavourites } = useContext(FavouritesContext);

  const getPokemon = async (index) => {
    const response = await axios.get(POKEMON_API_URL + "/" + index);

    // console.log("Axios Response:");
    // console.log(response.data);

    const pokemon = {
      id: response.data.id,
      url: IMAGE_API_URL + index + ".png",
      name: response.data.name,
    };

    setPokemonDetail((old) => [...old, pokemon]);

    return pokemon;
  };

  useEffect(() => {
    favourites.map((index) => {
      getPokemon(index);
      return console.log("Initialized Content");
    });
  }, [favourites]);

  const classes = useStyles();

  return (
    <Box>
      {favourites ? (
        <Grid className={classes.pokedexContainer} container spacing={2}>
          {pokemonDetail.map((index) => {
            const { id, url, name } = index;

            return (
              <Grid item xs={12} sm={2}>
                <Link to={"/pokemon/" + id}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      width="100%"
                      height={10}
                      image={url}
                      alt={id}
                    ></CardMedia>
                    <CardContent>
                      <Typography variant="body1" component="p">
                        {name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <CircularProgress></CircularProgress>
      )}
    </Box>
  );
}
