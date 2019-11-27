import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import vision from "../../img/vision.png"
import '../../App.css'


export default class Footer extends Component {
    render() {
        return (
            <div>

                <footer className="footer1">
                    <Container>
                        <Row>
                            <Col size={3}>
                                <div className="aboutUs">
                                    <ul>
                                        <h2>About us</h2>
                                        <ol> <a href=''>Brif</a> </ol>
                                        <ol> <a href=''>FAQ</a> </ol>
                                        <ol> <a href=''>Help</a> </ol>
                                    </ul>
                                </div>
                            </Col>


                            <Col size={3} >
                                <div className="Contact">
                                    <ul>
                                        <h2>Contact us</h2>
                                        <ol><a href=''>  920004315</a></ol>
                                        <ol><a href=''>info@jsh.sa</a></ol>
                                    </ul>
                                </div>
                            </Col>

                            <Col size={3}>
                                <div className="Folow">
                                    <h2>Follow us </h2>


                                </div>
                            </Col>

                            <Col size={3}>

                                <img src={vision} alt='' style={{ width: 100 }} />
                                <h5>All right resived to JSH 2019</h5>
                            </Col>
                        </Row>
                    </Container>
                </footer>

            </div>
        )
    }
}
