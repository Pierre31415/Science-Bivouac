import React, { Component } from "react";
import Style from "./Aside.module.scss";
import useCollapse from "react-collapsed";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Collapsible1() {
  const config = {
    duration: 500,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <div className={Style.collapsible}>
      <div className={Style.category} {...getToggleProps()}>
        {isExpanded ? (
          <div className={Style.catAfter}>
            <div>SCIENCE !</div>
            <div>
              <img
                className={Style.arrow1}
                src={require("./img/rarrowdown.png")}
                alt="fleche"
              />
            </div>
          </div>
        ) : (
          <div className={Style.catBefore}>
            <div>SCIENCE !</div>
            <div>
              <img
                className={Style.arrow2}
                src={require("./img/rarrowright.png")}
                alt="fleche"
              />
            </div>
          </div>
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className={Style.undertitle}>
          <NavLink className={Style.nav} to="/psy">
            <span className={Style.subcat}>Psychologie</span>
          </NavLink>
          <hr />
          <NavLink className={Style.nav} to="/temperature">
            <span className={Style.subcat}>La température</span>
          </NavLink>
          <hr />
          <NavLink className={Style.nav} to="/nutrition">
            <span className={Style.subcat}>Nutrition</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

function Collapsible2() {
  const config = {
    duration: 500,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <div className={Style.collapsible}>
      <div className={Style.category} {...getToggleProps()}>
        {isExpanded ? (
          <div className={Style.catAfter}>
            <div>MATOS</div>
            <div>
              <img
                className={Style.arrow1}
                src={require("./img/rarrowdown.png")}
                alt="fleche"
              />
            </div>
          </div>
        ) : (
          <div className={Style.catBefore}>
            <div>MATOS</div>
            <div>
              <img
                className={Style.arrow2}
                src={require("./img/rarrowright.png")}
                alt="fleche"
              />
            </div>
          </div>
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className={Style.undertitle}>
          <NavLink className={Style.nav} to="/hamacVsTente">
            <span className={Style.subcat}> Hamac vs tente</span>
          </NavLink>
          <hr />
          <NavLink className={Style.nav} to="/hamac">
            <span className={Style.subcat}>Hamac : mode d'emploi</span>
          </NavLink>
          <hr />
          <NavLink className={Style.nav} to="/sacADos">
            <span className={Style.subcat}>Le sac à dos</span>
          </NavLink>{" "}
          <hr />
          <NavLink className={Style.nav} to="/batons">
            <span className={Style.subcat}>Les bâtons</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

function Collapsible3() {
  const config = {
    duration: 500,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <div className={Style.collapsible}>
      <div className={Style.category} {...getToggleProps()}>
        {isExpanded ? (
          <div className={Style.catAfter}>
            <div>TECHNIQUES</div>
            <div>
              <img
                className={Style.arrow1}
                src={require("./img/rarrowdown.png")}
                alt="fleche"
              />
            </div>
          </div>
        ) : (
          <div className={Style.catBefore}>
            <div>TECHNIQUES</div>
            <div>
              <img
                className={Style.arrow2}
                src={require("./img/rarrowright.png")}
                alt="fleche"
              />
            </div>
          </div>
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className={Style.undertitle}>
          <NavLink className={Style.nav} to="/noeuds">
            <span className={Style.subcat}> Les noeuds</span>
          </NavLink>
          <hr />
          <NavLink className={Style.nav} to="/orienter">
            <span className={Style.subcat}> S'orienter</span>
          </NavLink>
          <hr />{" "}
          <NavLink className={Style.nav} to="/feu">
            <span className={Style.subcat}> Le feu</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

function Collapsible4() {
  const config = {
    duration: 500,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <div className={Style.collapsible}>
      <div className={Style.category} {...getToggleProps()}>
        {isExpanded ? (
          <div className={Style.catAfter}>
            <div>PREPARATION</div>
            <div>
              <img
                className={Style.arrow1}
                src={require("./img/rarrowdown.png")}
                alt="fleche"
              />
            </div>
          </div>
        ) : (
          <div className={Style.catBefore}>
            <div>PREPARATION</div>
            <div>
              <img
                className={Style.arrow2}
                src={require("./img/rarrowright.png")}
                alt="fleche"
              />
            </div>
          </div>
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className={Style.undertitle}>
          <NavLink className={Style.nav} to="/trajet">
            <span className={Style.subcat}>Le trajet</span>
          </NavLink>
          <hr />
          <NavLink className={Style.nav} to="/loi">
            <span className={Style.subcat}>La loi</span>
          </NavLink>
          <hr />
          <NavLink className={Style.nav} to="/entrainement">
            <span className={Style.subcat}>L'entraînement</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

// collapsible pour le menu

function CollapsibleMenu() {
  const config = {
    duration: 500,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <div className={Style.collapsibleMenu}>
      <div className={Style.categoryMenu} {...getToggleProps()}>
        {isExpanded ? (
          <div className={Style.catAfterMenu}>
            <div>
              <div className={Style.menuBurgerAfter}>
                <div className={Style.burger}>
                  <GiHamburgerMenu className={Style.icon} />
                </div>
                <span className={Style.menuBefore}>Menu</span>
                <img
                  className={Style.arrow1Menu}
                  src={require("./img/rarrowdown.png")}
                  alt="fleche"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className={Style.catBeforeMenu}>
            <div>
              <div className={Style.menuBurgerBefore}>
                <div className={Style.burger}>
                  <GiHamburgerMenu className={Style.icon} />
                </div>
                <span className={Style.menuAfter}>Menu</span>
                <img
                  className={Style.arrow2Menu}
                  src={require("./img/rarrowright.png")}
                  alt="fleche"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className={Style.undertitleMenu}>
          <NavLink className={Style.nav} to="/">
            <h4 className={Style.homeMenu}>Accueil</h4>
          </NavLink>
          <Collapsible1 />
          <Collapsible2 />
          <Collapsible3 />
          <Collapsible4 />
        </div>
      </div>
    </div>
  );
}

export default class Aside extends Component {
  render() {
    return (
      <div className={Style.aside}>
        <div className={Style.asideContent}>
          <NavLink className={Style.nav} to="/">
            <h4 className={Style.home}>Accueil</h4>
          </NavLink>

          <Collapsible1 />
          <Collapsible2 />
          <Collapsible3 />
          <Collapsible4 />
        </div>

        <div className={Style.asideContentQueries}>
          <div>
            <CollapsibleMenu />
          </div>
          <div className={Style.searchBar}>
            <div className={Style.searchBarTop}>
              <FaSearch className={Style.icon} />
              <input type="text" placeholder="Rechercher..." />
            </div>
            <div className={Style.searchBarBottom}>
              <p className={Style.msgSearchBar}>
                La barre de recherche est en cours de travaux !
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
