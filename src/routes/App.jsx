import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calificacion from "../pages/Calificacion";
import Gracias from "../pages/Gracias";
import Layout from "../containers/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route exact path="/" component={Calificacion``} /> */}
          <Route path="/" element={<Calificacion />}></Route>
          <Route path="/Gracias" element={<Gracias />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
