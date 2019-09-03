import React from "react";
import Slider from "react-slick";
import Lenny1 from "../../resources/images/Lenny1.jpg";
import Lenny2 from "../../resources/images/Lenny2.jpg";
import Lenny3 from "../../resources/images/Lenny3.jpg";
import Lenny4 from "../../resources/images/Lenny4.jpg";
import Lenny5 from "../../resources/images/Lenny5.jpg";
import Lenny6 from "../../resources/images/Lenny6.jpg";

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`, //this is setting the window height to the current height
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${Lenny1})`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${Lenny2})`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${Lenny3})`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${Lenny4})`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${Lenny5})`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${Lenny6})`
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
