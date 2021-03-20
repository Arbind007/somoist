import React from "react";
import "./App.css";
import Login from "../src/components/Login/Login";
import Dashboard from "../src/components/Dashboard/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
