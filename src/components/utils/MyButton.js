import React from "react";
import { Button } from "@material-ui/core";
import ticket_icon from "../../resources/images/icons/ticket.png";

const MyButton = props => {
  return (
    <div>
      <Button
        href={props.link}
        variant="contained"
        size="small"
        style={{
          background: props.bck,
          color: props.color
        }}
      >
        <img src={ticket_icon} alt="icon_button" className="iconImage" />
        {props.text}
      </Button>
    </div>
  );
};

export default MyButton;
