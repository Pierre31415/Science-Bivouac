import React, { Component } from "react";
import Style from "./Articles.module.scss";

export default class Batons extends Component {
  render() {
    return (
      <div>
        <h2>Les bâtons</h2>
        <p>
          <div className={Style.imgArticleContainer}>
            <img
              className={Style.imgArticleRightTop}
              src={require("./img/poles.png")}
              alt="Santé Mentale"
            />
          </div>
          Les bâtons de randonnée sont-ils nécessaires ? Non, d’ailleurs
          beaucoup de personnes n’en utilisent pas{" "}
          <span className={Style.lineThrough}>
            parce que ce sont des hérétiques
          </span>{" "}
          parce qu’elles sont plus à l’aise ainsi. Nous allons tout de même
          étudier dans un premier temps quelques très bonnes raisons d’en
          utiliser !
        </p>
        <h5>
          Avantages d'utiliser des{" "}
          <strong className={Style.strongh5}>bâtons de randonnée</strong>
        </h5>
        <p>
          <ul>
            <li>
              <span className={Style.fat}>Aide en montée</span> : Soulagement de
              l'effort musculaire car l'effort est alors réparti entre les bras
              et les jambes.
            </li>
            <li>
              <span className={Style.fat}>Aide en descente</span> : soulagement
              des genoux
            </li>
            <li>
              <span className={Style.fat}>Soulagement des articulations</span>{" "}
              qui sont ainsi moins solicitées, ce qui est particulièrement
              intéressant pour des personnes ayant déjà eu des soucis aux
              genoux.
            </li>
            <li>
              <span className={Style.fat}>Amélioration de la stabilité</span>{" "}
              car la présence de bâtons mutliplie nos points d'appui
            </li>
            <li>
              Les bâtons permettent de{" "}
              <span className={Style.fat}>tâter le terrain</span> avant d'y
              mettre les pieds
            </li>
            <li>
              <span className={Style.fat}>Amélioration de la posture</span> (dos
              plus droit) lorsqu'ils sont bien utilisés
            </li>
            <li>
              BONUS : peuvent être utilisés pour établir une tente minimaliste
              avec un tarp.
            </li>
          </ul>
        </p>
        <h5>Comment bien utiliser ses bâtons ?</h5>
        <p>
          En ce qui concerne la longueur des bâtons, le but du jeu est que
          <span className={Style.fat}>
            {" "}
            l'angle formé par le coude soit de 90°
          </span>
          . On notera ainsi que dans l'idéal, il faut raccourcir le bâton en
          montée, et le rallonger en descente.
        </p>
        <p>
          Autre point très important : la{" "}
          <span className={Style.fat}>dragonne</span> ! Elle n'a pas pour
          objectif d'éviter de perdre le bâton s'il venait à cous échapper, mais
          que votre main soit solidement appuyée dessus pour vous éviter d'avoir
          à serrer très fort les mains autour du manche pendant des heures. Une
          dragonne bien utilisée permet presque de ne plus avoir à "tenir" le
          bâton, qui se tient ainsi tout seul grâce à elle.
          <br />
          <div className={Style.imgArticleContainer}>
            <img
              className={Style.imgArticleLeft}
              src={require("./img/dragonne.jpg")}
              alt="Dragonne"
            />
          </div>
          Pour bien utiliser la dragonne, il suffit de la régler pour que vous
          soyez à l'aise (que ce soit en passant la main dedans directement ou
          en accomplissant ensuite un petit tour de poignet pour qu'elle passe
          juste sous le pouce) et qu'elle soit suffisament serrée pour qu'elle
          vous permette de vous appuyer sur elle tout en pouvant facilement
          orienter le bâton.
        </p>
        <p>
          Il faut que les bâtons ne soient pas devant votre ventre au risque de
          vous prendre les pieds dedans, tant qu'ils sont{" "}
          <span className={Style.fat}>placés plus largement que vous</span>, ça
          fera le job. Petite note : je trouve que c'est mieux de s'appuyer sur
          les bâtons placés un peu vers l'arrière pour faciliter la poussée vers
          l'avant.
        </p>
        <p>
          En ce qu concerne le <span className={Style.fat}>rythme</span>, il n'y
          a pas de meilleure école, tout ce qui compte c'est que vous soyez à
          l'aise : les deux bâtons en même temps, en même temps que les pieds et
          du même côté, ou l'inverse,... L'idée aussi n'est pas de les traîner,
          mais bien que vous vous appuyez dessus pour profiter de leurs
          avantages.
        </p>
        <h5>Quel genre de bâtons et quels matériaux ?</h5>
        <p>
          Pour être franc mon expretise est limitée, je sais simplement
          certaines choses :
          <ul>
            <li>
              Les bâtons télescopiques à visser ont tendance à se dérégler au
              cours de la marche, contrairement à ceux à{" "}
              <span className={Style.fat}>clips</span> que je recommande pour le
              coup.
            </li>
            <li>
              Réfléchissez à vos <span className={Style.fat}>priorités</span> :
              certains bâtons sont très légers mais plus fragiles et chers
              (carbone), et vice-versa (aluminium).
            </li>
            <li>
              Il existe plusieurs matériaux différents pour la poignée, parmi
              ceux-là le <span className={Style.fat}>liège</span> (évacue la
              transpiration des mains), la{" "}
              <span className={Style.fat}>mousse</span> (évacue la transpiration
              aussi, plus léger mais faible durée de vie) et le{" "}
              <span className={Style.fat}>caoutchouc</span> (adapté par temps
              froids car résistant à l’eau et isole, par contre il glisse avec
              la transpiration s’il fait chaud).
            </li>
          </ul>
        </p>
        <p className={Style.italicBig}>
          Vous savez maintenant tout ce qu'il faut sur les bâtons de randonnée,
          vous êtes à présent plus balèzes encore que les magiciens et leur
          bâtons magiques même pas télescopiques !
        </p>
      </div>
    );
  }
}
