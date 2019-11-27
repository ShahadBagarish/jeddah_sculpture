import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl, Dropdown, ButtonToolbar, DropdownButton, Jumbotron, SplitButton, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar'
import { getToken, setToken, logout } from '../Component/services/auth'

let header = {
    headers :{
      "Content-Type" : "application/json",
      "Authorization" : `Bearer ${getToken()}`
    }
  }
export default class userAccount extends Component {

    state = {
        data: {},
        message: ''
    }
    updatepassword(fname, lname, username, email, password) {
        // axios.post(`http://localhost:6200/users/changepassowrd/${}`,
        axios.get("http://localhost:6200/users", header)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <NavBar />
                <div class="container1">
                    <div class="navbar navbar-default">
                        <div class="navbar-inner">
                            <div class="container">
                                <ul class="nav navbar-nav">
                                    {/* <li class="active"><a href="#">Home</a></li> */}
                                    <li><a href="#">Profile</a></li>
                                    <li><a href="#">Booked Activity</a></li>
                                    <li><a href="#">Password</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}