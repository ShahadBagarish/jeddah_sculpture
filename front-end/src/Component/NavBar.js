import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl, Dropdown, ButtonToolbar, DropdownButton, Jumbotron, SplitButton, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import J1 from "../img/J1.png"
export default class NavBar extends Component {
    render() {
        return (
            <div>
                     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/home">
                            <img src={J1} style={{ width: 100, marginTop: -7 }} className="J1" />
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
            </div>
        )
    }
}
