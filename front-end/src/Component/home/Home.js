import React, { Component } from 'react'
import {
    Button, Navbar, Nav, Form, FormControl, Dropdown, ButtonToolbar,
    DropdownButton, Jumbotron, SplitButton, Row, Col, Image
} from 'react-bootstrap';
import Footer from './Footer'
import '../../App.css'
import data from '../../data'
import Imagecomponent from '../home/image'
import { Link } from 'react-router-dom';
import Profile from "../../img/Profile.png"
import { getToken, logout, setToken } from '../services/auth'
import axios from 'axios'
import swal from 'sweetalert';
import Login from './login'
import NavBarcomponent from './NavBarcomponent'
//save header
let header = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getToken()}`
    }
}

export default class Home extends Component {
    state = {
        data: data,
        images: []
    }
    render() {

        for (let i = 0; i < 15; i++) {
            this.state.images.push(this.state.data[i].img)
        }
        return (
            <div className="App">
             <NavBarcomponent logout={this.props.logout} />
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

                    <Imagecomponent image={this.state.images} />
                </body>
                <Footer />
            </div>
        )
    }
}
