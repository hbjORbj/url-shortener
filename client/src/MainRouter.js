import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";

export default function MainRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/error" component={ErrorPage}></Route>
        <Route exact path="/:code" component={Home}></Route>
      </Switch>
    </>
  );
}
