import React, { Component } from 'react'
import userAccount from '../userAccount'
import NavBarcomponent from '../home/NavBarcomponent'
import { Form, NavbarBrand, Button, Navbar, Nav, FormControl } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

export default class Password extends Component {
    state = {
        email: '',
        password: ''
    }
    
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        console.log('subnittied');
        var body = {
            email: this.state.email,
            password: this.state.password
        }
        axios({
            method: 'put',
            url: "http://localhost:6200/users/changepassowrd",
            data: body
            })
            .then(function (response) {
                console.log(response);
                swal({
                    title: "Login successfully",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2500
                  }).then(
                    function () {
                      window.location.href = '/login';
                    })
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

        // axios.put("http://localhost:6200/users/changepassowrd"),{
        //     email: this.state.email,
        //     password: this.state.password
        // }
        // .then((response) => {
        //     console.log(response);
        // }, (error) => {
        //     console.log(error);
        // });

      }
    handleChangeemail = (event) => {
        this.setState({ email: event.target.value })
    }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    render() {
        

        return (
            <div>
                <NavBarcomponent />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.handleChangeemail} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}