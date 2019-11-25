import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl, Dropdown, ButtonToolbar, DropdownButton, Jumbotron, SplitButton, Row, Col } from 'react-bootstrap';
import J1 from "../../img/J1.png"
import Footer from './Footer'
import '../../App.css'
import data from '../../data'
import Image from './image'

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


                    <Navbar bg="light" variant="light">
                        <Navbar.Brand href="#home">
                            <img src={J1} style={{ width: 100, marginTop: -7 }} />
                        </Navbar.Brand>
                        <Nav className="mr-auto">
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                        </Form>

                        <ButtonToolbar>
                            {['Account'].map(
                                variant => (
                                    <DropdownButton style={{ marginRight: "75px" }}
                                        title={variant}
                                        variant={variant.toLowerCase()}
                                        id={`dropdown-variants-${variant}`}
                                        key={variant}
                                    >
                                        <Dropdown.Item eventKey="1">Shared Experiences</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Tours</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" > Scavenger Hunts </Dropdown.Item>
                                        <Dropdown.Item eventKey="2">WorkShops</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Communities</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Wishlist</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Log Out</Dropdown.Item>
                                    </DropdownButton>
                                ),
                            )}
                        </ButtonToolbar>
                    </Navbar>

                    <Nav justify variant="tabs" defaultActiveKey="/home" className="nav1" >
                        <Nav.Item >
                            <Nav.Link href="/home">Tours</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">WorkShops</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Scavenger Hunts</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Shared Experiences</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4">Join Community </Nav.Link>
                        </Nav.Item>
                    </Nav>
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

                    <Image image={this.state.images}/>
                </body>
                <Footer />
            </div>
        )
    }
}
