import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Explore from "./Pages/Explore/Explore";
import Footer from "./Pages/Home/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Purchase from "./Pages/Purchase/Purchase";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/explore">
            <Navigation />
            <Explore />
            <Footer />
          </Route>
          <Route path="/purchase/:productId">
            <Purchase />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
