import React, { Component } from 'react'
import Workshopactivity from './Workshopctivity'
import { Navbar, FormControl, Row, Nav, Dropdown, Button, Form, Container } from 'react-bootstrap'
import '../../App.css'
import data from '../../data'
import { Link } from 'react-router-dom';
import J1 from "../../img/J1.png"
import WorkshopData from '../../workshop'
import NavBarcomponent from '../home/NavBarcomponent'

export default class WorkShops extends Component {
    render() {
        var workshopInfo = WorkshopData.map( data => {
            return <Workshopactivity data={data}/>
          })
        return (
            <div>
              <NavBarcomponent />
              <Container >
              <div className="righty">
                <h2><strong> Workshops Found</strong> </h2>
          
                      {workshopInfo}
              </div>
    
              </Container>
          
            </div>
       
        )
    }
}
