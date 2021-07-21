/* eslint-disable no-debugger */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Home from './Home';
import Portfolio from './Portfolio';

import {
  AppBar,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  Toolbar,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import logo from '../lib/assets/images/logo.png';

const Logo = styled.img`
  width: 40px;
`;

const StyledContainer = styled(Container)`
  background: linear-gradient(#ffeae0, #ffeae0) no-repeat center/2px 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Router>
        <AppBar position="static">
          <StyledContainer maxWidth="md" style={{ padding: 0 }}>
            <Toolbar style={{ padding: 0 }}>
              <StyledMenu onClick={() => setShowMenu(true)}>
                <MenuIcon />
              </StyledMenu>
              <Drawer
                anchor="top"
                open={showMenu}
                onClose={() => setShowMenu(false)}
              >
                <List>
                  <ListItem button onClick={() => setShowMenu(false)}>
                    <CloseIcon />
                  </ListItem>
                  <ListItem button>
                    <StyledLink to="/">Home</StyledLink>
                  </ListItem>
                  <ListItem button>
                    <StyledLink to="/portfolio">Portfolio</StyledLink>
                  </ListItem>
                </List>
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
            </Toolbar>
          </StyledContainer>
        </AppBar>

        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Navbar;
