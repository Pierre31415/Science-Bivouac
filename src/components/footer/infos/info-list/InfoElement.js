import React, { Component } from "react";
import Style from "./InfoList.module.scss";

export default class InfoElement extends Component {
  onClick = () => {
    this.props.updateSelectedInfo(this.props.info.title);
  };

  render() {
    return (
      <div className={Style.infoElement} onClick={this.onClick}>
        <div>
          <div>
            <h6 className={Style.infoButton}> {this.props.info.title} </h6>
          </div>
        </div>
      </div>
    );
  }
}
