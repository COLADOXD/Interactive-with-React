import React from "react";
import { Browser, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowerRouter>
      <Switch>
        <Route exact path="/Calificacion" component={Calificacion} />

        <Route />
      </Switch>
    </BrowerRouter>
  );
};
