import React, { Component } from "react";
import Style from "./Articles.module.scss";

export default class Temperature extends Component {
  render() {
    return (
      <div>
        <div className={Style.Temperature}>
          <h2>La température</h2>
          <h5>
            Pourquoi la <strong className={Style.strongh5}>température</strong>{" "}
            c'est important ?
          </h5>
          <p>
            En dehors de notre zone de confort douillet, bien gérer la
            température pendant une excursion permet aussi d'éviter le trop
            froid (<em className={Style.fat}>hypothermie</em>) ou le trop chaud
            (<em className={Style.fat}>deshydratation </em>
            surtout).
          </p>
          <p>
            De plus, lorsque l'on cherche à dormir, il est primordial d'être le
            plus à l'aise, au moins sur le terrain de la température, car plus
            le temps de sommeil sera de qualité, plus son pouvoir récuparateur
            sera important ! Quand on randonne sur plusieurs jours, mieux vaut
            récupérer un maximum :{" "}
            <span className={Style.citation}>
              "Qui voyage loin ménage sa monture" !
            </span>
          </p>
          <h5>Ouch ! Il fait trop chaud ! 🔥</h5>
          <p>
            <ul>
              <li>
                Il vaut mieux{" "}
                <span className={Style.fat}>
                  éviter de randonner en pleine canicule
                </span>
              </li>
              <li>
                Les{" "}
                <span className={Style.fat}>vêtements de couleur claire</span>{" "}
                nous gardent plus au frais
              </li>
              <li>
                Astuce perso : Je trouve qu'il vaut mieux{" "}
                <span className={Style.fat}>
                  garder la peau à l'ombre grâce aux tissus
                </span>{" "}
                (manches longues, chapeau,...) plutôt qu'exposée au soleil et
                recouverte de tonnes de crème solaire qu'il faut entretenir très
                régulièrement. En plus la crème solaire ça craint
                écologiquement.
              </li>
              <li>
                Et surtout... <span className={Style.fat}>S'hydrater</span> un
                maximum !!
              </li>
            </ul>
          </p>
          <h5>Brrr ! Il fait trop froid ! ❄️</h5>
          <p>
            Là il y a plus de choses techniques à dire. Commençons par
            comprendre les notions de{" "}
            <span className={Style.fat}>conduction</span> et de{" "}
            <span className={Style.fat}>convection</span>. Notons qu'elles
            seront décrites ici de manière à correspondre au cadre du bivouac.
          </p>
          <div className={Style.doubleArray}>
            <div className={Style.flex1}>
              <h6>Conduction</h6>
              <ul>
                <li>
                  Transfert de température par contact direct, sans mouvement de
                  matière.
                </li>
                <li>
                  L'intensité de ce transfert dépend des matériaux, l'eau par
                  exemple est un excellent conducteur thermique.
                </li>
                <li>
                  Pour s'en protéger, il faut éviter la présence d'eau dans nos
                  affaires censées nous réchauffer, un sac de couchage trempé ne
                  sert plus à rien par exemple, car si la température extérieure
                  est froide il jouera un rôle de pont thermique direct par
                  conduction avec l'air froid extérieur.
                </li>
              </ul>
            </div>
            <div className={Style.versus}>
              <p>Versus</p>
            </div>
            <div className={Style.flex1}>
              <h6>Convection</h6>
              <ul>
                <li>
                  Transfert de température par deplacement de matière. Dans le
                  cadre du bivouac : l'air, le vent.
                </li>
                <li>
                  L'intensité de ce transfert a tendance à être moindre que la
                  conduction. Par exemple de l'air à 10 degrés se vivra mieux
                  que plonger dans de l'eau à 10 degrés.
                </li>
                <li>
                  Pour s'en protéger, il faut simplement des habits isolants
                  voire à effet "coupe-vent" pour la couche externe, en effet
                  plus il y a de vent, plus il y a de déplacement de matière
                  donc plus il y a de transfert thermique par convection.
                </li>
              </ul>
            </div>
          </div>
          <p>
            Il me semble utile aussi de vous faire part d'une notion importante
            en ce qui concerne <span className={Style.fat}>l'isolation</span> :
            l'isolant de base utilisé dans les matériaux voués à nous protéger
            du froid (polaire, sac de couchage, ...) n'est rien d'autre que{" "}
            <span className={Style.fat}>l'air inerte</span>.{" "}
            <div>
              <img
                className={Style.imgRectangleLeft}
                src={require("./img/sleepingBag.png")}
                alt="Sac de couchage"
              />
            </div>
            Par exemple, le garnissage d'un sac de couchage regroupe une énrome
            quantité de toutes petites poches d'air inerte grâce à son matériau
            (synthétique ou duvet), créant ainsi un bouclier plus ou moins épais
            et efficace contre le froid. De la même façon, es animaux à fourrure
            comme les chats arrivent à maintenir leur température corporelle
            même par temps froid grâce aux poches d'air inerte formées par leurs
            poils.
          </p>
          <p className={Style.citation}>
            NB : Les sacs de couchage, polaires ou autres ne CRÉENT PAS de
            chaleur, ils ne font que retenir plus ou moins celle qui s'échappe
            naturellement à travers notre peau.
          </p>

          <p className={Style.question}>
            Du coup, comment mieux gérer nos bivouacs maintenant qu'on sait tout
            ça ?
          </p>
          <h5>
            Quelques astuces pour se réchauffer en bivouac, en prenant en compte
            ce qu'on vient d'étudier :
          </h5>
          <ul>
            <li>
              <span className={Style.fat}>Ne pas rentrer mouillé(e)</span> dans
              un sac de couchage
            </li>
            <li>
              Faire quelques flexions, pompes, ou n'importe quoi d'autre pour{" "}
              <span className={Style.fat}>
                se réchauffer avant de rentrer dans un sac de couchage
              </span>{" "}
              froid, mais SURTOUT NE PAS TRANSPIRER, sinon vous connaissez la
              chanson : humidité, donc conduction, donc froid !
            </li>

            <img
              className={Style.imgRectangleRight}
              src={require("./img/sleepWarm.gif")}
              alt="Dormir au chaud"
            />
            <li>
              Bien avoir{" "}
              <span className={Style.fat}>
                la bouche qui communique directement avec l'extérieur
              </span>{" "}
              du sac de couchage : on pourrait penser que c'est une bonne idée
              de laisser l'air chaud qui sort de notre bouche chauffer notre
              sac, mais en fait pas du tout ! On produit beaucoup de vapeur
              d'eau via notre expiration, donc si on expire dans notre sac de
              couchage on aura à nouveau : humidité, conduction et froid. Voire
              moisissures dans le sac de couchage aussi, au cas où vous
              hésiteriez encore.
            </li>
            <li>
              <span className={Style.fat}>
                Evitez de bivouaquer juste à côté d'un point d'eau
              </span>{" "}
              s'il fait froid, l'air autour de vous serait alors plus humide,
              facilitant la conduction, vous auriez alors plus froid pour rien.
            </li>
            <li>
              <span className={Style.fat}>Cuisinez en dehors de la tente </span>
              pour éviter d'accumuler les vapeurs d'eau qui viendraient
              humidifer tout ce qu'il y a dans la tente.
            </li>
            <li>
              Quand on s'allonge un sac de couchage, on écrase sa partie
              inférieure. Les poches d'air inerte sont ratatinées, annulant
              l'isolation dans les zones compressées. D'où l'interêt d'avoir un{" "}
              <span className={Style.fat}>
                isolant sous le sac de couchage{" "}
              </span>
              (matelas gonflable, tapis isolant, ou encore underblanket pour les
              hamacs, on en reparlera dans un autre article).
            </li>
            <li>
              Lors de votre choix de matériel, pensez à{" "}
              <span className={Style.fat}>
                {" "}
                prendre un sac de couchage bien à votre taille
              </span>
              . S'il est trop grand l'espace vacant (typiquement au niveau des
              pieds) mettra beaucoup plus de temps à se rechauffer. Et il
              prendrait plus de taille et de poids dans votre sac à dos pour
              rien. Dans l'idéal, choisissez un{" "}
              <span className={Style.fat}>
                sac de couchage en forme de "momie"{" "}
              </span>
              , sa coupe est plus proche du corps (surtout la zone des pieds),
              il vous réchauffera donc mieux et sera un peu plus léger qu'un sac
              de couchage rectangulaire.
            </li>
            <li>
              Les graisses demandant beaucoup d'énergie pour être digérées, il
              peut être intéressant de{" "}
              <span className={Style.fat}>
                manger des aliments contenant des graisses avant de se coucher
              </span>
              , ainsi notre corps produira plus de chaleur pendant quelques
              heures.
            </li>
          </ul>
          <p className={Style.italicBig}>
            Tadaaa ! J'espère que vous aurez appris des choses, et que vous
            passerez de belles nuits bien au chaud lors de vos aventures ! 🌙
          </p>
        </div>
      </div>
    );
  }
}
