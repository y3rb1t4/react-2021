import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
// ['/','/login']
import Nav from "./Components/common/Nav";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect to="/register" />
      </Switch>
    </Router>
  );
}

export default App;
