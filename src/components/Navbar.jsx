import React from 'react'
import {AppBar,Toolbar,IconButton,Stack,Chip, Link} from "@mui/material";
import {LocalAirport, ShoppingCart} from "@mui/icons-material";
import {TagFaces,Face} from '@mui/icons-material';

import './styled.css'
function Navbar() {
    return (
        <div>
            <AppBar position="sticky">
                <Toolbar  className="toolbar" >
                    <h4>Testing World</h4>
                    <Stack className="logo" direction="row" spacing={2}>
                        {/* links not working?! */}
                    <Link  to={'/counter'} > 
                    <Chip icon={<TagFaces/>} label="counter" variant="filled"></Chip>
                    </Link>
                    <Link  to={'/login'}>
                    <Chip icon={<Face />} label="login" variant="filled"></Chip>
                    </Link>
                    <Link  to={'/mytrip'}>
                    <Chip color="primary" icon={<LocalAirport/>}label="my-trip" variant="filled"></Chip>
                    </Link>
                    <IconButton>
                        <ShoppingCart fontSize="medium"/>
                    </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
// style={{ textDecoration: 'none' }}