import React, { Component } from 'react'
import Touractivity from './Touractivity'
import { Navbar, FormControl, Row, Nav, Dropdown, Button, Form } from 'react-bootstrap'
import '../../App.css'
import data from '../../data'
import { Link } from 'react-router-dom';
import J1 from "../../img/J1.png"

export default class Tours extends Component {
    render() {
        return (
            <div>
            <header>
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/home">
                  <img src={J1} style={{ width: 100, marginTop: -7 }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                  </Nav>
                  <Nav>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Nav.Link as={Link} to='/register' style={{ color: 'white', 'fontSize': '25px' }}>SignUp</Nav.Link>
                    <Nav.Link eventKey={2} as={Link} to='/login' style={{ color: 'white', 'fontSize': '25px' }}>Login</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Row className="justify-content-md-center">
                  <Navbar expand="lg" bg="light" variant="light">
                    <Nav>
                      <Nav.Link as={Link} to='/tours' ><p style={{ color: 'black', 'fontSize': '30px' }}>Tours |</p></Nav.Link>
                      <Nav.Link as={Link} to='/workShops'><p style={{ color: 'black', 'fontSize': '30px' }}>WorkShops |</p></Nav.Link>
                      <Nav.Link as={Link} to='/scavengerhunts' ><p style={{ color: 'black', 'fontSize': '30px' }}>Scavenger Hunts |</p></Nav.Link>
                      <Nav.Link as={Link} to='/sharedexperiences'><p style={{ color: 'black', 'fontSize': '30px' }}>Shared Experiences |</p></Nav.Link>
                      <Nav.Link as={Link} to='/joincommunity' ><p style={{ color: 'black', 'fontSize': '30px' }}>Join Community </p></Nav.Link>
                    </Nav>
                  </Navbar>
                </Row>
            </header>
           
    
              <div className="righty">
                <h2><strong>3 Tours Found</strong> </h2>
          
                      <Touractivity /> 
              </div>
    
            </div>
       
        )
    }
}
