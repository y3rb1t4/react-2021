import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./../Pages/Login";

const PublicRoutes = () => {
  return (
    <Router>
      <Route path="/login" exact component={Login} />
    </Router>
  );
};

export default PublicRoutes;
