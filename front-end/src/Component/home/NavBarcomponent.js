

import React, { Component } from 'react'
import J1 from "../../img/J1.png"
import {
    Button, Navbar, Nav, Form, FormControl, Dropdown, ButtonToolbar,
    DropdownButton, Jumbotron, SplitButton, Row, Col, Image
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Profile from "../../img/Profile.png"
import { getToken, setToken, logout } from '../services/auth'
import axios from 'axios'

export default class NavBarcomponent extends Component {
    state = {
        activeItem: 'home'
    }


    render() {
        console.log((localStorage.apiKey));

        console.log((!localStorage.apiKey));

        return (
            <div>
                <header>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/home">
                            <img src={J1} style={{ width: 180, height: 130, marginTop: -7 }} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                            </Nav>
                            <Nav>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                {(!localStorage.apiKey) ? <ButtonToolbar>
                                    <Nav>
                                        <Nav.Link as={Link} to='/register' style={{ color: 'white', 'fontSize': '15px' }}>SignUp</Nav.Link>
                                        <Nav.Link eventKey={2} as={Link} to='/login' style={{ color: 'white', 'fontSize': '15px' }}>Login</Nav.Link>
                                    </Nav>
                                </ButtonToolbar>
                                    :
                                    <ButtonToolbar>
                                        {[<Image src={Profile} alt="profile logo" rounded
                                            style={{ width: 30, height: 30, overflow: 'hidden' }} />].map(
                                                variant => (
                                                    <DropdownButton style={{ marginRight: "75px" }}
                                                        title={variant}
                                                        key={variant}>
                                                        <Dropdown.Item as={Link} to='/home' eventKey="1">Home</Dropdown.Item>
                                                        <Dropdown.Item eventKey="2" href='/profile' >Acount</Dropdown.Item>
                                                        <Dropdown.Item eventKey="5">Joined Communities</Dropdown.Item>
                                                        <Dropdown.Item eventKey="6">Shared Experiences </Dropdown.Item>
                                                        <Dropdown.Divider />
                                                        <Dropdown.Item onClick={this.props.logout} eventKey="7" > Log Out</Dropdown.Item>
                                                    </DropdownButton>
                                                ),
                                            )}
                                    </ButtonToolbar>}}

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
            </div>
        )
    }
}
