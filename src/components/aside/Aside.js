import React, { Component } from "react";
import Style from "./Aside.module.scss";

export default class Aside extends Component {
  render() {
    return (
      <div className={Style.aside}>
        <h2>TCHINBOULA</h2>
      </div>
    );
  }
}
