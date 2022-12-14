import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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

export default function PokemonCard(props) {
  const classes = useStyles();
  const { pokemon, image } = props;
  // console.log(pokemon);
  const { id, name } = pokemon;
  return (
    <Grid item xs={12} sm={2}>
      <Link to={"/pokemon/" + id}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            width="100%"
            height={10}
            image={image}
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
}
