import React, { useContext } from "react";
import AuthContext from "../store/auth-context";
import { NavLink, useHistory } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function MainNavigation() {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  //console.log(isLoggedIn);
  function logoutHandler() {
    authCtx.logout();
    history.replace("/auth");
  }
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <NavLink to="/" className={classes.navbarbrand}>
          REACT
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to="/"
              className={classes.navlink}
              activeClassName={classes.active}
            >
              Home
            </NavLink>
            {isLoggedIn && (
              <NavLink
                to="/users"
                className={classes.navlink}
                activeClassName={classes.active}
              >
                All Users
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink
                to="/new-user"
                className={classes.navlink}
                activeClassName={classes.active}
              >
                Add User
              </NavLink>
            )}
            {!isLoggedIn && (
              <NavLink
                to="/auth"
                className={classes.navlink}
                activeClassName={classes.active}
              >
                Login
              </NavLink>
            )}
            {isLoggedIn && (
              <button className={classes.logoutbtn} onClick={logoutHandler}>
                Logout
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
