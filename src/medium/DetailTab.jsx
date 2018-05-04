import React from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";

export default class DetailTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overviewTab: true,
      menuTab: false,
      locationTab: false,
      reviewTab: false
    };
    this.toggleOverview = this.toggleOverview.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleLocation = this.toggleLocation.bind(this);
    this.toggleReview = this.toggleReview.bind(this);
  }

  toggleOverview() {
    this.setState(() => {
      return {
        overviewTab: true,
        menuTab: false,
        locationTab: false,
        reviewTab: false
      };
    });
  }

  toggleMenu() {
    this.setState(() => {
      return {
        menuTab: true,
        overviewTab: false,
        locationTab: false,
        reviewTab: false
      };
    });
  }

  toggleLocation() {
    this.setState(() => {
      return {
        locationTab: true,
        menuTab: false,
        overviewTab: false,
        reviewTab: false
      };
    });
  }

  toggleReview() {
    this.setState(() => {
      return {
        reviewTab: true,
        menuTab: false,
        locationTab: false,
        overviewTab: false
      };
    });
  }

  render() {
    return (
      <div>
        <br />
        <div className="center">
          <br />
          <Nav tabs>
            <div onClick={this.toggleOverview}>
              {this.state.overviewTab === true ? (
                <NavItem>
                  <NavLink href="#" active>
                    Overview
                  </NavLink>
                </NavItem>
              ) : (
                <div>
                  <NavItem>
                    <NavLink href="#">Overview</NavLink>
                  </NavItem>
                </div>
              )}
            </div>
            <div onClick={this.toggleMenu}>
              {this.state.menuTab === true ? (
                <NavItem>
                  <NavLink href="#" active>
                    Menu
                  </NavLink>
                </NavItem>
              ) : (
                <div>
                  <NavItem>
                    <NavLink href="#">Menu</NavLink>
                  </NavItem>
                </div>
              )}
            </div>
            <div onClick={this.toggleLocation}>
              {this.state.locationTab === true ? (
                <NavItem>
                  <NavLink href="#" active>
                    Location
                  </NavLink>
                </NavItem>
              ) : (
                <div>
                  <NavItem>
                    <NavLink href="#">Location</NavLink>
                  </NavItem>
                </div>
              )}
            </div>
            <div onClick={this.toggleReview}>
              {this.state.reviewTab === true ? (
                <NavItem>
                  <NavLink href="#" active>
                    Reviews
                  </NavLink>
                </NavItem>
              ) : (
                <div>
                  <NavItem>
                    <NavLink href="#">Reviews</NavLink>
                  </NavItem>
                </div>
              )}
            </div>
          </Nav>
        </div>
      </div>
    );
  }
}
