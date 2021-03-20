import React from "react";
import "./App.css";
import Login from "../src/components/Login/Login";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Preferences from "../src/components/Preference/Preference";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "../src/components/Signup/Signup";
import useToken from "../src/useToken";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/preference">
            <Preferences />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;