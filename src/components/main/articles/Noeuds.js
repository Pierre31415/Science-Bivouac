// import { style } from "@mui/system";
import React, { Component } from "react";
import Style from "./Articles.module.scss";

export default class Noeuds extends Component {
  render() {
    return (
      <div>
        <h2>Les noeuds</h2>
        <p>
          Les noeuds, c'est un peu comme la vie, mais en mieux. Je vous présente
          ici un inventaire des quelques noeuds qui vous permettrontt de tout
          faire en bivouac. En fait ils ne sont même pas tous nécessaires en
          fonction de votre matos, mais cela vous permettra d'épater vos ami(e)s
          au cours de soirées mondaines endiablées !
        </p>
        <p>
          <span className={Style.citation}>
            {" "}
            NB : Les images sont un peu moches pour l'instant mais ont le mérite
            d'être claires. J'essyerai bientôt de concevoir les miennes
          </span>{" "}
          😉
        </p>
        <h5>
          Le <strong className={Style.strongh5}>noeud</strong> tendeur
        </h5>
        <p>
          Lui c'est la classe absolue pour le bivouac, il permet de{" "}
          <span className={Style.fat}>
            tendre une corde et d'ajuster la tension
          </span>{" "}
          de celle-ci. Exemple typique : relier le tarp à un piquet et tendre la
          corde selon votre bon vouloir en faisant glisser le noeud le long de
          la corde.
        </p>
        <div className={Style.divColumn}>
          <img
            className={Style.ImgRectangleRight}
            src={require("./img/tendeur1.gif")}
            alt="Noeud tendeur 1"
          />
          <img
            className={Style.ImgRectangle}
            src={require("./img/tendeur2.gif")}
            alt="Noeud tendeur 2"
          />
          <img
            className={Style.ImgRectangle}
            src={require("./img/tendeur3.gif")}
            alt="Noeud tendeur 3"
          />
        </div>
        <h5>Le noeud du pêcheur</h5>
        <p>
          Celui-là c'est plus un outil qui vous permettra de réaliser un noeud
          de Prussik. Il permet en tout cas de créer une{" "}
          <span className={Style.fat}>boucle tout particulièrement solide</span>
          .
        </p>
        <div className={Style.divColumn}>
          <img
            className={Style.ImgRectangle}
            src={require("./img/pecheur.gif")}
            alt="Noeud du pêcheur"
          />
        </div>

        <h5>Noeud de Prussik</h5>
        <p>
          Il permet de créer une{" "}
          <span className={Style.fat}>attache auto-bloquante</span>. Exemple
          d'utilisation : si vous utilisez une corde bien tendue entre deux
          arbres sous laquelle vous voulez accrocher votre tarp, le noeud de
          Prusik peut glisser le long de cette corde, et se bloquera dès qu'il
          sera soumis à un peu de poids ou de tension (comme l'accroche du
          tarp).
        </p>
        <div className={Style.divColumn}>
          <img
            className={Style.ImgRectangle}
            src={require("./img/prussik.jpg")}
            alt="Noeud de Prussik"
          />
        </div>
        <h5>Noeud coulant</h5>
        <p>
          Il{" "}
          <span className={Style.fat}>
            se resserre autour d'un élément lorsque la corde est soumise à une
            tension
          </span>
          . Personnellement pour l'instant je ne l'utilise que sur l'un des deux
          arbres lorsque je veux tendre une corde (j'utilise un noeud tendeur
          pour l'autre arbre).
        </p>
        <div className={Style.divColumn}>
          <img
            className={Style.ImgRectangle}
            src={require("./img/coulant.gif")}
            alt="Noeud coulant"
          />
        </div>
        <p className={Style.italicBig}>
          Je vous invite vivement à vous entraîner régulièrement pour réviser
          vos noeuds ! J'espère que ce petit topo vous aidera pour vos aventures
          !
        </p>
      </div>
    );
  }
}
