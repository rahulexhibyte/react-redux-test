import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Dashboard from "./screens/Dashboard";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import constants from "./constants";

function App() {
  return (
    <>
      <Switch>
        <Route path="/auth/signin">
          <SignIn />
        </Route>
        <Route path="/auth/signup">
          <SignUp />
        </Route>
        <Route path="/todo">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
