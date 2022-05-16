import React, { Component } from "react";
import Style from "../Footer.module.scss";

export default class Contact extends Component {
  render() {
    return (
      <div className={Style.contact}>
        <div>
          <p>
            Je serai très heureux et attentif à vos suggestions si vous
            souhaitez m'en faire part !
          </p>
          <div className={Style.mailAdress}>
            <a href="mailto:pierre.isidore@laposte.net">
              pierre.isidore@laposte.net
            </a>
          </div>
        </div>
      </div>
    );
  }
}
