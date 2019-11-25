import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl, NavbarBrand } from 'react-bootstrap';
import P1 from "../img/P1.png"
import J1 from "../img/J1.png"
import Footer from './Footer'

export default class Home extends Component {
    render() {
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
        </Navbar>

        <Nav justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
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

        <Nav.Item >
        {/* <img className="img" src={P1} /> */}
        </Nav.Item>

</body>

            </div>
        )
    }
}
