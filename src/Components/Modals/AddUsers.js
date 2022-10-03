import React, { memo } from 'react'
import Dialog from '@mui/material/Dialog'
// import Slide from '@mui/material/Slide'
import { Button } from '@mui/material'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import logo from '../../Assets/Images/logo.png'
import { useNavigate } from 'react-router-dom'

// Click on Add New User and open a modal for new user


const AddUsers = ({ onClose, open }) => {
    // const Transition = React.forwardRef(function Transition(props, ref) {
    //     return <Slide direction='down' ref={ref} {...props} />
    // })
    const initialValues = {
        name: '',
        email: '',
        password: '',
        phonenumber: ''
    }
    const validation = Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
            .min(4, 'Name is too short - should be 4 chars minimum'),
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().required('Password is required'),
        phonenumber: Yup.string()
            .matches(
                /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
                'Phone number is not valid'
            )
            .required('Phone Number is required')
    })

    const navigate = useNavigate()

    return (
        <Dialog
            open={open}
            // TransitionComponent={Transition}
            onClose={onClose}
            PaperProps={{
                sx: { position: 'fixed', top: 30, m: 0, minWidth: '600px' }
            }}
        >
            <button className='close-modal-btn' onClick={onClose}>
                <svg
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    width='23'
                    height='23'
                    viewBox='0 0 23 23'
                    fill='currentColor'
                >
                    <path d='M13.4 12l10.3 10.3-1.4 1.4L12 13.4 1.7 23.7.3 22.3 10.6 12 .3 1.7 1.7.3 12 10.6 22.3.3l1.4 1.4L13.4 12z'></path>
                </svg>
            </button>
            <div className='title-logo'>
                <img src={logo} alt={logo} />
                <h2>{'Overpower Admin'}</h2>
            </div>
            <div className='px-2 d-flex flex-column text-center gap-1'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validation}
                    onSubmit={(values) => {
                        console.log(values)
                        navigate('/dashboard/12', { state: { email: values.email } })
                    }}
                >
                    {(formik) => (
                        <div className='container'>
                            <h2 className='text-left gray-color my-1'>Add New User</h2>
                            <Form className='d-flex flex-column gap-05 mb-1'>
                                <div className='d-flex flex-column align-start gap-025'>
                                    <label className='form-label' htmlFor='name'>
                                        Name:
                                    </label>
                                    <Field
                                        type='text'
                                        name='name'
                                        placeholder='Name...'
                                        id='name'
                                        className={'input-white w-100'}
                                    />
                                    <ErrorMessage
                                        name='name'
                                        component='span'
                                        className='error'
                                    />
                                </div>
                                <div className='d-flex flex-column align-start gap-05'>
                                    <label className='form-label' htmlFor='email'>
                                        Email:
                                    </label>
                                    <Field
                                        type='email'
                                        name='email'
                                        placeholder='Email...'
                                        id='email'
                                        className={'input-white w-100'}
                                    />
                                    <ErrorMessage
                                        name='email'
                                        component='span'
                                        className='error'
                                    />
                                </div>
                                <div className='d-flex flex-column align-start gap-05'>
                                    <label className='form-label' htmlFor='email'>
                                        Password:
                                    </label>
                                    <Field
                                        type='password'
                                        name='password'
                                        placeholder='******'
                                        id='password'
                                        className={'input-white w-100'}
                                    />
                                    <ErrorMessage
                                        name='password'
                                        component='span'
                                        className='error'
                                    />
                                </div>
                                <div className='d-flex flex-column align-start gap-05'>
                                    <label className='form-label' htmlFor='email'>
                                        Phone Number:
                                    </label>
                                    <Field
                                        type='text'
                                        name='phonenumber'
                                        placeholder='Phone Number...'
                                        id='phonenumber'
                                        className={'input-white w-100'}
                                    />
                                    <ErrorMessage
                                        name='phonenumber'
                                        component='span'
                                        className='error'
                                    />
                                </div>
                                <Button
                                    type='submit'
                                    className={'submit-btn  my-1'}
                                    color='error'
                                    variant='contained'
                                >
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </Dialog>
    )
}

export default memo(AddUsers)
