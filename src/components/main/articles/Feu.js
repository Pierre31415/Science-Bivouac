import React, { Component } from "react";
import Style from "./Articles.module.scss";

export default class Feu extends Component {
  render() {
    return (
      <div>
        <h2>Le feu</h2>
        <p className={Style.italicBig}>
          Préambule : La coïncidence fait que j'écris cet article le jour même
          de ma découverte d'une fin d'incendie de forêt encore fumante,
          quelques flammes se gondolent encore au sol. J'ai alerté les pompiers
          qui s'étaient pourtant déjà occupés de cet incendie il y a 3 jours
          selon leurs dires.
        </p>
        <p className={Style.italicBig}>
          Il serait dû à des crétins qui ont brulé une voiture qui était restée
          sur le chemin forestier, pourtant à plusieurs mètres de la végétation.
          Nous sommes au printemps, les journées sont encore assez fraîches.
          Malgré tout ça, la présence du feu a suffit à atteindre la végétation,
          se répandre et dévorer deux hectares de forêt, emportant avec lui des
          millions de vies d'insectes, d'oeufs d'oiseaux, de végétation...
        </p>
        <p className={Style.italicBig}>
          Les risques d'incendie, c'est du sérieux. Faisons toutes et tous notre
          possible pour les éviter.
        </p>
        <img
          className={Style.imgCenterWide}
          src={require("./img/incendie2.png")}
          alt="Feu de forêt"
        />
        <h5>
          Le <strong className={Style.strongh5}>feu</strong> : Est-ce vraiment
          une nécessité ?
        </h5>
        <p>
          Tout est dans le titre. Même un petit réchaud à gaz mal surveillé peut
          tomber et déclencher un incendie. Parallèlement, savoir créer un feu
          peut littéralement vous sauver d'une hypothermie suite à un problème
          majeur dans votre périple. Nous allons étudier ici un top 4 des
          meilleures façons de gérer le feu.
        </p>
        <h5>TOP 1 : Ne pas utiliser de feu !</h5>
        <p>
          Oui, c'est le meilleur plan ! Plus sécurisé, plus léger (pas de besoin
          de réchaud), plus résilient (pas besoin de stock de cartouches de
          gaz), ...{" "}
          <span className={Style.fat}>
            Le meilleur feu est celui qu'on n'allume pas !
          </span>
        </p>
        <p>
          Posez-vous la question : avez-vous vraiment besoin d'un café au réveil
          impliquant d'allumer de quoi le chauffer, comme pour marquer que vous
          ramenez vos habitudes avec vous dans la nature ? Et même si c'est le
          cas, ne préférez-vous pas avoir un sac plus léger ? Ce que j'essaye de
          vous dire, c'est qu'on associe souvent le bivouac à un feu de camp,
          mais il est plus intelligent de prendre du recul quant à nos
          représentations et{" "}
          <span className={Style.fat}>s'interroger sur nos priorités</span>.
        </p>
        <p>
          En ce qui me concerne je n'ai jamais eu à allumer un seul feu pendants
          mes aventures, en ayant avec moi de bonnes affaires chaudes, de quoi
          filtrer l'eau et de la nourriture qui n'a pas besoin d'être chauffée,
          je compte bien faire perdurer mes bivouacs ainsi. 👌
        </p>
        <h5>TOP 2 : Le réchaud à gaz</h5>
        <p>
          <img
            className={Style.imgRectangleRightTop}
            src={require("./img/rechaudGaz.jpg")}
            alt="Réchaud à gaz"
          />
          Très utilisé car il{" "}
          <span className={Style.fat}>
            permet d'avoir simplement et immédiatement du feu
          </span>
          , il limite aussi beaucoup le risque d'incendie.
          <p>
            Son gros inconvénient est de{" "}
            <span className={Style.fat}>dépendre de cartouches de gaz</span>{" "}
            avec soi, prenant du poids et de la place dans le sac. Pour de
            longues excursions impliquant beaucoup de cartouches, ce n'est pas
            terrible.
          </p>
        </p>
        <h5>TOP 3 : Le réchaud à bois</h5>
        <p>
          <img
            className={Style.imgRectangleLeftTop}
            src={require("./img/rechaudBois.jpg")}
            alt="Réchaud à bois"
          />
          Concrètement, c’est une boîte démontable dans laquelle on allume un
          feu. Ses principaux atouts sont sa{" "}
          <span className={Style.fat}>résilience</span> (vous trouverez toujours
          facilement des petits bouts de bois dans la nature) et sa faible
          consommation de bois (qu’il faut tout de même alimenter très
          régulièrement).
          <p>
            Sa forme limite le risque de faire tomber des petites braises, mais
            l’omniprésence de trous n’annule pas ce risque,{" "}
            <span className={Style.fat}>prudence</span> donc. Les réchauds à
            bois sont trop petits pour chauffer un camp, mais sont adaptés pour
            chauffer un plat.
          </p>
        </p>
        <h5>TOP 4 : Le feu de camp</h5>
        <p>
          <img
            className={Style.imgRectangleRightTop}
            src={require("./img/feuDeCamp.jpg")}
            alt="Feu de camp"
          />
          C’est la vision idyllique du feu en bivouac. Si vous deviez en faire
          un, pensez qu’il est préférable de créer un{" "}
          <span className={Style.fat}>petit feu</span> auprès duquel vous
          pourrez être plus proche, qui sera plus sécurisé et plus écologique,
          car oui l’empreinte d’un feu de camp stérilise le sol en dessous. Un
          gros feu de camp vous forcerait à en profiter plus loin, à consommer
          beaucoup plus de bois, serait plus dangereux et encore plus nuisible
          écologiquement, alors que vous bénéficieriez de la même chaleur.
        </p>
        <p>
          <span className={Style.fat}>
            ATTENTION ! Les tentes et les sacs de couchage ont tendance à être
            très inflammables !
          </span>{" "}
          Certaines affaires résistent un peu mieux au feu que le synthétique,
          par exemple le coton et la laine.
        </p>
        <h5>Comment allumer un feu ?</h5>
        <p>
          Il y a sûrement au moins mille façons d'initier et de concevoir un
          feu. On va essayer quand même d'en saisir les grandes ideés.
        </p>
        <p>
          <span className={Style.fatBlue}>Où placer votre feu ?</span> En
          prenant en compte le fait qu'il pourrait y avoir de grands coups de
          vents qui projeterraient les braises, le mieux est qu'il soit{" "}
          <span className={Style.fat}>assez éloigné de votre bivouac</span>.
          Pensez à garder un{" "}
          <span className={Style.fat}>récipient d'eau à proximité</span> par
          sécurité.
        </p>
        <p>
          <img
            className={Style.imgRectangleRightTop}
            src={require("./img/firesteel.jpg")}
            alt="Firesteel"
          />
          <span className={Style.fatBlue}>Quels outils ?</span> Le briquet est
          un option intéressante, mais s'il vous lâche c'est fini ! Les
          allumettes sont des outils corrects aussi mais sont inefficaces quand
          il y a du vent ou si elles prennent l'humidité. Le top semble être un{" "}
          <span className={Style.fat}>Firesteel</span>, qui est l'équivalent
          d'une pierre à feu. Il est très souvent accompagné de son grattoir,
          autrement la partie large de la lame d'une couteau de survie devrait
          faire l'affaire.
        </p>
        <p>
          <span className={Style.fatBlue}>
            Comment faire démarrer le feu facilement ?
          </span>{" "}
          Des <span className={Style.fat}>feuilles mortes</span> bien sèches, ou
          des <span className={Style.fat}>copeaux de bois</span> que vous aurez
          grattés depuis le côté interne d'une écorce d'arbre mort (surtout le
          bouleau) feront très bien l'affaire. Sinon, vous aurez peut-être pris
          dans vos affaires des petits bouts de{" "}
          <span className={Style.fat}>coton</span> qui s'enflammeront très
          rapidement.
        </p>
        <p>
          <span className={Style.fatBlue}>Quel bois utiliser ?</span> Utilisez
          toujours du <span className={Style.fat}>bois mort</span>, déjà par
          respect pour les arbres vivants, et ensuite parce qu'il est moins
          hydraté que le bois vert, facilitant ainsi la combustion.
        </p>
        <p>
          <span className={Style.fatBlue}>
            À quoi doit ressembler la structure du foyer ?
          </span>{" "}
          <span className={Style.fat}>Établissez un périmètre de sécurité</span>{" "}
          en retirant dans un premier temps tout ce qui serait prompt à
          s'embraser facilement jsute autour du foyer (feuilles mortes, herbes
          sèches,...). Pour limiter l'echappement de braises, il est important
          de construire un <span className={Style.fat}>cercle de pierres</span>{" "}
          autour du foyer si c'est un feu de camp. Enfin, la façon de poser
          votre bois peut ressembler à un tipi (feu de camp), en s'assurant que
          <span className={Style.fat}> l'air passe bien</span>.
        </p>
        <p>
          <span className={Style.fatBlue}>Et une fois que c'est lancé ?</span>{" "}
          Le feu a besoin de l'oxygène de l'air pour exister, n'hésitez pas à
          <span className={Style.fat}>
            {" "}
            souffler dessus régulièrement au début
          </span>
          . Il vous faudra par la suite{" "}
          <span className={Style.fat}>l'entretenir</span> en rajoutant des
          branchages morts. Et de manière plus globale :{" "}
          <span className={Style.fat}>surveillez TOUJOURS votre feu</span>, il y
          va de votre sécurité et de celle de toutes les formes de vie autour de
          vous !
        </p>
        <p className={Style.italicBig}>
          Vous êtes maintenant capables de chantonner les incantations
          nécessaires pour créer des boules feu ou des épées enflammées, ou
          presque. Plus sérieusement, si vous voulez vous offrir la chaleur d'un
          feu, pensez à offrir en échange le plus de sécurité possible à la
          nature qui vous environne !
        </p>
      </div>
    );
  }
}
