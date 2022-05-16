import React, { Component } from "react";
import Style from "./Articles.module.scss";

export default class Hamac extends Component {
  render() {
    return (
      <div>
        <h2>Hamac : Mode d'emploi</h2>
        <h5>Pourquoi le hamac c'est trop bien ?</h5>
        <p>
          On en parlait dans l'article précédent, le hamac offre confort, une
          grande résilience, ventile bien et préserve le sol et les arbres. En
          d'autres termes, le hamac c'est la vie.
        </p>
        <p>
          <span className={Style.question}>
            NB : Promis je prendrai bientôt plein de jolies photos pour mieux
            tout vous présenter !
          </span>{" "}
          📷
        </p>
        <h5>Recette d'une belle installation de hamac</h5>
        <p>
          Comme ingrédients principaux, il vous faudra :
          <ul>
            <li>
              Le <span className={Style.fat}>hamac</span> lui-même, ce qui a du
              sens, et ses cordes voire mieux ses{" "}
              <span className={Style.fat}>sangles</span>
            </li>
            <li>
              Un <span className={Style.fat}>tarp</span>
            </li>
            <li>
              Un <span className={Style.fat}>underblanket</span>
            </li>
            <li>
              Une <span className={Style.fat}>moustiquaire</span>
            </li>
          </ul>
        </p>
        <p>
          Ingrédients secondaires :{" "}
          <ul>
            <li>
              De la <span className={Style.fat}>corde</span>
            </li>{" "}
            <li>Du quoi découper la corde</li>
            <li>
              Des <span className={Style.fat}>piquets</span> (au moins 2) pour
              accrocher le tarp au sol
            </li>
            <li>
              Des <span className={Style.fat}>mousquetons</span>, soit
              résistants, soit légers mais fragiles (par exemple juste pour
              accrocher du matos léger) en fonction de vos objectifs
            </li>
          </ul>
        </p>
        <p>
          <span className={Style.question}>
            Si vous le voulez bien, étudions les éléments principaux un par un{" "}
          </span>
          ! 🔎
        </p>
        <h5>Le hamac lui-même</h5>
        <img
          className={Style.ImgFloatRightTop}
          src={require("./img/hamacDiagonal.jpg")}
          alt="Dormir en diagonale dans le hamac"
        />
        Plus votre hamac sera <span className={Style.fat}>long</span>, plus
        votre dos sera droit quand vous vous allongerez. <br />
        Un hamac <span className={Style.fat}>large</span> permet aussi de se
        placer en biais pour avoir le dos encore plus droit.
        <p>
          Je n'ai pas l'intention de faire des placements de produit, mais de
          manière unanime il semblerait que la meilleure marque reste Ticket to
          The Moon, puisque chez eux on y trouve facilement des hamacs longs,
          larges, très résistants, avec des options chouettes comme l'attache
          par mousquetons ultra-solides et des sangles extrêmement faciles à
          utiliser et protégeant l'arbre.{" "}
        </p>
        <p>
          En ce qui me concerne je m'étais offert un "Travel hammock" en King
          Size, avec mousquetons et Moonstraps (la sangle facile à utiliser et
          qui protège l'arbre ; je vous recommande vivement d'utiliser ce genre
          de sangle ne serait-ce que pour préserver les arbres). Si c'était à
          refaire, je reprendrai le même modèle.
        </p>{" "}
        <p>
          Pour commencer, il vous faudra{" "}
          <span className={Style.fat}>trouver deux arbres SOLIDES</span> (non,
          s'accrocher à un petit tronc d'arbre mort n'est pas une bonne idée !),
          séparés d'une distance qui dépend de la taille de votre hamac. En ce
          qui me concerne, 5 pas et demi ça fait le job.
        </p>{" "}
        <img
          className={Style.imgRectangleLeftTop}
          src={require("./img/hamacAngle.PNG")}
          alt="Le bon angle"
        />
        <p>
          S'assurer d'avoir{" "}
          <span className={Style.fat}>
            au moins 40 cm de hauteur sous le hamac
          </span>{" "}
          à vide semble bien marcher, cela évite qu'il se frotte au sol quand
          notre gros popotin atterit dans le hamac. Prenez en compte que lorsque
          le hamac est tenu par des arbres assez lisses, il arrive que ses
          attaches glissent tout doucement pendant la nuit, lors de mes premiers
          bivouacs je me suis ainsi déjà retrouvé les fesses au sol en fin de
          nuit ; donc anticiper ceci en attachant solidement les sangles et avec
          un bonne hauteur de départ est un bon reflexe à avoir.
        </p>
        <p>
          Lorsque vous accrochez votre hamac,{" "}
          <span className={Style.fat}>vérifiez bien que l'inclinaison</span> des
          cordes du hammac correspond à celle formée par vos doigts imitant un
          pistolet (cf image ci-contre). Si votre hamac est trop lâche votre dos
          sera trop plié, et s'il est trop tendu il sera beaucoup moins
          confortable.
        </p>
        <h5>
          <strong className={Style.strongh5}>Le tarp</strong>
        </h5>
        <img
          className={Style.imgRectangleRightTop}
          src={require("./img/tarp.png")}
          alt="Tarp"
        />
        <p>
          "Tarp" est le diminutif de "Tarpaulin" en anglais, désignant une
          bâche.
        </p>
        <p>
          Le tarp, c’est le « toit » qui vous{" "}
          <span className={Style.fat}>protège de la pluie</span>, voire même qui
          peut vous aider à vous camoufler un peu. Je conseillerais un tarp en
          3x3m, la diagonale tendue par-dessus le hamac. Pas la peine de prendre
          plus, se contenter de 3x3 fait le job, ça coute moins cher, pèse moins
          lourd et prend moins de place dans le sac !
          <p>
            Attention la <span className={Style.fat}>résistance</span> du tarp
            est importante, j’ai commencé mes bivouacs avec un tarp à 20 € qui
            s’est totalement déformé pendant une grosse pluie, formant une
            énorme cloque qui le rend inutilisable. J'ai maintenant un excellent
            et solide tarp de DD Hammock dont je me réjouis.
          </p>
          <p>
            Pour éviter de trop solliciter votre tarp, au lieu d'accrocher
            directement ses extrémités aux arbres et les tendre un maximum, je
            vous invite à le{" "}
            <span className={Style.fat}>suspendre à une corde</span> tendue
            entre les deux arbres, permettant de suspendre le tarp par plusieurs
            points d'accroche (avec un peu de corde et des noeuds de Prussik
            dont on reparlera dans un autre article, par exemple).
          </p>
        </p>
        <h5>
          <strong className={Style.strongh5}>L'underblanket</strong>
        </h5>
        <p>
          Si vous cherchez une traduction française, cela donnerait quelque
          chose du genre "couverture du dessous". Inélégant, mais c'est déjà un
          peu plus clair.
        </p>
        <img
          className={Style.ImgFloatLeftTop}
          src={require("./img/underblanket.jpg")}
          alt="Underblanket"
        />
        <p>
          L'underblanket est un élément souvent négligé par les personnes
          débutant le bivouac en hamac, il a pourtant un rôle très important d'
          <span className={Style.fat}>isolation</span>.
          <br /> En effet, comme il est décrit dans l'article "Température",
          lorsqu'on se place dans le sac de couchage ce dernier se ratatine
          surtout sous notre postérieur, annulant son pouvoir isolant. C’est ce
          qu’on appelle « <span className={Style.fat}>
            les fesses froides
          </span>{" "}
          ». L’underblanket va ajouter une couche d’isolation SOUS le hamac,
          permettant de garder notre glorieux popotin au chaud ainsi que toute
          partie du corps qui écrase le sac de couchage.
        </p>
        <p>
          Pour bien l'installer, il faut s'assurer que lorsqu'on rentre dans le
          hamac il{" "}
          <span className={Style.fat}>reste un espace d'air vaquant</span> entre
          l'underblanket et le hamac, comme l'illustre très bien la photo
          ci-onctre. En effet, si l'underblanket est trop étiré et écrasé sous
          le hamac, l'esapce d'air inerte isolant sera inexistant et
          l'underblanket perdra en volume et donc en pouvoir isolant aussi.
        </p>
        <p>
          <span className={Style.citation}>
            Une couverture de survie sous le sac ce couchage ne pourrait-elle
            pas faire l'affaire à la place ?
          </span>{" "}
          Non, comme ce n'est pas respirant, la condensation s'accumulerait,
          vous baigneriez dans votre propre transpiration et vous auriez froid,
          ce qui serait dommage pour quelque chose censé vous réchauffer.
          Certaines personnes utilisent par contre un tapis de sol DANS le
          hammac, ce qui est intéressant en terme de poids mais la perte de
          confort et d'isolation par rapport à un underblanket me semble
          évidente.
        </p>
        <h5>
          <strong className={Style.strongh5}>La moustiquaire</strong>
        </h5>
        <p>
          {" "}
          <img
            className={Style.imgRectangleRightTop}
            src={require("./img/360.jpg")}
            alt="Moustiquaire"
          />
          Dans l'absolu, c'est un élément optionnel, mais ça devient
          indispensable pour les personnes comme moi qui attirent tout ce qui a
          au moins 6 pattes et qui pique à 1 milliard de Km à la ronde !{" "}
          <span className={Style.fat}>
            Certaines sont intégrées directement au hamac, d’autres au sac de
            couchage, d'autres encore englobent tout le hamac
          </span>
          . En ce qui me concerne j’ai choisi la moustiquaire « 360 °» de Ticket
          To The Moon, qui englobe le hamac tout entier ; je m'assure que sa
          petite corde intérieure soit bien tendue pour que la moustiquaire ne
          s’affaisse pas sur mon visage et que les moustiques me piquent à
          travers ^^ En plus elle a un effet coupe-vent inattendu qui permet de
          rester un cran plus au chaud quand les températures sont basses !
        </p>
        <p>
          On notera qu' à partir d'une certaine altitude il n'y a presque plus
          d'insectes, la moustiquaire devient alors dispensable.
        </p>
        <p className={Style.citation}>
          (NB : la moustiquaire englobe bien sûr le hamac ET l'underblanket !)
        </p>
        <h5>Astuces avancées</h5>
        <p>
          Voici quelques trucs et astuces qui valent le coup d'être connus pour
          que vous profitiez d'un bivouac en hamac au poil :{" "}
          <ul>
            <li>
              {" "}
              <img
                className={Style.imgRectangleRightTop}
                src={require("./img/perfection.webp")}
                alt="Perfection"
              />
              <span className={Style.fat}>
                Accrocher des petits bouts de corde
              </span>{" "}
              comme des lacets qui pendouillent à chacune des deux grandes
              cordes qui tiennent le hamac permettra aux{" "}
              <span className={Style.fat}>gouttes de pluie</span> de s'y
              échapper plutôt que de couler jusqu'à votre hamac.
            </li>
            <li>
              Si elle n'en n'a pas déjà, installez une corde bien tendue juste
              sous la moustiquaire et au-dessus du hammac vous permettra d'y{" "}
              <span className={Style.fat}>
                accrocher des objets facilement accessibles
              </span>{" "}
              pendant la nuit. Par exemple j'y attache ma lampe frontale et des
              gants à disposition s'il fait froid.
            </li>
            <li>
              Comme dit plus haut,{" "}
              <span className={Style.fat}>s'allonger en biais</span> dans le
              hamac permet de dormir encore mieux car le dos est alors plus
              droit.
            </li>
            <li>
              Accrocher ses chaussures par les lacets et autres affaires sous le
              tarp permet de les <span className={Style.fat}>faire sécher</span>
              .
            </li>
            <li>
              Je ne l'ai pas encore testé et je ne sais pas encore si c'est
              vraiment pertinent, mais si vous avez en plus une petite bâche ou
              un petit tapis de sol cela pourrait être agréable de la ou
              l'installer là où vous poserez les pieds quand vous descendez de
              hamac, plutôt que de devoir poser vos pieds à terre dans les
              brindilles avant d'enfiler vos chaussures (parce que mettre ses
              chaussures en hamac, ce n'est pas ce qui qu'il y a de plus
              simple).
            </li>
          </ul>
        </p>
        <p className={Style.italicBig}>
          Et voilà ! Vous détenez maintenant la maîtrise absolue du hamac et par
          extension de tout l'Univers !
        </p>
      </div>
    );
  }
}
