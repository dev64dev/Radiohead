import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { scroller } from "react-scroll";

const SideDrawer = props => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -90
    });
    props.onClose(false);
  };
  return (
    <div>
      <Drawer
        anchor="right"
        open={props.open}
        onClose={() => props.onClose(false)}
      >
        <List component="nav">
          <ListItem
            button
            onClick={() => {
              scrollToElement("header");
            }}
          >
            Event starts in
          </ListItem>

          <ListItem
            button
            onClick={() => {
              scrollToElement("info");
            }}
          >
            Venue Info
          </ListItem>

          <ListItem
            button
            onClick={() => {
              scrollToElement("highlights");
            }}
          >
            Highlights
          </ListItem>

          <ListItem
            button
            onClick={() => {
              scrollToElement("pricing");
            }}
          >
            Priceing
          </ListItem>

          <ListItem
            button
            onClick={() => {
              scrollToElement("location");
            }}
          >
            Location
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
