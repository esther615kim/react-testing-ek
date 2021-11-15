import React from 'react'
import {AppBar,Toolbar,IconButton} from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";
import './styled.css'
function Navbar() {
    return (
        <div>
            <AppBar position="sticky">
                <Toolbar  className="toolbar" >
                    <div className="logo">mytrip</div>
                    <IconButton>
                        <ShoppingCart fontSize="large"/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
