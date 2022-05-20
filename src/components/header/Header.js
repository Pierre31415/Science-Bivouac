import React, { Component } from "react";
import Style from "./Header.module.scss";
import DarkMode from "../../DarkMode";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className={Style.header}>
          <div className={Style.headerglobal}>
            <div className={Style.intro}>
              <NavLink className={Style.navHeader} to="/">
                <div>
                  <div className={Style.logo600}>
                    <img src={require("./img/logoPNG125.png")} alt="logo" />
                  </div>
                  <div className={Style.logo}>
                    <div className={Style.sciences}>Science</div>
                    <div className={Style.center}>
                      <img
                        className={Style.aiguilleBlue}
                        src={require("./img/ab.png")}
                        alt="aiguille bleue"
                      />
                      &
                      <img
                        className={Style.aiguilleRed}
                        src={require("./img/ar.png")}
                        alt="aiguille rouge"
                      />
                    </div>
                    <div className={Style.bivouac}>Bivouac</div>
                  </div>
                </div>
              </NavLink>
              <div>
                <p className={Style.introtext}>
                  Trucs et astuces de bivouac, avec de vrais morceaux de
                  sciences à <span className={Style.noWrap}>l'intérieur !</span>
                </p>
              </div>
            </div>
            <div className={Style.darkmodebutton}>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
