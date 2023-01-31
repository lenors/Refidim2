import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendario from "../Pages/Calendario";
import Dias from "../Pages/Dias";
import Doe from "../Pages/Doe";
import Home from "../Pages/Home";
import Sobre from "../Pages/Sobre";
const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calendario" element={<Calendario />} />
        <Route path="/Dias" element={<Dias />} />
        <Route path="/Doe" element={<Doe />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
};

export default Rotas;
