import React, { Component } from 'react'
import ActibityCards from './ActibityCards'
import { Navbar, FormControl, Row, Nav, Dropdown, Button, Form } from 'react-bootstrap'
import '../../App.css'
import data from '../../data'
import { Link } from 'react-router-dom';
import J1 from "../../img/J1.png"

export default class Activity extends Component {
  state = {
    data: data
  }
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
        <div className="father">
          <div className="lefty">
            <div className="Dropdownpos">
              <h1>Tour</h1>
              <Nav defaultActiveKey="/home" className="flex-column theme">

                <div className="optionbuttonpos">
                  <Dropdown className="Dropmenue ">
                    <Dropdown.Toggle id="dropdown-basic" className="themebtn">
                      Book For
  </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1" value="here" >Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2" value="here1">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" value="here2">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="Dropmenue">
                    <Dropdown.Toggle id="dropdown-basic" className="themebtn">
                      Select theme
  </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1" value="here" >Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2" value="here1">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" value="here2">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown className="Dropmenue" >
                    <Dropdown.Toggle id="dropdown-basic" className="themebtn">
                      Select date
  </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1" value="here" >Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2" value="here1">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" value="here2">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button className="Searchthemebtn"> Search </Button>
                </div>

              </Nav>



              <Nav defaultActiveKey="/home" className="flex-column filter">

                <h4 className="filtertext" >Filter</h4>



                <Form>


                  <div className="filterItem">
                    <Form.Group controlId="formBasicCheckbox">
                      <p> Location</p>
                      <Form.Check type="checkbox" label="Albalad" />
                      <Form.Check type="checkbox" label="Kornich" />
                      <Form.Check type="checkbox" label="Alhamra" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                      <p> Activity</p>
                      <Form.Check type="checkbox" label="Scavanger Hunts" />
                      <Form.Check type="checkbox" label="Tours" />
                      <Form.Check type="checkbox" label="Workshops" />
                    </Form.Group>

                  </div>

                </Form>

              </Nav>

            </div>
          </div>

          {/* <div className="righty">
            {this.state.data.map(s =>
              <ActibityCards name={s.name} description={s.description} location={s.location} img={s.img} />
            )}

          </div> */}

        </div>
      </div>
    )
  }
}

