"use strict";

import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Player</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <a href="" className="mdl-navigation__link">Link</a>
          </nav>
        </div>
      </header>
    );
  }
}
