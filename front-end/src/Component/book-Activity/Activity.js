import React, { Component } from 'react'
import ActibityCards from './ActibityCards'
import { Navbar, FormControl, Row, Nav, Dropdown, Button, Form, Container, Col } from 'react-bootstrap'
import '../../App.css'
import data from '../../data'
import { Link } from 'react-router-dom';
import J1 from "../../img/J1.png"
import NavBarcomponent from '../home/NavBarcomponent'
import ActivityData from '../../activity'
import axios from 'axios'


export default class Activity extends Component {




state={
  data:[]
}


componentDidMount(){

  axios.get('http://localhost:6200/show/scrupture')
  .then(res => {
    console.log(res);
    this.setState({

      data:res.data


    })
  }).catch(err => {console.log(err)})



}



  render() {



    let activitycards = this.state.data.map(e => {
        console.log(e._id);

       return <ActibityCards name={e.name} dis={e.discription} img={e.img} id={e._id} />

     })



    return (
      <div>
        <NavBarcomponent />
        <Container>
          <div className="father----">
            <Row>
              <div className="Dropdownpos">
                <h2><strong>Activities Found</strong> </h2>
                <Col>
                  <Nav defaultActiveKey="/home" className="flex-column theme">

                    <div className="optionbuttonpos">
                      <Dropdown className="Dropmenue ">
                        <Dropdown.Toggle id="dropdown-basic" className="themebtn">
                          Book For</Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1" value="here" >Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2" value="here1">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3" value="here2">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown className="Dropmenue">
                        <Dropdown.Toggle id="dropdown-basic" className="themebtn">
                          Select theme</Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1" value="here" >Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2" value="here1">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3" value="here2">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      <Dropdown className="Dropmenue" >
                        <Dropdown.Toggle id="dropdown-basic" className="themebtn">Select date</Dropdown.Toggle>

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
                </Col>
              </div>
              <Col>

                        {activitycards}



          </Col>
            </Row>
          </div>

        </Container>
      </div>
    )
  }
}
