import {
  AppBar,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  Toolbar,
} from '@material-ui/core';
import React, { useState } from 'react';

import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../lib/assets/images/logo.png';
import styled from 'styled-components';

const Logo = styled.img`
  width: 40px;
`;

const ContactContainer = styled(Container)`
  margin-top: 5rem;

  @media screen and (min-width: ${(props) => props.theme.minWidth.nano}) {
    margin-top: 0;
  }
`;

const StyledContainer = styled(Container)`
  background: linear-gradient(#ffeae0, #ffeae0) no-repeat center/2px 100%;

  padding: 0;
`;

const StyledLink = styled(Link)`
  color: #000000de;
  text-decoration: none;
`;

const StyledList = styled(List)`
  background-color: ${(props) => props.theme.palette.primary.main};
`;

const StyledMenu = styled(Button)`
  display: flex;
  align-items: center;

  @media screen and (min-width: 404px) {
    display: none;
  }
`;

const StyledMenuItems = styled(Button)`
  text-transform: capitalize;

  display: none;

  @media screen and (min-width: 404px) {
    display: block;
  }
`;

const StyledToolbar = styled(Toolbar)`
  padding: 0;
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <AppBar position="static" style={{ boxShadow: 'none' }}>
        <StyledContainer maxWidth="md">
          <StyledToolbar>
            <StyledMenu onClick={() => setShowMenu(true)}>
              <MenuIcon />
            </StyledMenu>
            <Drawer
              anchor="top"
              open={showMenu}
              onClose={() => setShowMenu(false)}
            >
              <StyledList>
                <ListItem button onClick={() => setShowMenu(false)}>
                  <CloseIcon />
                </ListItem>
                <StyledLink to="/" onClick={() => setShowMenu(false)}>
                  <ListItem button>Home</ListItem>
                </StyledLink>
                <StyledLink to="/portfolio" onClick={() => setShowMenu(false)}>
                  <ListItem button>Portfolio</ListItem>
                </StyledLink>
              </StyledList>
            </Drawer>

            <Button edge="start" color="inherit" aria-label="menu" href="/">
              <Logo src={logo} alt="logo" />
            </Button>

            <StyledMenuItems color="inherit" href="/">
              Home
            </StyledMenuItems>

            <StyledMenuItems color="inherit" href="/portfolio">
              Portfolio
            </StyledMenuItems>

            {/* revisit: new page for contact me */}
            <StyledMenuItems color="inherit" href="/contact">
              Contact
            </StyledMenuItems>
          </StyledToolbar>
        </StyledContainer>
      </AppBar>
    </>
  );
};

export default Navbar;
