import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, FormControl, NavbarBrand } from 'react-bootstrap';

// import {BrowserRouter,Switch,Route}from "react-router-dom";
import Home from './Component/Home'
import Activity from './Component/Activity'


import Footer from './Component/home/Footer'


function App() {
  return (
  <div>



<Home/>


<Activity/>

<Footer />

    </div>
  );
}

export default App;
