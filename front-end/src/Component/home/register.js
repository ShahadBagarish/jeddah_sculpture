import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { withRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';
import axios from 'axios'
import swal from 'sweetalert';

 class register extends Component {
    state = {
        data: {},
        message: ''
    }
    register(fname, lname, username, email, password) {
        axios.post("http://localhost:6200/auth/register",
            {
                fname: this.state.data.firstName,
                lname: this.state.data.lastName,
                username: this.state.data.username,
                email: this.state.data.email,
                password: this.state.data.confirmPassword
            })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }
    addDataToState(data) {
        this.setState({ data: data, message: "Your message has been Sent" })
    }
    render() {
        console.log(this.state)
        return (
            <Container>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        username: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    validationSchema={
                        Yup.object().shape({
                            firstName: Yup.string()
                                .required('First Name is required'),
                            lastName: Yup.string()
                                .required('Last Name is required'),
                            username: Yup.string()
                                .required('Username is required'),
                            email: Yup.string()
                                .email('Email is invalid')
                                .required('Email is required'),
                            password: Yup.string()
                                .min(6, 'Password must be at least 6 characters')
                                .required('Password is required'),
                            confirmPassword: Yup.string()
                                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                                .required('Confirm Password is required')
                        })
                    }
                    onSubmit={fields => {
                        swal({
                            title: "Registered successfully",
                            icon: "success",
                            button: "ok",
                        });
                        this.addDataToState(fields)
                        this.register()
                        this.props.history.push('/login')
                    }}
                    render={({ errors, status, touched }) => (
                        <Form>
                            <h1>Register Form</h1>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">UserName</label>
                                <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                                <ErrorMessage name="username" component="div" className="invalid-feedback" />
                            </div>
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
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mr-2">Register</button>
                                <button type="reset" className="btn btn-secondary">Reset</button>
                            </div>
                        </Form>
                    )}
                />
                <h4>  {this.state.message}</h4>

            </Container>
        )
    }
}

export default withRouter(register)
