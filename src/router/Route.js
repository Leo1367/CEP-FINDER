import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import LayoutSearch from "./LayoutSearch";
import NotFoundPage from "./NotFoundPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/search" component={LayoutSearch} />
      <Route path="/notfound" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;