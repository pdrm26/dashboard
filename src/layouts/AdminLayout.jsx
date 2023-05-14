import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Todos from "../pages/Todos";

export default function AdminLayout() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:productId" component={Product} />
        <Route path="/todos" component={Todos} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </>
  );
}
