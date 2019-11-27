import React, { Component } from 'react'
import Touractivity from './Touractivity'
import { Navbar, FormControl, Row, Nav, Dropdown, Button, Form, Container } from 'react-bootstrap'
import '../../App.css'
import data from '../../data'
import { Link } from 'react-router-dom';
import J1 from "../../img/J1.png"
import NavBarcomponent from '../home/NavBarcomponent'
import ActivityData from '../../activity'

export default class Tours extends Component {
  render() {
    return (
      
        <div>
          <NavBarcomponent />
          <Container>
          <div className="righty">
            <h2><strong> Tours Found</strong> </h2>

            <Touractivity />

          </div>
          </Container>

        </div>
    )
  }
}
