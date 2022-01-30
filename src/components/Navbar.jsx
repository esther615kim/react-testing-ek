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
                        
                    <StyledLink to="/cart">
                    <Chip icon={<TagFaces/>} label="counter" variant="filled"></Chip>
                    </StyledLink>

                    <StyledLink to={'/login'}>
                    <Chip icon={<Face />} label="login" variant="filled"></Chip>
                    </StyledLink>

                    <StyledLink to="/favs">
                    <Chip  size="medium" icon={<FavoriteBorderIcon/>} label="Favourites" variant="filled"></Chip>
                    </StyledLink>

                    <StyledLink  style={{ textDecoration: 'none' }} to="/mytrip">
                    <Chip color="primary" icon={<LocalAirport/>}label="my-trip" variant="filled"></Chip>
                    </StyledLink>

                    <StyledLink style={{ textDecoration: 'none' }} to="/cart">
                    <Chip  color="primary" icon={<ShoppingCart/>} label="cart" variant="filled"></Chip>
                    </StyledLink>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
// style={{ textDecoration: 'none' }}