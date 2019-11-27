import React, { Component } from 'react'
import {Link} from 'react-router-dom'


import { Row, Container, Col, Nav, Dropdown, Button, Form, CardGroup, Card } from 'react-bootstrap'



export default class ActibityCards extends Component {

  render() {
    return (
   
      <div>
      {/* Card #1: Activity 1*/}
     <div class="card mb-3" style={{"max-width": "540px;"}}>
     <div class="row no-gutters">
<div class="col-md-4">
<img src="https://live.staticflickr.com/2919/14718463154_4e389725a7_b.jpg" class="card-img" alt="Albalad in Jeddah"/>
</div>
<div class="col-md-8">
<div class="card-body">
 <h4 class="card-title"><strong>Tours</strong></h4>
 <p class="card-text"><strong><em>A wonderful journey to see and enjoy all geometric sculptures in Albalad historic area.</em></strong></p>
 <p class="card-text"><small class="text-muted"><span class="fa fa-star checked" style={{"color": "orange;"}}>4.5 {"\u2B50"}</span></small></p>
<Button variant="link" as ={Link} to ='/tours'>book me now!</Button>


 {/*button to be added */}
</div>
</div>
</div>
</div>
     

 {/* Card #2: Activity 2*/}
 <div class="card mb-3" style={{"max-width": "540px;"}}>
     <div class="row no-gutters">
<div class="col-md-4">
<img src="http://www.sculpturesofjeddah.com/assets/images/18/victor-vasarely-balance-in-the-air__large.jpg" class="card-img" alt="Geometric Sculpture" />
</div>
<div class="col-md-8">
<div class="card-body">
 <h4 class="card-title"><strong>Scavanger Hunt</strong></h4>
 <p class="card-text"><strong><em>A wonderful journey to see and enjoy all geometric Scavanger Hunt along the beach area.</em></strong></p>
 <p class="card-text"><small class="text-muted"> <span class="fa fa-star checked" style={{"color": "orange;"}}>4.5 {"\u2B50"}</span></small></p>
 <Button variant="link" as ={Link} to ='/scavengerhunt'>book me now!</Button>
</div>
</div>
</div>
</div>

 {/* Card #3: Activity 3*/}

 <div class="card mb-3" style={{"max-width": "540px;"}}>
     <div class="row no-gutters">
<div class="col-md-4">
<img src="http://www.sculpturesofjeddah.com/assets/images/48/jeddahartjameel__large.gif" class="card-img" alt="Alhamra Geometric Sculpture"/>
</div>
<div class="col-md-8">
<div class="card-body">
 <h4 class="card-title"><strong>Workshops</strong></h4>
 <p class="card-text"><strong><em></em></strong>A wonderful to see and enjoy all geometric sculptures in Alhamra District through a fantastic tour.</p>
 <p class="card-text"><small class="text-muted"><span class="fa fa-star checked" style={{"color": "orange;"}}>4.5 {"\u2B50"}</span></small></p>
 <Button variant="link" as ={Link} to ='/workshops'>book me now!</Button>
</div>
</div>
</div>
</div>
     
 </div>
    )
  }
}



