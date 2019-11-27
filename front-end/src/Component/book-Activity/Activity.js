import React, { Component } from 'react'
import ActibityCards from './ActibityCards'
import { Navbar, FormControl, Row, Nav, Dropdown, Button, Form } from 'react-bootstrap'
import '../../App.css'
import data from '../../data'
import { Link } from 'react-router-dom';
import J1 from "../../img/J1.png"
import NavBarcomponent from '../home/NavBarcomponent'
export default class Activity extends Component {


  render() {
    return (
      <div>
        <NavBarcomponent />

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

          <div className="righty">
            <h2><strong>3 Activities Found</strong> </h2>

            <ActibityCards /> )}
          </div>

        </div>
      </div>
    )
  }
}

