import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";
import Login from "./pages/Login";
import AdminLayout from "./layouts/AdminLayout";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/" component={AdminLayout} />
      </Switch>
    </Router>
  );
}
