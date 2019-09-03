import React from "react";

const Location = () => {
  const location =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4967.115869975856!2d0.0078150740855023!3d51.50297929697198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a81c5507b387%3A0x981ded0cf3b9dadf!2zTzIg15DXqNeg15Q!5e0!3m2!1siw!2sil!4v1567508717642!5m2!1siw!2sil";
  return (
    <div className="location_wrapper">
      <iframe
        src={location}
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullscreen
      ></iframe>
    </div>
  );
};

export default Location;
