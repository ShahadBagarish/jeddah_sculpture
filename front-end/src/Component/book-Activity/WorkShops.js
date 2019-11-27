import React, { Component } from 'react'
import Workshopactivity from './Workshopctivity'
import { Navbar, FormControl, Row, Nav, Dropdown, Button, Form } from 'react-bootstrap'
import '../../App.css'
import data from '../../data'
import { Link } from 'react-router-dom';
import J1 from "../../img/J1.png"
import NavBarcomponent from '../home/NavBarcomponent'

export default class WorkShops extends Component {
    render() {
        return (
            <div>
              <NavBarcomponent />
            <div className="righty">
                <h2><strong> Workshops Found</strong> </h2>
          
                      <Workshopactivity /> 
              </div>
    
            </div>
       
        )
    }
}
