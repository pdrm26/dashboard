import Navbar from "./components/Navbar";
import Products from "./pages/Products";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* The other way to set route */}
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:productId" component={Product} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
}
