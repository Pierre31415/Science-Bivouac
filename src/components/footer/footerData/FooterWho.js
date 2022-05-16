import React, { Component } from "react";
import Style from "../Footer.module.scss";

export default class FooterWho extends Component {
  render() {
    return (
      <div className={Style.who}>
        <div>
          <p>
            Je suis développeur web, amoureux de sciences, et passionné de
            randonnées et bivouacs. Régulièrement je passe les nuits en forêt,
            très confortablement dans mon fidèle hamac. Je suis heureux de
            construire mon propre site regroupant diverses astuces issues de mon
            expérience ou cueillies sur Internet, et de les partager avec vous
            pour vos futures aventures, le tout accompagné de données
            scientifiques pour toujours mieux comprendre notre monde !
          </p>
        </div>
      </div>
    );
  }
}
