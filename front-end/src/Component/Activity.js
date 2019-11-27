import React, { Component } from 'react'
import ActibityCards from './ActibityCards'
import { Row , Container , Col , Nav , Dropdown , Button ,Form} from 'react-bootstrap'
import axios from 'axios'
import '../App.css'
import { ActivitiesFound } from './book-Activity/ActivitiesFound'








export default class Activity extends Component {


  state={
    data: []
  }

  componentDidMount() {
    axios.get(`http://localhost:6200/show/scrupture`)
      .then(res => {
        const data = res.data;
        this.setState({ data});
      })
  }
  render() {

     

    return (


      <div className = "father">


 

<div className = "lefty"> 


<div className="Dropdownpos">
<h1>Tour</h1>
<Nav defaultActiveKey="/home" className="flex-column theme">


<div className="optionbuttonpos">
<Dropdown className="Dropmenue ">
  <Dropdown.Toggle  id="dropdown-basic" className="themebtn">
    Book For
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" value="here" >Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2" value="here1">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3" value="here2">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown className="Dropmenue">
  <Dropdown.Toggle  id="dropdown-basic" className="themebtn">
    Select theme
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" value="here" >Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2" value="here1">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3" value="here2">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown className="Dropmenue" >
  <Dropdown.Toggle  id="dropdown-basic" className="themebtn">
    Select date
  </Dropdown.Toggle>
 
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" value="here" >Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2" value="here1">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3" value="here2">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Button className="Searchthemebtn"> Search </Button>
</div>

</Nav>



<Nav defaultActiveKey="/home" className="flex-column filter">

      <h4 className="filtertext" >Filter</h4>



      <Form>


   <div className="filterItem">
  <Form.Group controlId="formBasicCheckbox">
  <p> Location</p>
    <Form.Check type="checkbox" label="Albalad" />
    <Form.Check type="checkbox" label="Kornich" />
    <Form.Check type="checkbox" label="Alhamra" />
  </Form.Group>

  <Form.Group controlId="formBasicCheckbox">
  <p> Activity</p>
    <Form.Check type="checkbox" label="Scavanger Hunts" />
    <Form.Check type="checkbox" label="Tours" />
    <Form.Check type="checkbox" label="Workshops" />
  </Form.Group>

</div>

</Form>

</Nav>

</div>
</div>

<<<<<<< HEAD
<div className = "righty">
        {this.state.data.map(s=>
  <ActibityCards name = {s.name} description = {s.description} location = {s.location}  img = {s.img} />
)}

=======
 <div className = "righty">

   <h1> 3 Activities Found </h1>

   <ActivitiesFound />
  
       
>>>>>>> 75e308a6570ffed36b33d6e107902af02c17d67a
        </div>

      </div>
    )
  }
}

