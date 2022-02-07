import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, FormControl, Form, Button, } from 'react-bootstrap';
import logo from '../../../static/img/lg.png';
import './Navfile.css';

function Navfile() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <div>

      <Navbar className={colorChange ? 'navbar colorChange' : 'navbar'} fixed="top" expand="sm">
        <Container fluid>
          <Link to="/bmw">
            <Navbar.Brand >
              <img src={logo} alt="logos" className="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mt-1">
              <Link className="nav-link" to="/bmw">Home</Link>
              <Link className="nav-link" to="/series">Series</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
            <Form className="d-flex ml-auto mysearchcard">
              <FormControl className="mysearchinside"
                type="search" placeholder="Search"
                aria-label="Search" />
              <Button className="mysearchbtn">Go</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}
export default Navfile
