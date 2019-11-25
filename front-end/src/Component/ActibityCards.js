import React, { Component } from 'react'

import { Row , Container , Col , Nav , Dropdown , Button ,Form, CardGroup, Card} from 'react-bootstrap'



export default class ActibityCards extends Component {




  render() {


    return (


      <div>

 
      <CardGroup className ="cards2">
  <Card style = {{"width" : "18rem" }}>
    <Card.Img className ="imagy" variant="bottom" src={this.props.img} / >
    <Card.Body>
      <Card.Title>{this.props.name}</Card.Title>
      <Card.Text>
        {this.props.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{this.props.location}</small>
    </Card.Footer>
  </Card>
  
</CardGroup>

    


      </div>
    )
  }
}
