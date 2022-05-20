import React, { Component } from "react";
import Style from "./Articles.module.scss";

export default class HamacVsTent extends Component {
  render() {
    return (
      <div>
        <h2>Hamac versus Tente</h2>
        <div>
          <img
            className={Style.imgArticleCenter}
            src={require("./img/tenteVsHamac.jpg")}
            alt="Tente versus Hamac"
          />
        </div>
        <h5>Quel est le meilleur choix ?</h5>
        <p>
          Vous vous en doutez, si la tente et le hamac sont beaucoup utilisés
          pour le bivouac, c'est qu'ils sont tous les deux déjà de très bons
          outils pour le bivouac. On va quand même essayer d'établir un
          inventaire des avantages et inconvénients.
        </p>
        <p>
          On rappellera aussi que la tente et le hamac ne sont pas les seules
          manières de bivouaquer, certaines personnes préféreront dormir à même
          de sol avec un sac de couchage et une bâche dans une optique
          minimaliste par exemple.
        </p>
        <div className={Style.doubleArray}>
          <div className={Style.flex1}>
            <h6>
              <strong>Tente</strong>
            </h6>
            <p className={Style.lesPlus}>Les +</p>
            <ul>
              <li>Sentiment d'être abrité(e) dans sa petite maison</li>
              <li>
                Parfait pour les terrains dépourvus d'arbres (en montagne par
                exemple)
              </li>
              <li>
                Il est très facile de trouver des modèles de tentes dans
                lesquelles dormir à plusieurs
              </li>
              <li>
                Hauteur moindre qu'un hamac, donc potentiellement plus discret
              </li>
              <li>
                Il est assez facile de se changer ou d'étaler son matériel dans
                une tente
              </li>
            </ul>
            <p className={Style.lesMoins}>Les -</p>
            <ul>
              <li>
                Prédispose à la condensation à cause du manque de passage d’air
              </li>
              <li>
                Difficile de trouver un terrain plat et pas trop chaotique
              </li>
              <li>
                Quasi impossible de faire sécher des vêtements sous la tente
              </li>
              <li>
                Pour que ce soit vraiment confortable, il faut un matelas
                gonfable, qui a toujours un risque de se déglonfler
              </li>
              <li>
                Accessible aux animaux (renards qui grattent s'ils sentent la
                nourriture)
              </li>
              <li>
                Une tente dans une lègère concavité peut être noyée s'il pleut,
                une tente placée trop proche de l'eau aussi si l'eau monte
                (pluie ou marrée)
              </li>
              <li>Ecrase le sol en-dessous</li>
            </ul>
          </div>

          <div className={Style.versus}>
            <p>Versus</p>
          </div>

          <div className={Style.flex1}>
            <h6>
              <strong>Hamac</strong>
            </h6>

            <p className={Style.lesPlus}>Les +</p>
            <ul>
              <li>
                Confortable voire très confortable (on peut dormir sur le côté
                si le hamac est assez grand)
              </li>
              <li>
                Installable partout, même en pente, tant qu'il y a des arbres
              </li>
              <li>Pas de condensation grâce au très bon passage d'air</li>
              <li>
                Plus résilient qu'une tente qui a des risques de fuites d'eau de
                pluie internes à travers les coutures
              </li>
              <li>
                A tendance à coûter moins cher qu'une tente et peut prendre un
                peu moins de place
              </li>
              <li>
                Ne laisse pas de trace ni au sol ni à l'arbre si bien utilisé
              </li>
            </ul>
            <p className={Style.lesMoins}>Les -</p>
            <ul>
              <li>
                Le poids total du hamac et de ses accessoires (underblanket par
                exemple) peut être un peu plus élevé qu'une tente
              </li>
              <li>Impossible de dormir confortablement à deux</li>
              <li>Plus technique à installer et maîtriser qu'une tente</li>
              <li>
                Idées reçues sur les risques de chute véhiculées à cause des
                hamacs de jardin à barres transversales. Ces hamamcs ne sont pas
                vraiment confortables en plus, je ne sais même pas pourquoi ils
                existent 🤣
              </li>
              <li>Très difficile de se changer dans le hamac</li>
            </ul>
          </div>
        </div>
        <h5>Alors, qui gagne ce duel épique ?</h5>
        <p>
          Et bieeeeen... ça dépend de ce que vous cherchez et{" "}
          <span className={Style.fat}>quelles sont vos priorités</span> !
        </p>
        <p>
          Ce qui est sûr, c'est que{" "}
          <span className={Style.fat}>
            si vous voulez bivouaquer en montagne ou en couple l'un(e) à côté de
            l'autre, la tente semble être le choix évident
          </span>{" "}
          !
        </p>
        <p>
          <span className={Style.fat}>
            Si vous êtes plutôt baroudeuse ou baroudeur solo et n'envisagez pas
            de faire de haute montagne, le hamac semble être un meilleur choix
          </span>
          . Sa résilience et son confort en font un allié splendide pour partir
          à l'aventure !
        </p>
        <p>
          Personnellement, j'ai jeté mon dévolu sur le hamac, ayant appris à
          bien le gérer j'y dors sincèrement mieux que dans mon lit ! ❤️ Et le
          jour où je souhaiterai explorer des montagnes, je m'offirai une tente
          solide et durable.
        </p>
        <p className={Style.italicBig}>
          Tadaaaa ! J'espère que cette petite analyse vous aura donné un petit
          coup de pouce dans votre choix de maison transportable !
        </p>
      </div>
    );
  }
}
