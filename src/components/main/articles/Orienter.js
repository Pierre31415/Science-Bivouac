import React, { Component } from "react";
import Style from "./Articles.module.scss";

export default class Orienter extends Component {
  render() {
    return (
      <div>
        <h2>S'orienter</h2>
        <p>
          <div className={Style.imgArticleContainer}>
            <img
              className={Style.imgArticleRightTop}
              src={require("./img/mapDeco1.png")}
              alt="Carte"
            />
          </div>
          Ici on va se concentrer surtout sur les techniques pour lire une carte
          pour le moment, j'ajouterai plus tard l'orientation avec les étoiles
          quand je l'aurai testée sérieusement.
          <p>
            On ne s'interessera pas non plus à l'utilisation du téléphone pour
            son GPS, pour plusieurs bonnes raisons : déjà il n'y a pas toujours
            de réseau, ensuite la batterie va se vider très rapidement, rendant
            le GPS inutile pour de longues balades à moins d'avoir ubne tonne de
            batteries en stock, consulter un écran empêche de savourer le
            paysage qui vous entoure, et enfin je trouve que c'est sain et
            appaisant de se séparer psychiquement de son téléphone quand on peut
            se ressourcer dans la nature.
          </p>
        </p>
        <h5>Que faut-il pour s'orienter ?</h5>
        <p>
          Il vous faudra...
          <ul>
            <li>
              Une <span className={Style.fat}>boussole</span>, celles au format
              retangulaire et transparentes sont top pour la rando. La point
              rouge correspond au Nord.
            </li>
            <li>
              Une <span className={Style.fat}>carte</span>, la grande référence
              étant les cartes IGN à l'échelle 1 : 25000
            </li>
            <li>
              <span className={Style.fat}>
                Savoir où vous êtes et où vous voulez aller
              </span>{" "}
              !
            </li>
          </ul>
        </p>
        <h5>Utilisation d'une boussole et d'une carte IGN</h5>
        <p>
          <span className={Style.fat}>Étape 1</span> : Sortez votre carte,
          identidiez alors où vous êtes et où vous voulez aller.
        </p>
        <p>
          <span className={Style.fat}>Étape 2</span> : Créez une ligne
          imaginaire (ou au crayon, soyons fous) entre vos points de départ et
          de destination. Posez votre splendide boussole le long de cette ligne,
          la flèche pointant en direction point d'arrivée. Tournez le cadran de
          telle sorte que sa partie "N" pointe parallèlement au méridien, une
          grande ligne noire un chouille penchée en France.
          <div className={Style.imgArticleContainer}>
            <img
              className={Style.imgArticleBig}
              src={require("./img/boussole1.PNG")}
              alt="Boussole 1"
            />
          </div>
        </p>
        <p>
          <span className={Style.fat}>Étape 3</span> : Relevez l'angle formé
          depuis le "N" jusqu'à la flèche rouge. c'est ce qu'on appelle
          l'azimut. Dans l'exemple il est de 200°.
          <div className={Style.imgArticleContainer}>
            <img
              className={Style.imgArticleBig}
              src={require("./img/boussole2.PNG")}
              alt="Boussole 2"
            />
          </div>
        </p>
        <p>
          <span className={Style.fat}>Étape 4</span> : À présent tenez la
          boussole avec vous, la flèche rouge qui pointe devant vous. Tournez
          avec elle jusqu'à ce que la pointe rouge du Nord coincide bien avec le
          "N" du cadran. La flèche rouge vous indique maintenant la voie à
          suivre !
          <div className={Style.imgArticleContainer}>
            <img
              className={Style.imgArticleBig}
              src={require("./img/boussole3.png")}
              alt="Boussole 3"
            />
          </div>
        </p>
        <p>
          Si possible, le mieux est que vous identifiez à l'horizon quelque
          chose plus ou moins dans votre direction (un arbre, un clocher,...),
          ainsi vous pourrez ranger votre boussole et suivre ce cap.
        </p>
        <p className={Style.italicBig}>
          Pour une orientation plus précise, il faut calculer la décinlaison
          magnétique, qui change chaque année (quoique très peu en France). Mais
          ça demande pas mal de calculs qu'on ne peut pas vraiment effectuer
          dans le cadre de la randonnée.
        </p>
        <p>
          Vous savez maintenant utiliser une boussole et une carte IGN, plutôt
          la classe n'est-il pas ? 😎
        </p>
      </div>
    );
  }
}
