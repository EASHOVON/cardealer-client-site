import
{
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";


function App()
{
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
          <Route path="/login">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
