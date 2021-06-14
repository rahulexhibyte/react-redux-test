import { Redirect, Route } from "react-router-dom";
import { Auth } from "../../firebase";

const PrivateRoute = ({ children, ...rest }) => {
  let isAuthenticated = false;
  Auth.onAuthStateChanged((user) => {
    isAuthenticated = user ? true : false;
  });
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/auth/signin", state: { from: location } }}
          />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
