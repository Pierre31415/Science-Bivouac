import React, { Component } from "react";
import Style from "./Articles.module.scss";

export default class Nutrition extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Nutrition</h2>
          <h5>Le Miam Miam, une vaste question 🍪</h5>

          <p>
            La nutrition est une thématique immensément riche et complexe, nous
            nous contenterons ainsi de quelques notions essentielles.
          </p>
          <p>
            Nous nous intéresserons ici à une manière optimale de se nourrir
            pendant de longues excursions, libre à vous bien-sûr de festoyer
            avec des chips de la bière et des bonbons, mais ce n’est pas ça qui
            vous donnera des forces pour continuer votre périple.
          </p>

          <h5>
            Qu'est-ce que la <strong className={Style.strongh5}></strong>
            nutrition a de particulier dans le cadre de la randonnée ou du
            bivouac ?
          </h5>

          <p>
            <div className={Style.imgArticleContainer}>
              <img
                className={Style.imgArticleLeftTop}
                src={require("./img/samPots.png")}
                alt="Sac à dos surchargé"
              />
            </div>
            Le premier problème, c'est la{" "}
            <span className={Style.fat}>
              gestion du poids de la nourriture et du nécéssaire pour la
              préparer{" "}
            </span>
            dans le sac à dos.
          </p>
          <p>
            Regardez ci-contre ce brave Hobbit à l'air désabusé de porter une
            charge si importante d'ustensibles de cuisine et de ne plus avoir la
            place ni pour un bon sac de couchage ni pour une tente. Dommage.
            Maintenant vous savez pourquoi vous ne voyez pas les Hobbits
            utiliser l'un ou l'autre dans les oeuvres littéraires et
            cinématographiques.
          </p>
          <p>
            Il est ainsi pertinent de se pencher sur la question de l'intérêt ou
            non d'un réchaud à gaz s'il a juste vocation à se préparer un café
            le matin au réveil. Certaines personnes en auront psychologiquement
            ou physiquement besoin, mais ce n'est pas la question, il s'agit
            juste de savoir se défaire du dispensable quand on le peut, car{" "}
            <span className={Style.fat}>
              le poids dispensable est un poids en trop sur vos épaules
            </span>
            .
          </p>
          <p>
            Vient ainsi l'intérêt de la{" "}
            <span className={Style.fat}>nourriture deshydratée</span> : elle est
            allégée du poids de l'eau. Mélanges de fruits secs, rations de
            survie, repas lyophilisé,... En plus de{" "}
            <span className={Style.fat}>bien se conserver</span>, ces aliments
            <span className={Style.fat}>soulageront vos épaules</span>, et
            prendront moins de place dans votre sac.
          </p>
          <h5>
            Bien <strong className={Style.strongh5}>manger</strong> pendant une
            randonnée ça ressemble à quoi ?
          </h5>
          <p>
            Pour répondre à cette question, il faut d'abord comprendre quels
            sont les deux grands types d'éléments présents dans les aliments :
            les <span className={Style.fat}>macro-nutriments</span> et les{" "}
            <span className={Style.fat}>micro-nutriments</span>.
          </p>
          <div className={Style.doubleArray}>
            <div className={Style.flex1}>
              <h6>Macro-nutriments</h6>
              <ul>
                <li>= Protéines, lipides, glucides (simples ou complexes).</li>
                <li>
                  Apportent (notamment) de l'énergie sous forme calorique.
                </li>
              </ul>
            </div>
            <div className={Style.versus}>
              <p>Vs</p>
            </div>
            <div className={Style.flex1}>
              <h6>Micro-nutriments</h6>
              <ul>
                <li>= Vitamines, minéraux et oligo-éléments.</li>
                <li>N'apportent pas d'énergie.</li>
                <li>Nécéssaires au bon fonctionnement de l'organisme.</li>
              </ul>
            </div>
          </div>
          <p>
            <div className={Style.imgArticleContainer}>
              <img
                className={Style.imgArticleRightTop}
                src={require("./img/karadokLight.png")}
                alt="Le gras c'est la vie"
              />
            </div>
            Vous l'aurez compris,{" "}
            <span className={Style.fat}>
              ces deux catégorires sont essentielles
            </span>
            . Les rations de survie par exemple, malgré leurs qualités
            exemplaires de conservation et d'apport énérgétique (elles ne
            contiennent que des macro-nutriments en général), ne fournissent pas
            de micro-nutriments ou pas assez. Pour une petite excursion à la
            journée, l'absence de micro-nutriments n'aura rien de dramatique.
          </p>
          <p>
            Notons aussi que les aliments carnés ont certes un bon apport de
            protéines, mais ces dernières ne sont que difficilement
            bio-assimilables, en d'autres termes pour accéder aux protéines
            carnées l'organisme doit dépenser beaucoup d'énérgie. Dans le cadre
            sportif donc,{" "}
            <span className={Style.fat}>
              il est préférable d'éviter la viande
            </span>
            . 🥕
          </p>
          <p className={Style.question}>
            En pratique du coup, des exemples de repas sains ?
          </p>
          <p>
            <div className={Style.imgArticleContainer}>
              <img
                className={Style.imgArticleRightTop}
                src={require("./img/ratatouilleLight.png")}
                alt="La bonne cuisine"
              />
            </div>
            But du jeu : réunir protéines (importantes dans le cadre d'un effort
            sportif pour la récupération musculaire), lipides et glucides
            (surtout des sucres lents dont l'apport énergétique s'étendra
            davantage dans le temps).
          </p>
          <ul>
            <li>
              Repas secs, par exemple au format de barres energétiques (faites
              maison c'est toujours plus la classe) pour les macro-nutriments
              surtout + fruits (secs) pour les micro-nutriments.
            </li>
            <li>
              Repas lyophilisés : attention aux produits qui ne sont bons que
              gustativement mais qui ne vous serviront à rien nutritionnellement
              ! Ils sont très variés, étudiez bien les ingrédients, pas mal de
              ce genre de produits ont l'air de pouvoir correspondre globalement
              aux besoins nutritionnels. Ils nécessitent souvent de quoi les
              cuire, ce qui peut impliquer un poids et un volume de matériel non
              négligeable.
            </li>
            <li>
              Ma façon de faire perso : rations de survie (uniquement
              macro-nutriments) + fruits secs + cueillette plantes sauvages pour
              un max de micro-nutriments !
            </li>
          </ul>
          <p>
            <span className={Style.italicBig}>Bon appétit</span> ! 😋
          </p>
        </div>
      </div>
    );
  }
}
