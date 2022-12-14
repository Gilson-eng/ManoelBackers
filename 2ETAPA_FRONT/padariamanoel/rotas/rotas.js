import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "../pages/movimento";
import Editar from "../pages/movimento/editar";

const Rotas = () => {
  return (
    <Router>
      <Route exact path="/" > <Home /> </Route>     
      <Route path="/movimento" > <Index /> </Route>
      {/* <Route path="/movimentos/criar" > <MovimentosCriar /> </Route> */}
      <Route path="/movimento/editar/:id" > <Editar /> </Route>
      </Router>
  );
};

export default Rotas;