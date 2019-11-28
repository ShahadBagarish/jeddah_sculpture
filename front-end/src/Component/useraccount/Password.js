import React, { Component } from 'react'
import userAccount from '../userAccount'
export default class Password extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>
            </div>
        )
    }
}