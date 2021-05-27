import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Quote from "./components/Quote";
import Header from "./components/Header";

const Routes = () => {
  return (
    <BrowserRouter>
    <>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={App} />
        <Route exact path="/quote" component={Quote} />
      </Switch>
    </>
    </BrowserRouter>
  );
};

export default Routes;