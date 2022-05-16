import React, { Component } from "react";
import Style from "./Articles.module.scss";

export default class Accueil extends Component {
  render() {
    return (
      <div>
        <div className={Style.accueil}>
          <h2>
            Bienvenue sur Science et{" "}
            <span className={Style.noWrap}>Bivouac !</span>
          </h2>

          <h5>Salutations aventurières et aventuriers !</h5>

          <p>
            Ici on parle de <strong className={Style.fat}>bivouac</strong>, et
            de <strong className={Style.fat}>trucs et astuces</strong> pour vous
            aider à ce que vous vous prépariez un bivouac tip-top ! Le tout
            assaisonné avec de la <strong className={Style.fat}>science</strong>{" "}
            parce que c’est la classe, ou alors parce que c’est tout simplement
            le meilleur outil pour nous permettre de comprendre le monde dans
            lequel on vit !
          </p>
          <p>
            Je vous présente humblement sur ce site ce que j'ai appris grâce à
            mes recherches et les fruits de mon expérience personnelle, j'espère
            que vous en tirerez satisfaction ! 😀
          </p>
          <div className={Style.citationAccueil}>
            <p className={Style.citationAccueilText}>
              "La connaissance est la seule chose qui s'accroît lorsqu'on la
              partage."
            </p>
            <p className={Style.citationAccueilAutor}>Sacha Boudjema</p>
          </div>
          <h5>
            Bonne lecture et belles aventures à vous, et vive la science !!
          </h5>

          <div className={Style.imgFit}>
            <img src={require("./img/accueil01.jpg")} alt="Bivouac de nuit" />
          </div>
        </div>
      </div>
    );
  }
}
