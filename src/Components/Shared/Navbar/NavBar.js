import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const NavBar = () => {
   return (
      <div>
         <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/home">
               Tax Adviser
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto px-5">
                  <Nav.Link as={Link} to="/home">
                     Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/common">
                     Dashboard
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addReview">
                     Reviews
                  </Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                     <NavDropdown.Item as={Link} to="#action/3.1">
                        Action
                     </NavDropdown.Item>
                     <NavDropdown.Item as={Link} to="#action/3.2">
                        Another action
                     </NavDropdown.Item>
                     <NavDropdown.Item as={Link} to="#action/3.3">
                        Something
                     </NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item as={Link} to="#action/3.4">
                        Separated link
                     </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/login">
                     Login
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </div>
   );
};

export default NavBar;
