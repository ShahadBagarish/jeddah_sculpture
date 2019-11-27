import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl, Dropdown, ButtonToolbar, DropdownButton, Jumbotron, SplitButton, Row, Col } from 'react-bootstrap';
import J1 from "../../img/J1.png"
import Footer from './Footer'
import '../../App.css'
import data from '../../data'
import Image from './image'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    state = {
        data: data,
        images: []
    }
    render() {
        for (let i = 0; i < 15; i++) {
            this.state.images.push(this.state.data[i].img)
        }
        // console.log(this.state.images.length);

        // const image = this.state.images.map(img => {
        //     return <Image image={img}></Image>
        // })
        return (

            <div className="App">

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
                <body>

                    <Jumbotron>
                        <h1>Welcome to Jeddah Scuplture Hub</h1>

                        <Jumbotron>
                            <Row className="row1" >
                                <Col size={4}>
                                    <ButtonToolbar>

                                        {['Numer of participants'].map(
                                            variant => (
                                                <SplitButton style={{ backgroundColor: 'White' }}
                                                    title={variant}
                                                    variant={variant.toLowerCase()}
                                                    id={`dropdown-split-variants-${variant}`}
                                                    key={variant}
                                                >

                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4"> - 4 +</Dropdown.Item>
                                                </SplitButton>
                                            ),
                                        )}
                                    </ButtonToolbar>
                                </Col>
                                <Col siz={4}>
                                    <ButtonToolbar>

                                        {['Chhose theme'].map(
                                            variant => (
                                                <SplitButton style={{ backgroundColor: 'White' }}
                                                    title={variant}
                                                    variant={variant.toLowerCase()}
                                                    id={`dropdown-split-variants-${variant}`}
                                                    key={variant}
                                                >

                                                    <Dropdown.Item eventKey="1">Islamic</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">Geomtric</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" >
                                                        Human Form
                                    </Dropdown.Item>

                                                    <Dropdown.Item eventKey="4">Natural</Dropdown.Item>
                                                </SplitButton>
                                            ),
                                        )}
                                    </ButtonToolbar>
                                </Col>
                                <Col size={4}>
                                    <ButtonToolbar >
                                        {['Select Date'].map(
                                            variant => (
                                                <SplitButton style={{ backgroundColor: 'White' }}
                                                    title={variant}
                                                    variant={variant.toLowerCase()}
                                                    id={`dropdown-split-variants-${variant}`}
                                                    key={variant}
                                                >


                                                </SplitButton>
                                            ),
                                        )}
                                    </ButtonToolbar>
                                </Col>

                                <Col size={4}>
                                    <Button variant="Search" style={{ backgroundColor: 'Yellow' }}>Search</Button>
                                </Col>


                            </Row>
                        </Jumbotron>
                    </Jumbotron>
                    <h1><center>Most Pouplar Activity</center></h1>

                    <Image image={this.state.images} />
                </body>
                <Footer />
            </div>
        )
    }
}
