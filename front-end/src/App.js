import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, NavbarBrand, Button, Navbar, Nav, FormControl } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
// import { getToken, setToken, logout } from './services/auth'
import { element } from 'prop-types';




//component
import register from './Component/home/register';
import Login from './Component/home/login';
import home from './Component/home/Home';
import homeAuth from "./Component/home-auth/HomeAuth"
import Activity from './Component/book-Activity/Activity'
import NavBar from './Component/NavBar';

import WorkShops from './Component/book-Activity/WorkShops'
import Tours from './Component/book-Activity/Tours'
import userAccount from './Component/userAccount'

export default class App extends Component {
  state = {
    activity: [],
    user: "",
    errorMsg: '',
    isAuthenticated: false,
    hasError: false
  }

  // logout = () => {
  //   logout()
  //   let data = { ...this.state }
  //   data.isAuthenticated = false
  //   data.user = ""
  //   data.email = ""
  //   data.password = ""
  //   data.games = []

  //   this.setState(data)
  // }

  render() {
    const showLogin = (!this.state.isAuthenticated) ? <Login change={this.changeHandler} login={this.loginHandler} /> : null
    // show logout button
    const Logout = (this.state.isAuthenticated) ? <Button onClick={this.logout}>Logout</Button> : null

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/*home */}
            <Route path='/register' component={register} />
            <Route path='/home$auth' component={homeAuth} />
            <Route path='/register' component={register} />
            <Route path='/login' render={() => <Login showLogin={showLogin} Logout={Logout} username={this.state.user.username}
              change={this.changeHandler} login={this.loginHandler} />} />
            <Route path='/home' component={home} />
            {/* home nav route ---------- */}
            <Route path='/tours' component={Tours} />
            <Route path='/workshops' component={WorkShops} />
            <Route path='/scavengerhunts' component={Activity} />
            <Route path='/sharedexperiences' />
            <Route path='/joincommunity'/>
            <Route path='/Profile' component={userAccount} />

            <Route path='/' component={home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

