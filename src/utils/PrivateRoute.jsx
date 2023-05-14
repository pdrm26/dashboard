import { Redirect, Route, useLocation } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const user = localStorage.getItem("user");
  const location = useLocation();
  return (
    <Route {...rest}>
      {user ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }, // I redirect to /login and in that page i can realize the user want to see which page and after login i redirect the user to that page (from)
          }}
        />
      )}
    </Route>
  );
}
