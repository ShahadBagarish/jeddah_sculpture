import React, { Component } from 'react'
import { Row, Col, Container,Card } from 'react-bootstrap';
import '../../App.css'


export default class image extends Component {
  
    render() {
        return (
           <Container>
              <Card> 
                  <Row>
                  
                    <Col>
                        <img src={this.props.image[0]} alt='' className="C1" />
                    </Col>
                    <Col>
                      
                            <Row>
                                <Col>
                                    <img src={this.props.image[1]} alt='' className="C2"  />
                                </Col><Col>
                                    <img src={this.props.image[2]} alt='' className="C3"   />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                              

                                    <img src={this.props.image[3]} alt='' className="C4"  />
                                </Col><Col>
                                    <img src={this.props.image[4]}alt='' className="C5"  />
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
                                    <img src={this.props.image[5]} alt='' className="C6"  />
                                </Col><Col>
                                    <img src={this.props.image[6]}  alt='' className="C7"  />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src={this.props.image[7]} alt='' className="C8"  />
                                </Col><Col>
                                    <img src={this.props.image[8]} alt='' className="C9" />
                                </Col>
                            </Row>
                
                    </Col>
                    <Col>
                        <img src={this.props.image[9]} alt='' className="C10"  />
                    </Col>
                </Row>
                </Card>
                <Card>
                <Row>
                    <Col>
                        <img src={this.props.image[10]} alt='' className="C11"  />
                    </Col>
                    <Col>
               
                            <Row>
                                <Col>
                                    <img src={this.props.image[11]}alt=''  className="C12"  />
                                </Col><Col>
                                    <img src={this.props.image[12]} alt='' className="C13" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src={this.props.image[13]} alt='' className="C14" />
                                </Col><Col>
                                    <img src={this.props.image[14]} alt='' className="C15"  />
                                </Col>
                            </Row>
                    
                    </Col>
                </Row>
                </Card>
                </Container>
    
        )}}
