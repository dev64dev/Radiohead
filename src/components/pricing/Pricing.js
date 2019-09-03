import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

export class Pricing extends Component {
  state = {
    prices: ["100", "150", "250"],
    positions: ["Balcony", "Medium", "Star"],
    delay: [500, 0, 500]
  };

  showBoxs = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase Tickets"
                color="#fffff"
                bck="#ffa800"
                link="www.ynet.co.il"
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxs()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
