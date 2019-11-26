import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl, Dropdown, ButtonToolbar, DropdownButton, Jumbotron, SplitButton, Row, Col } from 'react-bootstrap';
import J1 from "../../img/J1.png"
import Footer from './Footer'
import '../../App.css'
import data from '../../data'
import Image from './image'
import { Link } from 'react-router-dom';
import P1 from '../../img/P1.png'
import { DatePicker, startDate, setStartDate, useState } from 'react-date-picker';
// import { Dropdown } from 'semantic-ui-react'
export default class Home extends Component {



    state = {
        data: data,
        images: [],
        theme: "",

    }



    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.eventKey
        })
        console.log(this.state);

    }
    render() {
        for (let i = 0; i < 15; i++) {
            this.state.images.push(this.state.data[i].img)
        }
        var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
        numbers = numbers.map(ele => {
            return <Dropdown.Item href="#/action-2">{ele}</Dropdown.Item>
        })


        // console.log(this.state.images.length);

        // const image = this.state.images.map(img => {
        //     return <Image image={img}></Image>
        // })
        return (

            <div className="App">

                <header>
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

                    <Jumbotron className="P1">


                        <h1>Welcome to Jeddah Scuplture Hub</h1>

                        <Jumbotron style={{ backgroundColor: 'black ', height: '10px', marginTop: '40px' }}>
                            <Row  >
                                <Col size={4}>

                                    <select className="browser-default custom-select">
                                        <option>Number of Participants</option>
                                        <option value="1"> 1</option>
                                        <option value="2"> 2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>

                                </Col>
                                <Col siz={4}>

                                    <select className="browser-default ">
                                        <option>Choose a theme</option>
                                        <option value="1"> Islmaic</option>
                                        <option value="2"> Geomtric</option>
                                        <option value="3">Human Form</option>
                                        <option value="4">Natural</option>

                                    </select>

                                </Col>
                                <Col size={4}>
                                    <Form.Group controlId='DOJ'>
                                    
                                        <Form.Control
                                            type="date"
                                            name="DOJ"
                                            required
                                            placeholder="DOJ" 
                                        
                                           />
                                    </Form.Group>
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
