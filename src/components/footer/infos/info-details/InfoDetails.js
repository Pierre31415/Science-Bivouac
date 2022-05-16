import React, { Component } from "react";
import Style from "./InfoDetails.module.scss";

export default class InfoDetails extends Component {
  render() {
    return (
      <div className={Style.infoDetails}>
        <div className={Style.footerTitle}>
          <span>{this.props.info.title}</span>
        </div>
        <div>
          <span>{this.props.info.details}</span>
        </div>
      </div>
    );
  }
}
