import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButtons from "../utils/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };
  render() {
    return (
      <div>
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>OK COMPUTER TOUR</h3>
              <p>
                OK Computer is the third studio album by English rock band
                Radiohead, released on 16 June 1997 on EMI subsidiaries
                Parlophone and Capitol Records.
              </p>

              <MyButtons
                text="Purchase Tickets"
                color="#fffff"
                bck="#ffa800"
                link="www.ynet.co.il"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
export default Discount;
