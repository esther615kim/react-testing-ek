import React from 'react';
import {
  Link,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { PATH_USER_SIGNIN, PATH_HISTORY } from '../../../constants/PathConstants';
import { StyledSideNavContainer, StyledSideNavHeader, StyledSideNavMain, StyledButton } from './sideNav.styled';
// import { useDispatch, useSelector } from 'react-redux';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';


const SideNav = ({ isShowSideNav, hideSideNav }) => {
//   const dispatch = useDispatch();
//   const { language, country } = useSelector((state) => state.config);
  const list = () => (
    <>
      <StyledSideNavContainer role="presentation">
        <StyledSideNavHeader>
          <Typography color="text.primary">Butler</Typography>
          <IconButton onClick={hideSideNav}>
            <CloseOutlinedIcon />
          </IconButton>
        </StyledSideNavHeader>
        <Divider />
        <StyledSideNavMain>
          <div>
            <StyledButton startIcon={<PersonOutlineIcon />} fullWidth size="large">
              <Link>Account</Link>
            </StyledButton>

            <StyledButton startIcon={<ReceiptLongIcon />} fullWidth size="large" onClick={hideSideNav}>
              <Link href={PATH_HISTORY}>Order history</Link>
            </StyledButton>

            <StyledButton startIcon={<LoginIcon />} fullWidth size="large" onClick={hideSideNav}>
              <Link href={PATH_USER_SIGNIN}>Sign up or log in</Link>
            </StyledButton>
          </div>

        </StyledSideNavMain>
      </StyledSideNavContainer>
    </>
  );

  return (
    <Drawer anchor="right" open={isShowSideNav} onClose={hideSideNav}>
      {list()}
    </Drawer>
  );
};

export default SideNav;
