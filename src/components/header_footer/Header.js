import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import DehazeIcon from "@material-ui/icons/Dehaze";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      draweOpen: false,
      headerShow: false
    };
  }

  toggleDrawer(value) {
    this.setState({
      draweOpen: value
    });
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true
      });
    } else {
      this.setState({
        headerShow: false
      });
    }
  };

  render() {
    return (
      <div>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
            boxShadow: "none",
            padding: "10px 0px"
          }}
        >
          <Toolbar>
            <div className="header_logo">
              <div className="font_righteous header_logo_venue">RADIOHEAD</div>
              <div className="header_logo_title">ON TOUR</div>
            </div>
            <IconButton
              aria-label="Menu"
              color="inherit"
              onClick={() => this.toggleDrawer(true)}
            >
              <DehazeIcon />
            </IconButton>
            <SideDrawer
              open={this.state.draweOpen}
              onClose={value => {
                this.toggleDrawer(value);
              }}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
