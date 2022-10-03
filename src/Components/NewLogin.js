import React from "react";
import { Formik } from "formik";
import logo from '../Assets/Images/Overpower-Vertical-Web-150px.png'
import { Button } from '@mui/material'

// import "./Form.scss";



const validate = (values) => {

    const initialValues = {
        email: "",
        password: ""
    };

    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
        errors.email = "Invalid Email";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Your password is Too Short";
    }

    return errors;
};

const submitForm = (values) => {
    console.log(values);
};

const Form = () => {
    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={submitForm}
        >
            {(formik) => {
                const {
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    handleBlur,
                    isValid,
                    dirty
                } = formik;
                return (
                    <div className='login'>
                        <div component='main' maxWidth='xs'>
                            <div className='box'>
                                <img src={logo} alt="add " />


                                <form onSubmit={handleSubmit} className='form'>
                                    <h1>Sign in to continue</h1>
                                    <div
                                        className="login-input"
                                    >
                                        {/* <label htmlFor="email">Email</label> */}
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.email && touched.email ? "input-error" : null
                                            }
                                        />
                                        {/* {errors.email && touched.email && (
                                            <span className="error">{errors.email}</span>
                                        )} */}
                                    </div>
                                    {errors.email && touched.email && (<p className=''>{errors.email}</p>)}

                                    <div
                                        className="login-input"
                                    >
                                        {/* <label htmlFor="password">Password</label> */}
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Enter your password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.password && touched.password ?
                                                    "error"
                                                    : null
                                            }
                                        />
                                        {/* {errors.password && touched.password && (
                                            <span
                                                className="error"
                                            >{errors.password}</span>
                                        )} */}
                                    </div>
                                    {errors.password && touched.password && (<p className=''>{errors.password}</p>)}

                                    <Button
                                        type="submit"
                                        className={!(dirty && isValid) ? "disabled-btn" : ""}
                                        disabled={!(dirty && isValid)}
                                    >
                                        Sign In
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
};

export default Form;
