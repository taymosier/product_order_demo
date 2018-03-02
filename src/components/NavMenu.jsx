import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

export class NavMenu extends Component {
  render(){
    return(
      <Navbar className="nav navbar-default">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Taylor Mosier</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav >
          {/* Had to manually set the li items to flex-direction row in index.css */}
          {/* It appeared default was set to vertical */}
          <NavItem >Skills</NavItem>
          <NavItem >About Me</NavItem>
          <NavItem >Projects</NavItem>
          <NavItem >Contact Me</NavItem>
        </Nav>
      </Navbar>
    )
  }
}
