import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static" className="navbar">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <a href={'/'} className="details-link">
                    <img src="/logo192.png" className="logo" />
                </a>

                <h1>Pokedex</h1>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
