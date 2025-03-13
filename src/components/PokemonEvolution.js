import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const PokemonEvolution = ({ item }) => {
    return (
        <Card className="pokemon-card">
            <CardContent className="pokemon-details-container">
                <Typography className="pokemon-name">{item.name.toUpperCase()}</Typography>


                <a href={`/pokemon/${item.name}`} className="details-link">
                    Details
                </a>
            </CardContent>

            <Box className="pokemon-image-container">
                <img src={item.sprites.front_default} alt={item.name} className="pokemon-image" />
            </Box>
        </Card>
    );
};

export default PokemonEvolution;
