

import React, { Component } from 'react'
import J1 from "../../img/J1.png"
import {
    Button, Navbar, Nav, Form, FormControl, Dropdown, ButtonToolbar,
    DropdownButton, Jumbotron, SplitButton, Row, Col, Image
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Profile from "../../img/Profile.png"

export default class NavBarcomponent extends Component {
    state = {
        activeItem: 'home'
    }
    logout = () => {
        localStorage.removeItem('apiKey')
    }

    render() {
        const { activeItem } = this.state
        console.log(localStorage.apiKey);
        
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
                                {

                                }
                                {(!localStorage.apiKey) ? <ButtonToolbar>
                                    {[<Image src={Profile} alt="profile logo" rounded
                                        style={{ width: 30, height: 30, overflow: 'hidden' }} />].map(
                                            variant => (
                                                <DropdownButton style={{ marginRight: "75px" }}
                                                    title={variant}
                                                    key={variant}
                                                >
                                                    <Dropdown.Item as={Link} to='/login' eventKey="1">Login</Dropdown.Item>
                                                    <Dropdown.Item as={Link} to='/register' eventKey="2">SignUp</Dropdown.Item>
                                                </DropdownButton>
                                            ),
                                        )}
                                </ButtonToolbar>
                                    :
                                    <ButtonToolbar>
                                        {[<Image src={Profile} alt="profile logo" rounded
                                            style={{ width: 30, height: 30, overflow: 'hidden' }} />].map(
                                                variant => (
                                                    <DropdownButton style={{ marginRight: "75px" }}
                                                        title={variant}
                                                        key={variant}>
                                                        <Dropdown.Item eventKey="1">Shared Experiences</Dropdown.Item>
                                                        <Dropdown.Item eventKey="2">Tours</Dropdown.Item>
                                                        <Dropdown.Item eventKey="3" > Scavenger Hunts </Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">WorkShops</Dropdown.Item>
                                                        <Dropdown.Item eventKey="5">Communities</Dropdown.Item>
                                                        <Dropdown.Item eventKey="6">Wishlist</Dropdown.Item>
                                                        <Dropdown.Divider />
                                                        <Dropdown.Item onClick={this.logout}eventKey="7" > Log Out</Dropdown.Item>
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
