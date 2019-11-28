import React, { Component } from 'react'
import NavBarcomponent from '../home/NavBarcomponent'
import { Navbar, FormControl, Row, Nav, Dropdown, Button, Form, Container } from 'react-bootstrap'
import '../../App.css'
import BookingData from '../../bookingAPI'
import BookingCard from './bookingCard'
import axios from 'axios'
import SweetAlert from 'sweetalert2-react';

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
               

            <Container>
            <div class="card mb-3" style={{ "max-width": "540px;" }}>
         <div class="row no-gutters">
           <div class="col-md-4">
             <img src={this.state.data.img} class="card-img"  />
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h4 class="card-title"><strong>{this.state.data.name} </strong></h4>
               <p class="card-text"><strong><em>{this.state.data.description}</em></strong></p>
               <p class="card-text"><small class="text-muted"><span class="fa fa-star checked" style={{ "color": "orange;" }}>4.5 {"\u2B50"}</span></small></p>
             {/* <Button >Confirm Booking Now!</Button> */}
             <button onClick={() => this.setState({ show: true })}>Confirm Booking Now!</button>
                     <SweetAlert
                              show={this.state.show}
                              title="Thank You!"
                               text="You Are All Set! "
                                  onConfirm={() => this.setState({ show: false })} />
    
             
             </div>
           </div>
         </div>

       </div>

       <div>
     
    </div>



            </Container>


     
                </div>
        )
    }
}
