import React, { Component } from 'react'
import { Container, Navbar, Row, Col, Nav, Form, FormControl } from 'react-bootstrap';
import { DatePicker, startDate, setStartDate, useState } from 'react-date-picker';

export default class forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfParticipants: 1,
            theme: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const num = target.type === 'checkbox' ? target.checked : target.value;
            this.setState({
                numberOfParticipants: num
            });
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({theme: event.target.value});
      }
    render() {
        console.log(this.state.numberOfParticipants);
        console.log(this.state.theme);

        return (
            <Container >
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <label>
                            <Row>

                                <Col size={4}>
                                    <label><Col size={4}><p style={{ color: 'white' }}>Number of Participants</p></Col><input
                                        name="numberOfParticipants"
                                        type="number"
                                        value={this.state.numberOfParticipants}
                                        onChange={this.handleInputChange} />
                                    </label>
                                </Col>
                            </Row>
                        </label>
                        <br />
                        <label>
                            <Row>
                                <Col size={4}><p style={{ color: 'white' }}>Choose a theme</p></Col>
                                <Col size={4}>
                                    <select value={this.state.theme} onChange={this.handleChange}>
                                        <option value="Islmaic">Islmaic</option>
                                        <option value="Geomtric">Geomtric</option>
                                        <option value="Human Form">Human Form</option>
                                        <option value="Natural">Natural</option>
                                    </select>
                                </Col>
                            </Row>
                        </label>
                        <br />
                        <Row>
                            <Col size={4}>
                                <Form.Group controlId='DOJ'>
                                    <Form.Control
                                        type="date"
                                        name="DOJ"
                                        required
                                        placeholder="DOJ"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Col><input type="submit" value="Submit" /></Col>

                    </Row>
                </form>

            </Container>
        );
    }
}
