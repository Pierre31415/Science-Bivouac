import React, { Component } from "react";
import Style from "./Working.module.scss";

export default class Working extends Component {
  render() {
    return (
      <div className={Style.workingContainer}>
        <div className={Style.working}>
          <div>
            <h3 className={Style.h3Working600}>
              <span className={Style.h3noWrap}>SITE EN </span>
              <span className={Style.h3noWrap}>CONSTRUCTION !</span>
            </h3>
            <img
              className={Style.sawing}
              src={require("./sawing.gif")}
              alt="Travaux"
            />
          </div>
          <div className={Style.workingTextDiv}>
            <div>
              <h3>
                <span className={Style.h3noWrap}>SITE EN </span>
                <span className={Style.h3noWrap}>CONSTRUCTION !</span>
              </h3>
              <p className={Style.workingText}>
                Ce site n'en est qu'à ses tout débuts, plein de choses sont à
                venir tant sur le fond (beaucoup plus d'articles sont en chemin)
                que sur la forme (logo, ergonomie) !
              </p>
              <p className={Style.workingText}>
                Bon séjour à vous sur ce site naisssant !
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
