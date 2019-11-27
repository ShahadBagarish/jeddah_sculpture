import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, NavbarBrand, Button, Navbar, Nav, FormControl } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { getToken, setToken, logout } from './Component/services/auth'
import { element } from 'prop-types';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';


//component
import register from './Component/home/register';
import Login from './Component/home/login';
import Home from './Component/home/Home';
import Activity from './Component/book-Activity/Activity'
import WorkShops from './Component/book-Activity/WorkShops'
import Tours from './Component/book-Activity/Tours'
import ScavengerHunts from './Component/book-Activity/ScavengerHunts'

export default class App extends Component {
  state = {
    datauser: {},
    activity: [],
    user: "",
    errorMsg: '',
    isAuthenticated: false,
    hasError: false
  }


  login = (email, password) => {
    axios.post("http://localhost:6200/auth/login",
      {
        email: this.state.datauser.email,
        password: this.state.datauser.password
      })
      .then((response) => {
        console.log(response);
        if (response.data.token) {
          setToken(response.data.token)
          // let data = { ...this.state }
          // data.user = response.data.user
          // data.isAuthenticated = true
          // data.hasError = false

          this.setState({ isAuthenticated: true })
          swal({
            title: "Login successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 2500
          }).then(
            function () {
              window.location.href = '/home';
            })
        }

      })
      .catch(err => {
        console.log(err)
      });
  }
  changeHandler = (data) => {
    this.setState({ datauser: data })
  }
  logout = () =>{
    logout()
    let data = {...this.state}
    //reset everything on logout
    data.isAuthenticated = false
    data.datauser = ""
    data.activity = []

    this.setState(data)
  }
  render() {
console.log(this.state.datauser);


    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/*home */}
            <Route path='/register' component={register} />
            <Route path='/login' render={() => <Login login={this.login} change={this.changeHandler} />} />
            <Route path='/home' render={() => <Home isAuthenticated={this.state.isAuthenticated} logout={this.logout}/>} />
            {/* home nav route ---------- */}
            <Route path='/tours' component={Tours} />
            <Route path='/workshops' component={WorkShops} />
            <Route path='/scavengerhunts' component={ScavengerHunts} />
            <Route path='/sharedexperiences' />
            <Route path='/joincommunity'/>
            <Route path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

