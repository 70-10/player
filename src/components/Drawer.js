"use strict";

import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Player</span>
        <nav className="mdl-navigation">
          <a href="" className="mdl-navigation__link">Link</a>
        </nav>
      </div>
    );
  }
}
