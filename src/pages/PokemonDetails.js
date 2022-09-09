import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { POKEMON_API_URL } from "../config";
import { CircularProgress, Container, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FavouritesContext } from "../App";

const useStyle = makeStyles((theme) => ({
  centerContent: {
    position: "fixed",
    top: "45%",
    left: "50%",
  },
  pokemonImage: {
    width: "auto",
    height: "350px",
  },
  boxContainer: {
    alignItems: "center",

    padding: "2rem",
    backgroundColor: "rgb(30,30,30)",
    color: "white",
  },
  pokemonContainer: {
    margin: "auto",
    width: "100%",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  pill: {
    backgroundColor: "teal",
    color: "white",
    padding: "5px 10px",
    borderRadius: 5,
  },
}));
export default function PokemonDetails() {
  const [isFavourite, setIsFavourite] = useState(false);
  const { favourites, setFavourites } = useContext(FavouritesContext);
  const classes = useStyle();
  const params = useParams();
  const [pokemonDetails, setPokemonDetails] = useState();

  useEffect(() => {
    const getPokemonDetails = async () => {
      const response = await axios.get(POKEMON_API_URL + "/" + params.id);
      setPokemonDetails(response.data);
    };
    getPokemonDetails();
  }, [params.id]);

  const addtoFavourites = (e) => {
    e.preventDefault();
    if (isFavourite) {
      setIsFavourite(false);
      setFavourites((old) => old.filter((item) => item !== pokemonDetails.id));
    } else {
      setIsFavourite(true);
      setFavourites((old) => [...old, pokemonDetails.id]);
    }
    console.log("Favourites: " + favourites);
  };
  return pokemonDetails ? (
    <Container sx={{ marginTop: 10 }} maxwidth="md">
      <Box className={classes.boxContainer}>
        <Stack direction="row" justifyContent="space-between">
          <Link
            to="/"
            className="noDecoration"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ArrowBackIcon />
          </Link>
          <Link
            to="#"
            onClick={addtoFavourites}
            className="noDecoration"
            style={{ textDecoration: "none", color: "white" }}
          >
            {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Link>
        </Stack>
        <Box className={classes.pokemonContainer}>
          <img
            className={classes.pokemonImage}
            src={pokemonDetails.sprites.other.dream_world.front_default}
            alt={pokemonDetails.species.name}
          ></img>
          <Typography variant="h3" component="h1">
            {pokemonDetails.name}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            width="200px"
            margin="20px auto"
          >
            <Typography>Type:</Typography>
            {pokemonDetails.types.map((index) => {
              return (
                <Typography className={classes.pill}>
                  {index.type.name}
                </Typography>
              );
            })}
          </Stack>
        </Box>
        <Stack direction="row" justifyContent="space-between" border={1} p={3}>
          <Stack>
            <Typography variant="h5" component="h2">
              Abilities
            </Typography>

            {pokemonDetails.abilities.map((index) => {
              return <Typography>{index.ability.name}</Typography>;
            })}
          </Stack>
          <Stack>
            <Typography variant="h5" component="h2">
              Height
            </Typography>
            <Typography>{pokemonDetails.height}</Typography>
          </Stack>
          <Stack>
            <Typography variant="h5" component="h2">
              Weight
            </Typography>
            <Typography>{pokemonDetails.weight}</Typography>
          </Stack>
          <Stack>
            <Typography variant="h5" component="h2">
              Base Experience
            </Typography>
            <Typography>{pokemonDetails.base_experience}</Typography>
          </Stack>
        </Stack>
      </Box>
    </Container>
  ) : (
    <CircularProgress className={classes.centerContent} />
  );
}
