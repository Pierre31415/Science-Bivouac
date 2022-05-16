import React, { Component } from "react";
import Style from "./Articles.module.scss";

export default class Trajet extends Component {
  render() {
    return (
      <div>
        <h2>Organiser son trajet</h2>
        <p className={Style.question}>
          Mieux vous organiserez votre trajet, mieux votre aventure se passera.
          Passons en revue quelques éléments qui méritent que vous les étudiez
          avant de partir en excursion.
        </p>
        <h5>Quels objectifs ?</h5>
        <p>
          <img
            className={Style.imgRectangleRightTop}
            src={require("./img/team.jpg")}
            alt="Rando en équipe"
          />
          Je vous invite à ce que vous vous demandiez quels sont vos objectifs :
          en effet, souhaitez vous surtout contempler de beaux paysages, ou vous
          dépasser physiquement en marchant le plus longtemps possible, ou
          encore souhaitez-vous essentiellement vous ressourcer ?
        </p>
        <p>
          Parallèlement, si vous êtes accompagné(e) par une ou plusieurs
          personnes, il est alors pertinent que vous vous concertiez sur un
          <span className={Style.fat}> objectif commun</span> qui soit en mesure
          de satisfaire le mieux possible le groupe, quitte à faire des
          compromis.
        </p>
        <h5>Transport</h5>
        <p>
          La question du transport que vous utiliserez pour débuter votre
          aventure mérite véritablement le détour. Par exemple, est-ce vraiment
          une bonne idée de commencer une randonnée juste après avoir conduit
          pendant 10 heures (À vous de voir, personnellement la conduite
          m’épuise) ? Où comptez-vous{" "}
          <span className={Style.fat}>
            garer votre voiture pour qu’elle soit en sécurité
          </span>{" "}
          (Demander à une gendarmerie locale peut être un bon plan soit-dit en
          passant) ? Si vous prenez un bus ou un train pour le retour, avez-vous
          un <span className={Style.fat}>plan B</span> si vous n’êtes pas
          revenu(e) dans les temps ? On va s’arrêter là pour les exemples, vous
          avez déjà bien saisi l’idée !
        </p>
        <h5>La météo</h5>
        <p>
          <span className={Style.citation}>
            "La météo est une science qui permet de connaître le temps qu'il
            aurait dû faire."
          </span>{" "}
          (Philippe Bouvard)
        </p>
        <p>
          Étudiez bien la météo, en prenant en compte sa plus ou moins grande
          marge d'erreur, et comparez-la à vos exigences. Par exemple si je suis
          bien équipé, j’aime bien marcher sous la pluie, alors que pour
          d’autres personnes s’il pleut ce n’est pas la peine de sortir. Je me
          permets de vous inviter à vous{" "}
          <span className={Style.fat}>
            équiper contre la pluie pour toutes vos longues excursions
          </span>
          . Notez aussi que la météo est très changeante et rapidement en
          montagne !
        </p>
        <h5>Le parcours</h5>
        <p>
          En vous appuyant sur une carte, des guides ou des retours de personnes
          ayant déjà le fait le trajet, essayez d'anticiper les{" "}
          <span className={Style.fat}>points d'accès à l'eau</span>, voire
          encore mieux à l'eau potable.
        </p>
        <p>
          Il est important de se renseigner aussi sur les{" "}
          <span className={Style.fat}>
            espaces naturels ou autres zones interdisant le bivouac
          </span>{" "}
          (le mieux est alors de consulter l'office du tourisme).
        </p>
        <h5>Quid de la chasse ?</h5>
        <p>
          Nous ne débattrons pas ici sur la pratique de la chasse, qui consiste
          à tuer des animaux juste par loisir compte tenu du fait que l’argument
          de la régulation est fallacieux à cause du massacre des prédateurs
          naturels du gibier, la présence d’agrainage (nourriture mise à
          disposition du gibier) partout multipliant la présence d’animaux, ou
          encore l’importation d’espèces sélectionnées pour être très fécondes
          et assurer aux chasseurs toujours plus de cibles vivantes pour se
          distraire le dimanche, le tout sous couvert de la loi car les
          chasseurs sont une réserve électorale, et non un animal perforé par
          une ou des balles en plomb n’est pas comestible donc en France pas
          besoin de chasser pour se nourrir. Oups.
        </p>
        <p>
          En tout cas, des randonneuses et randonneurs meurent chaque année sous
          les tirs des chasseurs, même en utilisant les sentiers de randonnées
          balisés… Certains sites nous incitent à nous renseigner auprès de la
          fédération de chasse locale, de la préfecture, et de chaque
          propriétaire ayant un bout de terrain à proximité de votre trajet et
          susceptible de chasser, avant de se promener en gilet fluorescent et
          de signaler sa présence à haute voix et en sifflant régulièrement…
          C’est de la folie. Alors que nous voulons juste marcher et bivouaquer
          sans se faire tirer dessus.
        </p>
        <div className={Style.imgFit}>
          <img src={require("./img/chasseurs.jpg")} alt="La chasse c'est nul" />
          <span>
            Source :{" "}
            <a
              href="https://www.blagues-et-dessins.com/category/actualite-humour-rigolo/l-actu-de-sanaga/"
              target="_blank"
              rel="noopener noreferrer"
            >
              L'Actu de Sanaga
            </a>
          </span>
        </div>
        <p>
          Il semblerait tristement que{" "}
          <span className={Style.fat}>
            si vous voulez éviter totalement les risques liés à la pratique de
            la chasse, le mieux est alors d’éviter les randonnées pendant
            l’hiver
          </span>
          . En ce qui me concerne, je bivouaque tout de même reclu dans mon
          petit coin de forêt qui semble épargné pour le moment.
        </p>
        <h5>Matériel</h5>
        <p>
          L'idéal est que votre sac soit le plus léger possible, et en tout cas
          qu'il{" "}
          <span className={Style.fat}>
            ne dépasse pas les 20% de votre poids
          </span>
          . Nous verrons tout ça plus en détail dans un futur article !
        </p>
        <h5>Bonus sur la sécurité</h5>
        <p>
          Il est pertinent de{" "}
          <span className={Style.fat}>prévenir une ou plusieurs personnes</span>{" "}
          avant de partir à l’aventure. Petite astuce bonus : chaque matin,{" "}
          <span className={Style.fat}>
            changez votre messagerie vocale pour indiquer où vous êtes et où
            vous vous dirigezr
          </span>
          , ainsi si votre aventure tourne mal cela peut faciliter la venue des
          secours !
        </p>
      </div>
    );
  }
}
