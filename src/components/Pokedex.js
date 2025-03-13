import PokemonCard from "./PokemonCard";
import {useEffect, useState} from "react";
import {Box, Grid, Pagination, Typography} from "@mui/material";

const Pokedex = () =>{
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const itemsPerPage = 9;
    useEffect(() => {
        async function fetchData() {
            try {
                const offset = (page - 1) * itemsPerPage;
                const response = await fetch(
                    `https://aplicacion-env.eba-p22dcwvp.us-east-2.elasticbeanstalk.com/pokedex?offset=${offset}&limit=${itemsPerPage}`
                );
                const result = await response.json();
                setData(result.items || []);
                setTotalResults(result.count || 0);
                setTotalPages(Math.ceil(result.count / itemsPerPage));
            } catch (error) {
                console.error('Error fetching data:', error);
                setData([]);
            }
        }

        fetchData();
    }, [page]);
    return (
         <div>
             <h1>Pokedex</h1>
             {data.length > 0 ? (
                 <>
                     <Grid container spacing={3}>
                         {data.map((item, index) => (
                             <Grid item xs={12} sm={6} md={4} key={index}>
                                 <PokemonCard item={item} />
                             </Grid>
                         ))}
                     </Grid>
                     <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                         <Pagination
                             count={totalPages}
                             page={page}
                             onChange={(event, value) => setPage(value)}
                             color="primary"
                         />
                     </Box>
                     <Typography variant="subtitle1">
                         Total Results: {totalResults}
                     </Typography>
                 </>
             ) : (
                 <p>Loading data...</p>
             )}
         </div>
    );
}
export default Pokedex;