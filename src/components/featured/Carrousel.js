import React from "react";
import Slider from "react-slick";
import radiohead1 from "../../resources/images/radiohead1.jpg";
import radiohead2 from "../../resources/images/radiohead2.jpg";
import radiohead3 from "../../resources/images/radiohead3.jpg";

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
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
              background: `url(${radiohead1})`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${radiohead2})`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${radiohead3})`
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
