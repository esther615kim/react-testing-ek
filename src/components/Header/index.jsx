import React from 'react';
import Navbar from './../Navbar';

function Header() {
  return <div>
      <Navbar/>
  </div>;
}

export default Header;

// import React, { useEffect, useState } from 'react';
// import { AppBar, Box, Stack, useMediaQuery } from '@mui/material';
// import { Link, useLocation,Typography } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';

// import { useSelector } from 'react-redux';
// import { StyledBtn, StyledLinkButton, StyledToolbar } from './header.styled';

// // import { ApiDocsMenu, Basket, FavMenu, LogInMenu, SearchBar } from '@components/layouts/Header/menus';
// import { RootState } from '@store/index';
// import { theme } from '../../../styles/theme';
// import Basket from '../Basket';

// export default function Header({ showSideNav, showFavList }) {
//   // let location = useLocation();

//   const isBrowserWidth = useMediaQuery(theme.breakpoints.up('md'));
//   const [isShowSearchBar, setIsShowSearchBar] = useState(false);
//   return (

//     <Box>
//       <AppBar position="sticky">
//         <Box>
//           <StyledToolbar>
//             <Typography component="div" sx={{ flexGrow: 1 }}>
//               <StyledLinkButton>
//                 <Link to="/">Home</Link>
//               </StyledLinkButton>
//             </Typography>
//             <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
//               {/* {isShowSearchBar && <SearchBar /> */}
//               // <FavMenu showFavList={showFavList} />
//               {/* {cart && <Basket />} */}
//               <Basket/>
//               {/* {isLoggedIn ? ( */}
//                 <>
//                   {/* <FavMenu showFavList={showFavList} /> */}
//                 </>
//               {/* ) : ( */}
//                 {/* <LogInMenu /> */}
//                 {/* ) */}
//               {/* } */}

//               {/* side menu */}
//               <StyledBtn startIcon={<MenuIcon />} onClick={showSideNav} aria-label="menu">
//                 Menu
//               </StyledBtn>
//             </Stack>
//           </StyledToolbar>
//         </Box>
//       </AppBar>
//     </Box>

//   );
// }
