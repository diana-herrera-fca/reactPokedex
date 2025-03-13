import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {Box, Card, Grid, Typography} from "@mui/material";
import "../styleEvolutions.css";
import PokemonEvolution from "./PokemonEvolution";

const PokemonDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            console.log("No ID found in URL params.");
            return;
        }

        console.log(`Fetching data for Pokémon ID: ${id}`);

        async function fetchData() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    `https://xe40edt7y4.execute-api.us-east-2.amazonaws.com/prod/pokedex/pokemon/${id}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error}</h1>;
    if (!data) return <h1>No Data Found</h1>;

        return (
            <Card className="pokemon-detail-card">
                <Box className="detail-container">
                    <Box className="detail-info">
                        <Typography className="detail-name">{data.name.toUpperCase()}</Typography>
                        <Typography className="detail-description">DESCRIPTION: {data.description.toUpperCase()}</Typography>
                        <Typography className="detail-weight">WEIGHT: {data.weight}</Typography>
                        <Typography className="detail-type">TYPE: {data.types[0].type.name.toUpperCase()}</Typography>

                        <Typography className="detail-abilities-title">ABILITIES</Typography>
                        {data.abilities.map((ability, index) => (
                            <Typography key={index} className="detail-ability">
                                {ability.ability.name.toUpperCase()}
                            </Typography>
                        ))}
                    </Box>

                    <Box className="detail-image-container">
                        <img src={data.sprites.front_default} alt={data.name} className="detail-image" />
                    </Box>
                </Box>

                <Box className="evolution-container">
                    <Typography className="evolution-title">EVOLUTIONS</Typography>
                    <Grid container spacing={2} className="evolution-grid">
                        {data.evolutions.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <PokemonEvolution item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Card>
);
};

export default PokemonDetail;
