import React, { Component } from "react";
import Style from "./Articles.module.scss";

export default class Entrainement extends Component {
  render() {
    return (
      <div>
        <h2>L'entraînement : la clé d'un bivouac heureux</h2>
        <h5>L'entraînement aux techniques</h5>
        <p>
          <div className={Style.imgArticleContainer}>
            <img
              className={Style.imgArticleRightTop}
              src={require("./img/tentFail.jpg")}
              alt="Tente très mal montée"
            />
          </div>
          S'entrainer aux techniques avant de partir à l'aventure, c'est
          essentiel ! En effet après une journée de marche, avec la fatigue
          accumulée, la lumière du jour qui s'estompe et peut-être le stress de
          vouloir agir vite, vous n'aurez que très peu de ressources psychiques
          à attribuer à l'élaboration d'hypothèses sur la manière de monter
          votre bivouac surtout si c'est votre première fois.
        </p>
        <p>
          Le top est qu'en amont de votre excursion vous vous{" "}
          <span className={Style.fat}>
            entraîniez au montage de votre bivouac ainsi qu'aux noeuds calmement
          </span>
          , <span className={Style.fat}>plusieurs fois et régulièrement</span>,
          chez vous ou à l'extérieur pour bien vous imprégner des gestes à
          effectuer, la crème de la crème étant qu'ils deviennent des{" "}
          <span className={Style.fat}>automatismes</span>, un peu comme lorsque
          vous faites vos lacets.
        </p>
        <h5>L'entrainement physique</h5>
        <p>
          <div className={Style.imgArticleContainer}>
            {" "}
            <img
              className={Style.imgArticleLeftTop}
              src={require("./img/rocky.webp")}
              alt="L'entraînement ça paye"
            />
          </div>
          Le corps humain est une machine magique{" "}
          <span className={Style.fat}>capable de s'adapter</span>, d'autant plus
          lorsque cela est fait{" "}
          <span className={Style.fat}>progressivement</span>.
          <p>
            Il fut un temps où je pensais qu'il fallait se dépasser comme une
            brute pour progresser, mais c'est faux, voire propice aux blessures
            de manière incidieuse car les tendons peuvent s'abîmer à long terme
            sans qu'on le sente au début. La clé du succès c'est la progression
            pas-à-pas, et savoir apprendre à{" "}
            <span className={Style.fat}>écouter son corps</span>.
          </p>
          <p className={Style.italicBig}>En pratique ça donne quoi ?</p>
          <p>
            En fonction bien-sûr de votre énergie sportive, il semble pertinent
            de s'entrainer au moins quelques semaines avant un long périple, en
            rallongeant la durée de vos promenandes, et lorsque vous vous en
            sentez capable, en commençant à utiliser votre sac à dos qui sera
            lesté progressivement. <br />
            Prenez le soin d'écouter votre corps ! Vous êtes courbaturé(e) ou
            vous avez un peu mal à une articulation ? Pas de soucis, la suite
            peut être reportée à plus tard, ce sera l'occasion de s'interroger
            sur les éventuelles causes de tel ou tel soucis (Chaussures mal
            lacées qui créent des ampoules ? Manque d'hydratation qui fait mal
            aux articulations ? Sac trop lourd pour les chevilles ?... ).{" "}
            <span className={Style.fat}>
              Prenez votre temps, votre grande aventure en sera d'autant plus
              agrable et sécurisée
            </span>{" "}
            !
          </p>
        </p>
        <h5>Bonus : L'entrainement psychologique</h5>
        <p>
          Cette partie s'adresse surtout aux personnes qui ont{" "}
          <span className={Style.fat}>peur de bivouaquer</span>, typiquement en
          ce qui concerne le fait de passer du temps dehors{" "}
          <span className={Style.fat}>la nuit</span>.
        </p>
        <p>
          C'est vrai, de part le silence nocturne, chaque petit bruit semble
          démultiplié ! Pour celles et ceux qui n'ont pas encore passé la nuit
          en forêt, vous n'avez pas idée du boucan que ça peut faire un petit
          oiseau qui sautille sur des feuilles mortes à 2h du matin !{" "}
          <span className={Style.fat}>
            Avoir peur est normal que ce soit face à l'inconnu ou lorsque l'on
            est surpris(e)
          </span>
          , la clé de voûte pour se détendre c'est l'
          <span className={Style.fat}>acceptation</span>, d'ailleurs quelques
          exercices peuvent nous donner un coup de pouce en ce sens.
        </p>
        <p>
          En ce qui concerne les animaux, une attaque d'animal n'arrivera
          jamais, à moins vraiment de s'être placé(e) dans le refuge d'un animal
          et qu'il est particulièrement de mauvais poil (cela peut se deviner à
          la présence de crottes partout), ou si vous menacez ses petits. J'ai
          déjà entendu parler d'une personne dont la tente a été rongée par un
          renard, car la nourriture odorante avait été laissée exposée dans la
          tente... Bref les accidents sont très facilement évitables. <br />{" "}
          J'ai adoré mes premiers contacts avec des sangliers la nuit, lors de
          balades en fin de crépuscule et sans lumière. Je les devinais proches,
          à moins de 7 mètres, et effectuais un léger détour de quelques mètres
          pour les respecter, sous le regard bienveillant et paisible de ces
          forces de la forêt. Mention spéciale aussi pour la nuit où toute une
          colonne de marcassins a déboulé devant moi alors que je me tenais à
          moins de 5 mètres, leur mère à proximité semblant avoir compris que je
          comptais attendre poliment la traversée des petits. Un moment magique.
        </p>
        <p>
          <span className={Style.fat}>
            Vous pouvez avoir confiance envers les animaux
          </span>{" "}
          en France, en pratique la pire chose qui peut vous arriver est de vous
          faire réveiller par un piou-piou qui sautille joyeusement sur le sol
          près de vous. Apprenez à vous{" "}
          <span className={Style.fat}>habituer à ces sons</span>, à{" "}
          <span className={Style.fat}>les reconnaître</span>, plus vous y serez
          habitué(e) plus vous aurez l'esprit serein.
          <div className={Style.imgArticleContainer}>
            <img
              className={Style.imgArticleCenter}
              src={require("./img/lapin.gif")}
              alt="Lapin adultet"
            />
          </div>
        </p>
        <p>
          Un <span className={Style.fat}>exercice efficace de relaxation </span>
          est de se concentrer sur sa respiration, en inspirant et expirant
          lentement, ceci permet de ralentir et harmoniser le débit cardiaque
          (qui s'emballe quand on a peur), c'est ce qu'on appelle la "
          <span className={Style.fat}>cohérence cardiaque</span>".
        </p>
        <p>
          En ce qui concerne la <span className={Style.fat}>peur du noir</span>,
          ce qui marche bien c'est l'
          <span className={Style.fat}>habituation</span> avec une démarche
          progressive, exactement comme pour une préparation physique. Par
          exemple, une personne phobique du noir pourrait aller en forêt la nuit
          en étant accompagnée pendant 10 minutes, la fois suivante pendant 20
          minutes, la fois suivante seule pendant 5 minutes, puis 10,... Vous
          avez compris.{" "}
          <span className={Style.fat}>
            Prendre son temps, y aller progressivement
          </span>
          . <span className={Style.fat}>Les "régressions" sont normales</span>{" "}
          et font partie du processus, il faut ainsi les accueillir et les
          accepter pour pouvoir continuer à progresser.
        </p>
        <p className={Style.italicBig}>
          J'espère que tout ceci vous aidera à être prêtes et prêts au mieux
          pour profiter un max de votre bivouac !
        </p>
      </div>
    );
  }
}
