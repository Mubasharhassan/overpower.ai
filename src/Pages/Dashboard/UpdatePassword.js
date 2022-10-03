import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { Box, Button, Container } from '@mui/material'
import logo from '../../Assets/Images/Overpower-Vertical-Web-150px.png'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'



export default function UpdatePassword() {

    const passwordValidation = Yup.object().shape({
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .required('Confirm password is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

    // const navigate = useNavigate()

    const passwordData = {
        password: '',
        confirmPassword: ''
    }

    return (
        <div className='login'>
            <Container component='main' maxWidth='xs'>
                <Box className='box'>
                    <img src={logo} alt={logo} />
                    <h1 className='heading-1'>Update Password</h1>
                    <Formik
                        initialValues={passwordData}
                        validationSchema={passwordValidation}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        {() => (
                            <Form className='d-flex flex-column w-100'>
                                <div className='d-flex flex-column gap-1'>
                                    <div className='d-flex flex-column '>
                                        <label className='form-label'>Password</label>
                                        <Field
                                            className='input-white w-100'
                                            type='password'
                                            placeholder='Password...'
                                            name='password'
                                        />
                                        <ErrorMessage
                                            name='password'
                                            component='span'
                                            className='error'
                                        />
                                    </div>
                                    <div className='d-flex flex-column '>
                                        <label className='form-label'>Confirm Password</label>
                                        <Field
                                            className='input-white w-100'
                                            placeholder='Confirm Password...'
                                            type='password'
                                            name='confirmPassword'
                                        />
                                        <ErrorMessage
                                            name='confirmPassword'
                                            component='span'
                                            className='error'
                                        />
                                    </div>
                                </div>
                                <Button
                                    type='submit'
                                    className={'submit-btn my-1'}
                                    color='error'
                                    variant='contained'
                                >
                                    Update
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Container>
        </div>
    )
}
