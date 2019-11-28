import React, { Component } from 'react'
import NavBarcomponent from '../home/NavBarcomponent'
import { Navbar, FormControl, Row, Nav, Dropdown, Button, Form, Container } from 'react-bootstrap'
import '../../App.css'
import BookingData from '../../bookingAPI'
import BookingCard from './bookingCard'
import axios from 'axios'


export default class booking extends Component {

state={
  data:[]
}


componentDidMount(){

  axios.get(`http://localhost:6200/sculpture/find/${this.props.match.params.id}`)
    .then(res => {

          // this,setState({

          // })

    }).catch(err => {console.log(err);})

}



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
