import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Container } from 'react-bootstrap';
import axios from 'axios'
import swal from 'sweetalert';
import { getToken, setToken, logout } from '../services/auth'

let header = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getToken()}`
  }
}
 export default class login extends Component {


  state = {
    data: {},
    user: "",
    message: '',
    isAuthenticated: false,
  }

  login(email, password) {
    console.log(this.state.data.email)
    console.log(this.state.data.password)

    axios.post("http://localhost:6200/auth/login",
      {
        email: this.state.data.email,
        password: this.state.data.password
      })
      .then((response) => {
        console.log(response);
        if (response.data.token) {
          setToken(response.data.token)

            if (response.data.user.isAdmin == true) {

               window.location.replace('http://localhost:6200/admin')
               console.log('Im an admin');
            }

          let data = { ...this.state }
          data.user = response.data.user
          data.isAuthenticated = true
          data.hasError = false

          this.setState(data)
          swal({
            title: "Login successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 2500

          }).then(
            function () {
              window.location.href = '/home$auth';
            })

        }

      })
      .catch(err => {
        console.log(err)
        let data = { ...this.state }
        data.hasError = true
        this.setState(data)
      });
  }
  addDataToState(data) {
    this.setState({ data: data, message: "Your successfully login" })
  }
  render() {
    // const showLogin = (!this.state.isAuthenticated) ? <Login change={this.changeHandler} login={this.loginHandler} /> : null
    return (
      <Container>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Email is invalid')
              .required('Email is required'),
            password: Yup.string()
              .min(2, 'Password must be at least 6 characters')
              .required('Password is required')
          })}
          onSubmit={fields => {
            console.log(fields)
            this.addDataToState(fields)
            this.login()
          }}
          render={({ errors, status, touched }) => (
            <Form>
              <h1>Login Form</h1>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2">Login</button>
              </div>
            </Form>
          )}
        />
      </Container>
    )
  }
}

/*
export default class login extends Component {

  state = {
    formValues: {
      email: "",
      password: ""
    },
    formErrors: {
      email: "",
      password: ""
    },
    formValidity: {
      email: false,
      password: false
    },
    isSubmitting: false
  };

  handleChange = ({ target }) => {
    const { formValues } = this.state;
    formValues[target.name] = target.value;
    this.setState({ formValues });
    this.handleValidation(target);
  };

  handleValidation = target => {
    const { name, value } = target;
    const fieldValidationErrors = this.state.formErrors;
    const validity = this.state.formValidity;
    const isEmail = name === "email";
    const isPassword = name === "password";
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    validity[name] = value.length > 0;
    fieldValidationErrors[name] = validity[name]
      ? ""
      : `${name} is required and cannot be empty`;

    if (validity[name]) {
      if (isEmail) {
        validity[name] = emailTest.test(value);
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be a valid email address`;
      }
      if (isPassword) {
        validity[name] = value.length >= 3;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be 3 characters minimum`;
      }
    }

    this.setState({
      formErrors: fieldValidationErrors,
      formValidity: validity
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isSubmitting: true });
    const { formValues, formValidity } = this.state;
    if (Object.values(formValidity).every(Boolean)) {
      // alert("Form is validated! Submitting the form...");
      this.setState({ isSubmitting: false });
    } else {
      for (let key in formValues) {
        let target = {
          name: key,
          value: formValues[key]
        };
        this.handleValidation(target);
      }
      this.setState({ isSubmitting: false });
    }
  };

  render() {
    const { formValues, formErrors, isSubmitting } = this.state;

    return (
      <div className="container">

        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Login Form</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${
                    formErrors.email ? "is-invalid" : ""
                    }`}
                  placeholder="Enter email"
                  onChange={this.handleChange}
                  value={formValues.email}
                />
                <div className="invalid-feedback">{formErrors.email}</div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className={`form-control ${
                    formErrors.password ? "is-invalid" : ""
                    }`}
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={formValues.password}
                />
                <div className="invalid-feedback">{formErrors.password}</div>
              </div>
              <Button onClick={this.props.login} color="primary" size="lg" block>
              {isSubmitting ? "Please wait..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    );

  }
}
*/
