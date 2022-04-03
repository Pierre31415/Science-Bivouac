import React, { Component } from "react";
import Style from "./Header.module.scss";
import DarkMode from "../../DarkMode";

export default class Header extends Component {
  render() {
    return (
      <div className={Style.header}>
        <div className={Style.headerglobal}>
          <div className={Style.intro}>
            <div className={Style.logo}>
              <div className={Style.sciences}>Sciences</div>
              <div className={Style.center}>
                <img
                  className={Style.aiguilleblue}
                  src={require("./img/ab.png")}
                  alt="aiguille bleue"
                />
                &

                <img
                  className={Style.aiguillered}
                  src={require("./img/ar.png")}
                  alt="aiguille rouge"
                />
              </div>
              <div className={Style.bivouac}>Bivouac</div>
            </div>

            <p className={Style.introtext}>
              Trucs et astuces de bivouac, avec de vrais morceaux de sciences à
              l'intérieur !
            </p>
          </div>
          <div className={Style.darkmodebutton}>
            <DarkMode />
          </div>
        </div>
      </div>
    );
  }
}
