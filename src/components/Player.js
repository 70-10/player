"use strict";

import React, { Component } from "react";

import Header from "./Header";
import Drawer from "./Drawer";

export default class Player extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header />
        <Drawer />
        <main className="mdl-layout__content">
          <div className="page-content">Player</div>
        </main>
      </div>
    );
  }
}
