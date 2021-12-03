import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Pay from "../Pay/Pay";
import MyOrders from "../MyOrders/MyOrders";
import Review from "../Review/Review";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import UserRoute from "../../Login/UserRoute/UserRoute";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <img
          src="https://i.ibb.co/58bKCgm/logo-For-Car-Dealer.png"
          alt=""
          width="80%"
        />
      </Toolbar>
      <Divider />
      <Link
        style={{
          display: "flex",
          justifyContent: "center",
          textDecoration: "none",
        }}
        to="/home">
        <Button sx={{ py: 1, width: 1 }} variant="contained" color="inherit">
          Home
        </Button>
      </Link>
      <Link
        style={{
          display: "flex",
          justifyContent: "center",
          textDecoration: "none",
        }}
        to={`${url}`}>
        <Button sx={{ py: 1, width: 1 }} variant="contained" color="inherit">
          Dashboard
        </Button>
      </Link>
      {!admin && (
        <Box>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
            }}
            to={`${url}/pay`}>
            <Button
              sx={{ py: 1, width: 1 }}
              variant="contained"
              color="inherit">
              Pay
            </Button>
          </Link>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
            }}
            to={`${url}/orders`}>
            <Button
              sx={{ py: 1, width: 1 }}
              variant="contained"
              color="inherit">
              My Orders
            </Button>
          </Link>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
            }}
            to={`${url}/review`}>
            <Button
              sx={{ py: 1, width: 1 }}
              variant="contained"
              color="inherit">
              Review
            </Button>
          </Link>
        </Box>
      )}
      {admin && (
        <Box>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
            }}
            to={`${url}/manageAllOrders`}>
            <Button
              sx={{ py: 1, width: 1 }}
              variant="contained"
              color="inherit">
              Manage All Orders
            </Button>
          </Link>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
            }}
            to={`${url}/addAProduct`}>
            <Button
              sx={{ py: 1, width: 1 }}
              variant="contained"
              color="inherit">
              Add a Product
            </Button>
          </Link>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
            }}
            to={`${url}/makeAdmin`}>
            <Button
              sx={{ py: 1, width: 1 }}
              variant="contained"
              color="inherit">
              Make Admin
            </Button>
          </Link>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
            }}
            to={`${url}/manageProduct`}>
            <Button
              sx={{ py: 1, width: 1 }}
              variant="contained"
              color="inherit">
              Manage Product
            </Button>
          </Link>
        </Box>
      )}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={logOut}
          sx={{ py: 1, width: 1 }}
          variant="contained"
          color="inherit">
          Logout
        </Button>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}>
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <UserRoute path={`${path}/pay`}>
            <Pay></Pay>
          </UserRoute>
          <UserRoute path={`${path}/orders`}>
            <MyOrders></MyOrders>
          </UserRoute>
          <UserRoute path={`${path}/review`}>
            <Review></Review>
          </UserRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/addAProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProduct`}>
            <ManageProduct></ManageProduct>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
