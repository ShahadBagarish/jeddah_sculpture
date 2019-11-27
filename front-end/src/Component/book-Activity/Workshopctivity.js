import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import { Row, Container, Col, Nav, Dropdown, Button, Form, CardGroup, Card } from 'react-bootstrap'



export default class Workshopactivity extends Component {

  render() {
    return (
      <div>

      <div class="card mb-3" style={{ "max-width": "540px;" }}>
         <div class="row no-gutters">
           <div class="col-md-4">
             <img src={this.props.data.img} class="card-img"  />
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h4 class="card-title"><strong>{this.props.data.title}</strong></h4>
               <p class="card-text"><strong><em>{this.props.data.text}</em></strong></p>
               <p class="card-text"><small class="text-muted"><span class="fa fa-star checked" style={{ "color": "orange;" }}>4.5 {"\u2B50"}</span></small></p>
               <Button variant="link" as={Link} to={`/workshops/booking/${this.props.data.id}`}>book me now!</Button>




             
             </div>
           </div>
         </div>
       </div>



 </div>
       
    )
  }
}



