import React, { Component } from 'react'
import NavBarcomponent from '../home/NavBarcomponent'
import { Navbar, FormControl, Row, Nav, Dropdown, Button, Form, Container } from 'react-bootstrap'
import '../../App.css'
import BookingData from '../../bookingAPI'
import BookingCard from './bookingCard'


export default class booking extends Component {
    render() {
        var bookingInfo = BookingData.map( data => {
            return <BookingCard data={data}/>
          })

          
        return (
        
     <div>
    <NavBarcomponent />
    <Container >
            <div className="righty">
             <h2><strong> WAITING FOR DATA TO BE FETCHED</strong> </h2>
{/*             
                {bookingInfo}        */}
                </div>
                    
                 </Container>
                          
                </div>
        )
    }
}
