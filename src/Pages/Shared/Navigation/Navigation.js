import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import useAuth from "../../../hooks/useAuth";

export default function Navigation() {
  const { user, logOut } = useAuth();
  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      color: "#fff",
      textDecoration: "none",
    },
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    navItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
    navLogo: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
        padding: "15px 0",
      },
    },
    mobileNavItem: {
      textDecoration: "none",
      color: "#000",
    },
  });
  const { navItem, navIcon, navItemContainer, navLogo } = useStyle();
  const [state, setState] = React.useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              className={navIcon}
              onClick={() => setState(true)}
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography
              style={{ display: "flex", alignItems: "center" }}
              className={navLogo}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}>
              <Link to="/">
                <img
                  src="https://q4p3y7t4.rocketcdn.me/elementor/wp-content/uploads/sites/3/2021/08/logo.png"
                  alt=""
                />
              </Link>
            </Typography>
            <Box className={navItemContainer}>
              <NavLink style={{ color: "white" }} className={navItem} to="/">
                <Button color="inherit">Home</Button>
              </NavLink>
              <NavLink
                style={{ color: "white" }}
                className={navItem}
                to="/explore">
                <Button color="inherit">Explore</Button>
              </NavLink>
              {user.email && (
                <NavLink
                  style={{ color: "white" }}
                  className={navItem}
                  to="/dashboard">
                  <Button color="inherit">DashBoard</Button>
                </NavLink>
              )}
              {user?.email ? (
                <Button
                  style={{ color: "white" }}
                  onClick={logOut}
                  color="inherit">
                  Logout
                </Button>
              ) : (
                <NavLink
                  style={{ color: "white" }}
                  className={navItem}
                  to="/login">
                  <Button color="inherit">Login</Button>
                </NavLink>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            <Box sx={{ width: 250 }} role="presentation">
              <Link
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
                to="/">
                <Button
                  sx={{ py: 1, width: 1 }}
                  variant="contained"
                  color="inherit">
                  Home
                </Button>
              </Link>
              <Link
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
                to="/explore">
                <Button
                  sx={{ py: 1, width: 1 }}
                  variant="contained"
                  color="inherit">
                  Explore
                </Button>
              </Link>
              {user.email && (
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                  to="/dashboard">
                  <Button
                    sx={{ py: 1, width: 1 }}
                    variant="contained"
                    color="inherit">
                    DASHBOARD
                  </Button>
                </Link>
              )}
              {user?.email ? (
                <Button
                  sx={{
                    py: 1,
                    width: 1,
                    display: "flex",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                  onClick={logOut}
                  variant="contained"
                  color="inherit">
                  LOGOUT
                </Button>
              ) : (
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                  to="/login">
                  <Button
                    sx={{ py: 1, width: 1 }}
                    variant="contained"
                    color="inherit">
                    LOGIN
                  </Button>
                </Link>
              )}
            </Box>
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
}
