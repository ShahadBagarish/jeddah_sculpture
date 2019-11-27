import React, { Component } from 'react'
 import Touractivity from './Touractivity'
 import { Navbar, FormControl, Row, Nav, Dropdown, Button, Form, Container } from 'react-bootstrap'
 import '../../App.css'
 import data from '../../data'
 import { Link } from 'react-router-dom';
 import J1 from "../../img/J1.png"
 import TourData from '../../tours'
 import NavBarcomponent from '../home/NavBarcomponent'


 export default class Tours extends Component {
     render() {
        var tourInfo = TourData.map( data => {
            return <Touractivity data={data}/>
          })
         return (
             <div>
                    
              <NavBarcomponent />
              <Container>
              <div className="righty">
           
                {tourInfo}
        </div>
              </Container>
            
            </div>

         )
     }
 }