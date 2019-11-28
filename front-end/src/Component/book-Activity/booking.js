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

          this.setState({

              data:res.data

          })

    }).catch(err => {console.log(err);})

}



    render() {

console.log(this.state.data);
        return (

     <div>
  <NavBarcomponent />




            <img src={this.state.data.img} />
            <h1> {this.state.data.name} </h1>
            <h1> {this.state.data.description} </h1>



                </div>
        )
    }
}
