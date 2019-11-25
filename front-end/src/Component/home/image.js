import React, { Component } from 'react'
import { Row, Col, Container,Card } from 'react-bootstrap';
import '../../App.css'


export default class image extends Component {
    render() {
        console.log(this.props.image)
        return (
           <Container>
              <Card> 
                  <Row>
                  
                    <Col>
                        <img src={this.props.image[0]}  className="C1" />
                    </Col>
                    <Col>
                      
                            <Row>
                                <Col>
                                    <img src={this.props.image[1]}  className="C2"  />
                                </Col><Col>
                                    <img src={this.props.image[2]}  className="C3"   />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                              

                                    <img src={this.props.image[3]} className="C4"  />
                                </Col><Col>
                                    <img src={this.props.image[4]} className="C5"  />
                                </Col>
                            </Row>
                    
                    </Col>
                   
                </Row>
                </Card>
                <Card>
                <Row>
                    <Col>
                      
                            <Row>
                                <Col>
                                    <img src={this.props.image[5]} className="C6"  />
                                </Col><Col>
                                    <img src={this.props.image[6]} className="C7"  />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src={this.props.image[7]} className="C8"  />
                                </Col><Col>
                                    <img src={this.props.image[8]} className="C9" />
                                </Col>
                            </Row>
                
                    </Col>
                    <Col>
                        <img src={this.props.image[9]} className="C10"  />
                    </Col>
                </Row>
                </Card>
                <Card>
                <Row>
                    <Col>
                        <img src={this.props.image[10]} className="C11"  />
                    </Col>
                    <Col>
               
                            <Row>
                                <Col>
                                    <img src={this.props.image[11]} className="C12"  />
                                </Col><Col>
                                    <img src={this.props.image[12]} className="C13" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src={this.props.image[13]} className="C14" />
                                </Col><Col>
                                    <img src={this.props.image[14]} className="C15"  />
                                </Col>
                            </Row>
                    
                    </Col>
                </Row>
                </Card>
                </Container>
    
        )}}
