import React, { Component } from "react";
import Style from "./Articles.module.scss";

export default class SacADos extends Component {
  render() {
    return (
      <div>
        <h2>Le sac à dos</h2>
        <p className={Style.italicBig}>
          Préambule : ici on ne vas pas étudier de liste indiquant quoi mettre
          dans le sac, mais plutôt comment bien choisir son sac et comment
          l'organiser au mieux.
        </p>
        <h5>
          Bien choisir <strong className={Style.strongh5}>son sac à dos</strong>
        </h5>
        <p>
          <div className={Style.imgArticleContainer}>
            <img
              className={Style.imgArticleLeftTop}
              src={require("./img/giantBP.jpg")}
              alt="Sac à dos géant"
            />
          </div>
          <span className={Style.fat}>Le volume</span> : Le volume nécéssaire ne
          sera pas le même{" "}
          <span className={Style.fatNoColor}>
            en fonction de votre aventure
          </span>{" "}
          ou de la{" "}
          <span className={Style.fatNoColor}>
            disposition de votre matériel
          </span>
          . Par exemple, un gros sac à dos n'est pas requis pour une randonnée à
          la journée, il pourra être plus petit aussi si vous accrochez une
          partie de votre matériel (tente, tapis de sol,...) autour de votre
          sac.
          <p>
            <span className={Style.citation}>
              Quel serait le risque de prendre un trop gros sac par rapport à
              nos besoins ?
            </span>{" "}
            Il y a au moins deux aspects à prendre en compte : d'une part votre
            sac serait trop lourd pour rien (voire cher aussi), et c'est
            dommage, mais c'est à vous de voir si ça vous va (personnellement je
            préfère avoir un gros sac avec lequel je fais tout). D'autre part,
            les personnnes qui débutent le bivouac ont tendance à remplir le sac
            tant qu'il y a de la place, en d'autres termes cela fait alors
            beaucoup de poids pour du superflu.
          </p>
          <p>
            En tout cas, disons qu'un sac d'
            <span className={Style.fatNoColor}>au moins 60/70 litres</span> est
            un minimum pour des randonnées sur plusieurs jours en autonomie.
          </p>
          <p>
            <span className={Style.citation}>
              NB : Méfiez-vous des sacs prétendant avoir un compartiment à linge
              sale ajouté sous le sac, mon premier sac était doté de cette
              chose, du coup comme le sac était trop bas il me pinçait les
              fesses pendant la marche !
            </span>
            😅
          </p>
          <p>
            <span className={Style.fat}>Morphologie</span> : Vous l'aurez
            sûrement remarqué, les humains ont la fâcheuse tendance à avoir des
            statures très différentes. L'idéal est ainsi que vous{" "}
            <span className={Style.fatNoColor}>testiez</span> vous-même un sac
            avant de vous l'offrir, et/ou alors que vous essayiez les éventuels
            systèmes de{" "}
            <span className={Style.fatNoColor}>
              réglage de la hauteur des bretelles
            </span>
            . Le saint Graal pour vos épaules qui méritent plein d'amour.
          </p>
          <p>
            <span className={Style.fat}>Philosophie du sac</span> : Il n'y a pas
            de meilleur sac à dos, juste des sacs à dos avec des
            caractéristiques différentes qui correspondent plus ou moins à vos
            priorités. Par exemple, il existe des sacs à dos très légers même à
            grands volumes, mais ils seront sûrement moins solides que des sacs
            à dos militaires très lourds mais indestructibles. Ces derniers sont
            souvent recouverts d'attaches MOLLE (les sortes de bandes
            horizontales) permettant de beaucoup les customiser en y accrochant
            des choses diverses et variées, comme des poches compartiments
            externes supplémentaires, mais peut-être préfèrez-vous un sac "clé
            en main" déjà équipé. En bref : je vous invite à{" "}
            <span className={Style.fatNoColor}>déterminer vos priorités</span>{" "}
            avant que vous ne vous offriez un beau sac à dos.
          </p>
        </p>
        <h5>Bien ajuster son sac</h5>
        <p>
          Pour commencer et pour être sûr(e) de bien ajuster votre sac, l'idéal
          est de le remplir au moins un peu pour que vous le testiez avec un
          volume proche de celui qu'il aura lors de vos sorties.
        </p>
        <div className={Style.imgArticleContainer}>
          {" "}
          <img
            className={Style.imgArticleRightTop}
            src={require("./img/sarmaTSTRP80.jpg")}
            alt="Morphologies"
          />
        </div>

