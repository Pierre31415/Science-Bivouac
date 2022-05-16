import React, { Component } from "react";
import Style from "./Footer.module.scss";

import InfoDetails from "./infos/info-details/InfoDetails";
import InfoList from "./infos/info-list/InfoList";
import Contact from "./footerData/FooterContact";
import FooterWho from "./footerData/FooterWho";
import FooterCredit from "./footerData/FooterCredits";

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infos: [
        {
          title: "Qui suis-je ?",
          details: <FooterWho />,
        },
        {
          title: "Crédits",
          details: <FooterCredit />,
        },
        {
          title: "Contact",
          details: <Contact />,
        },
      ],
      selectedInfo: 0,
    };
  }

  updateSelectedInfo = (title) => {
    const index = this.state.infos.findIndex((i) => {
      return title === i.title;
    });
    this.setState({
      selectedInfo: index,
    });
  };

  render() {
    return (
      <div className={Style.footerContainer}>
        <div className={Style.footer}>
          <InfoList
            infos={this.state.infos}
            updateSelectedInfo={this.updateSelectedInfo}
          />
          <InfoDetails info={this.state.infos[this.state.selectedInfo]} />
        </div>
      </div>
    );
  }
}
