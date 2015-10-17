"use strict";

import React from "react";

export default class Card extends React.Component {

  render() {
    const imgUrl = this.props.url;
    const cardImageStyle = {
      width: "256px",
      height: "256px",
      background: `url('${imgUrl}') center / cover`
    };
    const actionStyle = {
      height: "52px",
      padding: "16px",
      background: "rgba(0,0,0,0.2)"
    };
    const fileNameStyle = {
      color: "#fff",
      "font-size":"14px",
      "font-weight": 500
    };

    return(
      <div className="mdl-card mdl-shadow--2dp" style={cardImageStyle}>
        <div className="mdl-card__title mdl-card--expand"></div>
        <div className="mdl-card__actions" style={actionStyle}><span style={fileNameStyle}>Image.jpg</span></div>
      </div>
    );
  }
}