        <ul>
          <li>
            Comme dit plus haut,{" "}
            <span className={Style.fat}>
              ajustez bien la hauteur des bretelles
            </span>{" "}
            si c'est possible,{" "}
            <span className={Style.fat}>et leur longueur</span>.
          </li>
          <li>
            Ajustez <span className={Style.fat}>la ceinture abdominale</span> au
            niveau du bassin. L'idée c'est que{" "}
            <span className={Style.fat}>
              le poids du sac repose sur vos hanches
            </span>{" "}
            et pas sur les épaules, et ça change tout pour porter longtemps et
            confortablement le sac !!
          </li>
          <li>
            Jouez avec les petites sangles au-dessus des bretelles, ce sont les{" "}
            <span className={Style.fat}>rappels de charge</span>, plus elles
            sont resserrées et plus le poids du sac se rapprochera de votre
            centre de gravité naturel, ce qui est une bonne chose, mais cela
            tirera davantage les épaules en arrière. La bonne pratique veut
            qu'il faut{" "}
            <span className={Style.fat}>
              les tirer en descente, et les relâcher en montée.
            </span>
          </li>
          <li>
            Ajustez la <span className={Style.fat}>sangle de poitrine</span>{" "}
            s'il y en a une.
          </li>
        </ul>
        <h5>Remplir son sac de manière optimale</h5>
        <p className={Style.citation}>
          L'idée ici c'est d'une part de faire en sorte que la répartition des
          charges soit la plus confortable possible, et que les choses dont vous
          pouvez avoir besoin fréquemment ou rapidement soient facilement
          accessibles.
        </p>

        <p>
          <ul>
            <li>
              <span className={Style.fat}>Au fond du sac</span> : en prenant en
              compte que c'est souvent un compartiment accessible via fermture
              éclair, y placer des choses lourdes dont vous aurez besoin de
              temps en temps, comme la nourriture et de quoi la préparer. Les
              industriels prétendent étrangement que ce compartiment est voué à
              y ranger le sac de couchage, ce qui est absurde car le sac de
              couchage est la dernière chose dont vous aurez besoin même après
              avoir mis en place votre bivouac, en plus du fait que même
              compressés les sacs de couchage restent légers or les choses
              légères sont bien mieux placées en hauteur et postérieurement.
            </li>
            <li>
              <span className={Style.fat}>Le long du dos</span> : d'autre choses
              lourdes mais dont vous n'aurrez besoin qu'une fois par jour, une
              tente par exemple.
            </li>
            <li>
              <span className={Style.fat}>Dans les poches latérales</span> :
              dans l'idéal des choses légères qui ont besoin d'être rapidement
              accessibles, comme une tenue de pluie ou un tarp. Personnellement
              comme je bois énormément d'eau j'ai choisi d'y ranger mes deux
              gourdes que je vide de manière équitable pour garder l'équilibre.
            </li>
            <li>
              <span className={Style.fat}>Poche supérieure</span> : à vous de
              voir ! Pourquoi pas le portefeuille et une trousse de secours ! En
              tout cas il faut que ce soit léger.
            </li>
            <li>
              Et pour vos poches de pantalon ou les mini-poches sur les hanches,
              à vous de voir aussi, soit rien soit votre téléphone par exemple.
            </li>
          </ul>
        </p>
        <h5>Bien protéger ses affaires</h5>
        <p>
          Avoir un sac c'est bien, mais ça ne suffit pas pour bien protéger vos
          affaires d'une grosse pluie, quand bien-même le sac est déperlant !
        </p>
        <p>
          <div className={Style.imgArticleContainer}>
            {" "}
            <img
              className={Style.imgArticleRightTop}
              src={require("./img/BPDeco1.png")}
              alt="Carte"
            />
          </div>
          Deux clés du succès : un <span className={Style.fat}>sursac</span>{" "}
          pour la pluie, qui englobe le sac et qui fait une grande partie du
          boulot, mais une partie seulement car à cause de la pluie qui pénètre
          dans le sac en passant par les bretelles il faut le compléter par...
          La deuxième clé du succès ! (insérer rire satisfait à gorge déployée)
          Et cette deuxième clé, ce sont les{" "}
          <span className={Style.fat}>sacs étanches</span> à placer dans le sac.
        </p>
        <p>
          Je vous invite à vraiment utiliser ces sacs étanches s'il risque de
          pleuvoir pendant votre aventure, surtout pour vos affaires précieuses
          comme l'electronique ou vos vêtements censés rester secs pour la nuit.
          En outre, ces sacs permettent d'organiser les affaires dans le sac à
          dos (par exemple un sac pour le linge sec, un autre pour le sac de
          couchage, etc...).
        </p>
        <p className={Style.question}>
          En espérant que tout ceci vous aidera à vous promener au mieux avec
          votre maison sur le dos, bonne balade et bon bivouac à vous !
        </p>
      </div>
    );
  }
}
