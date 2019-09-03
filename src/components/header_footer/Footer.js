import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">
          Radiohead Tickets
        </div>
        <div className="footer_copyright">Powered by Dev64</div>
      </Fade>
    </footer>
  );
};

export default Footer;
