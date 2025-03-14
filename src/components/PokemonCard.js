import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const PokemonCard = ({ item }) => {
    return (
        <Card className="pokemon-card">
            <CardContent className="pokemon-details-container">
                <Typography className="pokemon-name">{item.name.toUpperCase()}</Typography>
                <Typography className="pokemon-details">Weight: {item.weight}</Typography>
                <Typography className="pokemon-details">Type: {item.types[0].type.name}</Typography>

                <div className="abilities-container">
                    <Typography >Abilities</Typography>
                    {item.abilities.map((ability, index) => (
                        <Typography key={index} className="ability">
                            {ability.ability.name.toUpperCase()}
                        </Typography>
                    ))}
                </div>

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

export default PokemonCard;
