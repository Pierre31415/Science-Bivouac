import React, { Component } from "react";
import InfoElement from "./InfoElement";
import Style from "./InfoList.module.scss";

export default class InfoList extends Component {
  render() {
    return (
      <div>
        <InfoElement
          info={this.props.infos[0]}
          updateSelectedInfo={this.props.updateSelectedInfo}
        />

        <InfoElement
          info={this.props.infos[1]}
          updateSelectedInfo={this.props.updateSelectedInfo}
        />

        <InfoElement
          info={this.props.infos[2]}
          updateSelectedInfo={this.props.updateSelectedInfo}
        />
      </div>
    );
  }
}
