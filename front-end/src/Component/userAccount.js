import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl, Dropdown, ButtonToolbar, DropdownButton, Jumbotron, SplitButton, Row, Col, Container, Overlay } from 'react-bootstrap';
import J1 from "../img/J1.png"
import data from '../data'
import { Link } from 'react-router-dom';
import P1 from '../img/P1.png'
import { DatePicker, startDate, setStartDate, useState } from 'react-date-picker';
import NavBar from './NavBar'
import P7 from '../img/P7.png'
import Footer from './home/Footer'
// import { Dropdown } from 'semantic-ui-react'

export default class userAccount extends Component {
  render() {
    return (
      <div>

        <NavBar />

        <div class="container1">
          <div class="navbar navbar-default">
            <div class="navbar-inner">
              <div class="container">
                <ul class="nav navbar-nav">
                  {/* <li class="active"><a href="#">Home</a></li> */}
                  {/* <li><Link >Profile</Link></li>
               <li><Link >Booked Activity</Link></li>
               <li><Link >Password</Link></li> */}
                  <img src={P7} className="P7" />


                </ul>
              </div>
            </div>
          </div>
        </div>

        <Container>
          <Jumbotron style={{ backgroundColor: "white" }}>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>


              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>



              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>


              <Button variant="primary" type="submit" >
                Save
  </Button>
            </Form>
          </Jumbotron>
        </Container>

        <Container>

          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Current Password</Form.Label>
              <Form.Control type="password" placeholder=" Current Password" />
            </Form.Group>



            <Form.Group controlId="formBasicPassword">
              <Form.Label> New Password</Form.Label>
              <Form.Control type="password" placeholder=" New Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>  Verify New Password</Form.Label>
              <Form.Control type="password" placeholder=" Verify" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
  </Button>
          </Form>

        </Container>



        <Container>

          <Form.Row>
            <Form.Group as={Col} >
              <Form.Label>Booked Activities </Form.Label>
              <Form.Control type="input " placeholder=" Your Activity" />
            </Form.Group>


          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} >
              <Form.Label>Theme of the Activity </Form.Label>
              <Form.Control type="input " placeholder=" Theme of the  Activity" />
            </Form.Group>


          </Form.Row>

        </Container>

        <Footer />
      </div>
    )
  }
}

