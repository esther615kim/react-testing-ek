import React from 'react'
import {AppBar,Toolbar,Button,Stack,Chip} from "@mui/material";
import { Link } from 'react-router-dom';
import {LocalAirport, ShoppingCart} from "@mui/icons-material";
import {TagFaces,Face} from '@mui/icons-material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {StyledLink} from './Header/header.styled'

import './styled.css'
import Basket from './Basket/index';
function Navbar() {
    return (
        <div>
            <AppBar position="sticky">
                <Toolbar  className="toolbar" >
                    <h4>Testing World</h4>
                    <Stack className="logo" direction="row" spacing={2}>
                        
                    <Link to="/cart">
                    <Chip icon={<TagFaces/>} label="counter" variant="filled"></Chip>
                    </Link>

                    <Link  to={'/login'}>
                    <Chip icon={<Face />} label="login" variant="filled"></Chip>
                    </Link>

                    <StyledLink to="/favs">
                    <Chip  size="medium" icon={<FavoriteBorderIcon/>} label="Favourites" variant="filled"></Chip>
                    </StyledLink>

                    <Link  to="/mytrip">
                    <Chip color="primary" icon={<LocalAirport/>}label="my-trip" variant="filled"></Chip>
                    </Link>

                    <Link to="/cart">
                    <Chip  color="primary" icon={<ShoppingCart/>} label="cart" variant="filled"></Chip>
                    </Link>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
// style={{ textDecoration: 'none' }}