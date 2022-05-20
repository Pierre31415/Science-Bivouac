import React, { Component } from "react";
import Style from "./Articles.module.scss";

export default class Loi extends Component {
  render() {
    return (
      <div>
        <h2>Loi et réglementation du bivouac</h2>
        <p className={Style.italicBig}>
          {" "}
          Avant de commencer, précisons que la réglementation en ce qui concerne
          le bivouac (ou le camping sauvage) ne sont pas à percevoir comme une
          contrainte, mais comme des outils bienveillants pour protéger la
          faune, la flore et les personnes vivant à proximité. Et ça vaut le
          coup de bien respecter ces règles car l'amende peut grimper jusqu'à
          1500 € !
        </p>
        <h5>Bivouac vs camping sauvage</h5>
        <p>Ces deux termes désignent deux choses différentes 👉</p>
        <p>
          <div className={Style.imgArticleContainer}>
            <img
              className={Style.imgArticleRightTop}
              src={require("./img/loi2.png")}
              alt="Bivouaquer légalement"
            />
          </div>
          <span className={Style.fat}>Le bivouac </span>: Il s'agit d'installer
          sa loyale tente ou son fidèle hamac ou autre le temps d'une nuit, du
          coucher de soleil jusqu'au au lendemain matin.
        </p>
        <p>
          <span className={Style.fat}>Le camping sauvage </span>: Il s'agit de
          rester au même endroit pendant plusieurs jours, que ce soit en tente,
          hamac, véhicule ou autre. le terme de "sauvage" se justifie du fait
          que le camping est alors effectué en dehors des esapces dédiés.
        </p>
        <p>
          En France, il n'existe pas vraiment de différence entre le bivouac et
          le camping sauvage, à ceci près que le bivouac a tendance a être plus
          toléré dans les parcs ou réserves naturelles.
        </p>
        <h5>Réglementation</h5>
        <p>
          Pour faire la version courte :{" "}
          <span className={Style.fat}>
            le bivouac et le camping sauvages sont tolérés là où ils ne sont pas
            interdits
          </span>
          .
        </p>
        <h5>Le camping sauvage</h5>
        <p>
          Selon le{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031721244/"
            target="_blank"
            rel="noopener noreferrer"
          >
            code de l'urbanisme
          </a>
          , "Le camping est librement pratiqué, hors de l'emprise des routes et
          voies publiques, dans les conditions fixées par la présente
          sous-section, avec l'accord de celui qui a la jouissance du sol, sous
          réserve, le cas échéant, de l'opposition du propriétaire."
          <br />
          En d'autres termes,{" "}
          <span className={Style.fat}>
            il est autorisé de camper sur n'importe quel terrain, mais à la
            condition de bénéficier de l'autorisation du propriétaire
          </span>
          . Il est autrement interdit !
        </p>
        <p>
          En dehors du cas des terrains privés, il est autorisé de camper
          partout où ce n'est pas interdit.
        </p>
        <p>
          Petite liste des interdictions pour le camping sauvage :{" "}
          <ul>
            <li>
              Sur les rivages de la mer et dans les sites inscrits ou protégés
            </li>
            <li>
              Dans un site classé ou inscrit dans les zones de protection du
              patrimoine de la nature et des sites (réserve naturelle)
            </li>
            <li>
              Dans les bois, forêts et parcs classés comme espaces boisés à
              conserver
            </li>
            <li>Sur les routes et les voies publiques</li>
            <li>À moins de 500m d’un monument historique classé ou inscrit</li>
            <li>
              Dans un rayon de 200m autour d’un point d’eau capté pour la
              consommation
            </li>
            <li>
              Autour des zones définies par la municipalité par arrêté pour des
              raisons de sécurité ou de salubrité
            </li>
          </ul>
        </p>
        <p>
          Site trop bien qui indique la réglementation pour les parcs nationaux
          et plein d'autres choses :{" "}
          <a
            href="https://www.lecampingsauvage.fr/legislation-et-reglementation/camping-sauvage-bivouac##parcs_nationaux"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lecampingsauvage.fr
          </a>
          .
        </p>
        <h5>Le bivouac</h5>
        <p>
          <div className={Style.imgArticleContainer}>
            <img
              className={Style.imgArticleLeftTop}
              src={require("./img/loi1.png")}
              alt="Hot fuzz"
            />
          </div>
          <span className={Style.fat}>
            Les règles sont les mêmes que pour le camping sauvage
          </span>
          , sauf pour les réserves ou parcs naturels dans lesquels il est admis
          d'installer son bivouac au du soleil et de l'avoir remballé avant le
          lever du soleil (<span className={Style.fat}>19h à 9h environ</span>).
          À la fin de l'heure autorisée il arrrive que les gardiens patrouillent
          pour enchaîner les contraventions. Je vous invite donc à faire preuve
          de rigueur !
        </p>
        <p>
          Les deux règles officieuses les plus importantes :{" "}
          <span className={Style.fat}>éviter toute nuisance sonore</span>, et{" "}
          <span className={Style.fat}>emporter avec soi tous les déchets</span>{" "}
          (oui même les crottes dans l'idéal et le PQ) pour jetter tout ça
          proprement dans une poubelle plus tard.
        </p>
        <h5>Le feu</h5>
        <p>
          L’article L131-1 du code forestier interdit d’allumer un feu de camp
          sur un terrain dont on n’est pas propriétaire ou que l’on occupe sans
          l’accord du propriétaire dès lors que l’on se trouve à moins de 200
          mètres d’une forêt ou d’un bois.
        </p>
        <p>
          On notera d'ailleurs que même si on est propriétaire, des spécificités
          peuvent s'appliquer localement ou ponctuellement (canicule).
        </p>
        <p>
          Pour faire simple :{" "}
          <span className={Style.fat}>
            pas de feu à moins de 200m d'une forêt
          </span>{" "}
          ! Et jamais de feu sur terrain privé sans{" "}
          <span className={Style.fat}>accord du ou de la propriétaire</span> !
        </p>
      </div>
    );
  }
}
