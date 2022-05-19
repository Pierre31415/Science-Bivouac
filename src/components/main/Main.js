import React, { Component } from "react";
import Style from "./Main.module.scss";
import { Routes, Route } from "react-router-dom";
import Accueil from "./articles/Accueil";
import Psychologie from "./articles/Psychologie";
import Temperature from "./articles/Temperature";
import Nutrition from "./articles/Nutrition";
import HamacVsTent from "./articles/HamacVsTente";
import Hamac from "./articles/Hamac";
import SacADos from "./articles/SacADos";
import Batons from "./articles/Batons";
import Noeuds from "./articles/Noeuds";
import Orienter from "./articles/Orienter";
import Feu from "./articles/Feu";
import Trajet from "./articles/Trajet";
import Loi from "./articles/Loi";
import Entrainement from "./articles/Entrainement";

export default class Main extends Component {
  render() {
    return (
      <div className={Style.mainContainer}>
        <div className={Style.main}>
          <Routes>
            <Route path="*" element={<Accueil />} />
            <Route path="/" element={<Accueil />} />
            <Route path="/psy" element={<Psychologie />} />
            <Route path="/temperature" element={<Temperature />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/hamacVsTente" element={<HamacVsTent />} />
            <Route path="/hamac" element={<Hamac />} />
            <Route path="/sacADos" element={<SacADos />} />
            <Route path="/batons" element={<Batons />} />
            <Route path="/noeuds" element={<Noeuds />} />
            <Route path="/orienter" element={<Orienter />} />
            <Route path="/feu" element={<Feu />} />
            <Route path="/trajet" element={<Trajet />} />
            <Route path="/loi" element={<Loi />} />
            <Route path="/entrainement" element={<Entrainement />} />
          </Routes>
        </div>
      </div>
    );
  }
}
