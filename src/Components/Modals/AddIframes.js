import React, { memo } from 'react'
import Dialog from '@mui/material/Dialog'
// import Slide from '@mui/material/Slide'
import { Button } from '@mui/material'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import logo from '../../Assets/Images/logo.png'

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction='down' ref={ref} {...props} />
// })

const AddIframes = ({ onClose, open }) => {
    const initialValues = {
        id: '',
        type: '',
        value: ''
    }
    const validation = Yup.object().shape({
        id: Yup.string().required('Title is required'),
        type: Yup.string().required('Type is required'),
        value: Yup.string().required('Value is required')
    })



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
                    }}
                >
                    {(formik) => {
                        return (
                            <div className='container'>
                                <h2 className='text-left gray-color my-1'>Add New Iframes</h2>
                                <Form className='d-flex flex-column gap-05 mb-1'>
                                    <div className='d-flex flex-column align-start gap-025'>
                                        <label className='form-label white-color'>Title</label>
                                        <Field
                                            as='select'
                                            name={`id`}
                                            className={'select-white w-100 '}
                                        >
                                            <option value=''>Select</option>
                                            <option value='attck'>Attack Surface</option>
                                            <option value='threat'>Threat Intelligence</option>
                                        </Field>
                                        <ErrorMessage
                                            name={`id`}
                                            component='span'
                                            className='error'
                                        />
                                    </div>
                                    <div className='d-flex flex-column align-start gap-025'>
                                        <label className='form-label white-color'>Type</label>
                                        <Field
                                            as='select'
                                            name={`type`}
                                            className={'select-white w-100'}
                                        >
                                            <option value=''>Select</option>
                                            <option value='attck'>Url</option>
                                            <option value='threat'>Data Studio</option>
                                        </Field>
                                        <ErrorMessage
                                            name={`type`}
                                            component='span'
                                            className='error'
                                        />
                                    </div>
                                    <div className='d-flex flex-column align-start gap-05'>
                                        <label className='form-label'>Value:</label>
                                        <Field
                                            name='value'
                                            placeholder='Value...'
                                            className={'input-white w-100'}
                                        />
                                        <ErrorMessage
                                            name='value'
                                            component='span'
                                            className='error'
                                        />
                                    </div>
                                    <Button
                                        type='submit'
                                        className={'submit-btn my-1'}
                                        color='error'
                                        variant='contained'
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        )
                    }}
                </Formik>
            </div>
        </Dialog>
    )
}

export default memo(AddIframes)
