import React, { Component } from "react";
import Style from "./Articles.module.scss";

export default class Psychologie extends Component {
  render() {
    return (
      <div>
        <div className={Style.psychologie}>
          <h2>Psychologie et bivouac</h2>
          <h5>
            Imaginez que la pratique du{" "}
            <strong className={Style.strongh5}>bivouac</strong> améliore notre
            <strong className={Style.strongh5}> santé mentale</strong>, <br />{" "}
            ce serait plutôt la classe n’est-ce pas ? 😎
          </h5>
          <p className={Style.question}>
            D’ailleurs en fait, la santé mentale, c’est quoi ?
          </p>
          <div>
            <div>
              <p>
                <img
                  className={Style.ImgFloatRight}
                  src={require("./img/psy01.png")}
                  alt="Santé Mentale"
                />
                👉 L’OMS définit la{" "}
                <em>
                  <span className={Style.fat}>santé</span>
                </em>{" "}
                comme{" "}
                <span className={Style.citation}>
                  « un état de complet bien-être physique, mental et social, et
                  ne consiste pas seulement en une absence de maladie ou
                  d’infirmité »
                </span>
                . Triptyque génial qui s’applique à plein de choses de la vie,
                soit dit en passant.{" "}
              </p>

              <p>
                La <span className={Style.fat}>santé mentale</span> fait ainsi
                partie intégrante de la santé : il ne peut pas y avoir de santé
                sans santé mentale ! Parallèlement, prendre soin de sa santé
                mentale, c’est prendre soin de sa santé globale !
              </p>
              <p>
                La dimension de la santé mentale qui va nous intéresser le plus
                ici est la{" "}
                <strong className={Style.strongText}>
                  <span className={Style.fat}>santé mentale positive</span>
                </strong>{" "}
                : elle correspond au sentiment de bien-être, l’épanouissement
                personnel, la capacité à développer des relations sociales
                positives, et plein d’autres choses…
              </p>
            </div>
          </div>
          <h5>Et le bivouac dans tout ça ??</h5>
          <p>
            L’impact de la pratique du bivouac n’est encore que timidement
            étudiée par les scientifiques, voici déjà quelques études qui
            disposent de résultats très intéressants.
          </p>
          <p>
            <span className={Style.dot}></span>
            <span className={Style.fat}>
              Le bivouac augmenterait la confiance en soi et réduirait l’anxiété
            </span>
            , selon un programme d’étude australien (
            <a
              href="https://www.outdoorsvictoria.org.au/research-shows-aussie-camps-boost-mental-health/"
              title="arrow icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              lien vers l'étude ici
            </a>
            ). Plus la personne avant son départ avait une faible confiance en
            soi et était anxieuse, plus grands seraient les effets bénéfiques.
            Ces derniers sont tellement remarquables que les chercheuses et
            chercheurs souhaitent que le bivouac soit carrément proposé dans des
            programmes pour améliorer la santé mentale des individus, en
            particulier pour les jeunes.
          </p>
          <div>
            <div>
              <p>
                <img
                  className={Style.ImgFloatLeft}
                  src={require("./img/psy02.png")}
                  alt="Cerveau en bonne santé"
                />
                <span className={Style.noWrap}>
                  <span className={Style.dot}></span>Il permettrait aussi
                </span>{" "}
                d’{" "}
                <span className={Style.fat}>
                  améliorer la satisfaction envers la vie, le bonheur et la
                  pleine conscience
                </span>{" "}
                (
                <a
                  href="https://www.sciencedirect.com/science/article/pii/S014019711600049X"
                  title="arrow icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lien vers l'étude ici
                </a>
                ). La pleine conscience, c’est super important, c’est un peu une
                clé de voûte de la santé mentale ! Pour la faire courte, la
                pleine conscience est un état de vigilance interne (pensées,
                émotions,…) ou externe (sons, environnement autour de soi,…),
                qui participe directement à un sentiment de sérénité et à la
                santé mentale positive.
              </p>
              <p>
                <span className={Style.dot}></span>
                En plus de ça, le bivouac permettrait d’
                <span className={Style.fat}>
                  améliorer notre sentiment de maîtrise et faciliterait les
                  liens sociaux
                </span>{" "}
                (
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/23828947/"
                  title="arrow icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lien vers l'étude ici
                </a>
                ). On notera que les effets bénéfiques s’estomperaient au bout
                de 4 semaines.
              </p>
            </div>
          </div>
          <h5>Un p'tit mot pour conclure ? </h5>
          <p>
            Vous l'aurez compris, les études scientifiques semblent nous
            démontrer que le bivouac améliore clairement notre santé mentale sur
            bien des aspects. Aussi, il semble pertinent de bivouaquer
            régulièrement (au moins une fois par mois) pour pérenniser les
            effets positifs offerts par l’aventure dans la nature. Et vive la
            science ! 💪🔎
          </p>
          <p></p>
        </div>
      </div>
    );
  }
}
