import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrivateRoute from "./ui/components/PrivateRoute";
import Todos from "./ui/routes/Todos";
import SignIn from "./ui/routes/SignIn";
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div style = {{
      textAlign: "center"
    }}>
      <h1>Redux Todos App</h1>
      <Switch>
        <PrivateRoute path = "/todos">
          <Todos />
        </PrivateRoute>
        <Route path = "/">
        <SignIn />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
