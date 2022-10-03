import React, { memo } from 'react'
import Dialog from '@mui/material/Dialog'
// import Slide from '@mui/material/Slide'
import { Button } from '@mui/material'
import * as Yup from 'yup'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik'
import logo from '../../Assets/Images/logo.png'

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction='down' ref={ref} {...props} />
// })

const AddTanents = ({ onClose, open, email, uuid }) => {
    const initialValues = {
        name: '',
        email,
        uuid,
        data: [
            {
                id: '',
                type: '',
                value: ''
            }
        ]
    }
    const validation = Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
            .min(4, 'Name is too short - should be 4 chars minimum'),
        data: Yup.array().of(
            Yup.object().shape({
                type: Yup.string().required('Title is required'),
                value: Yup.string().required('Title is required'),
                id: Yup.string().required('Title is required')
            })
        )
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
                    {({ values }) => (
                        <div className='container'>
                            <h2 className='text-left gray-color my-1'>Add New Tenants</h2>
                            <Form className='d-flex flex-column gap-05 mb-1'>
                                <div className='d-flex flex-column align-start gap-025'>
                                    <label className='form-label' htmlFor='name'>
                                        Name:
                                    </label>
                                    <Field
                                        type='text'
                                        name='name'
                                        id='name'
                                        placeholder='Name...'
                                        className={'input-white w-100'}
                                    />
                                    <ErrorMessage
                                        name='name'
                                        component='span'
                                        className='error'
                                    />
                                </div>
                                <div className='iframes-modal-form'>
                                    <h3 className='heading-1 text-left'>Iframes</h3>
                                    <FieldArray
                                        name='data'
                                        render={({ insert, remove, push }) => (
                                            <div className='iframes-modal-fields'>
                                                {values.data.length > 0 &&
                                                    values.data.map((field, index) => (
                                                        <div key={index}>
                                                            <div className='d-flex flex-column align-start gap-025'>
                                                                <label className='form-label white-color'>
                                                                    Title
                                                                </label>
                                                                <Field
                                                                    as='select'
                                                                    name={`data.${index}.id`}
                                                                    className={'select-white w-100 '}
                                                                >
                                                                    <option value=''>Select</option>
                                                                    <option value='attck'>Attack Surface</option>
                                                                    <option value='threat'>
                                                                        Threat Intelligence
                                                                    </option>
                                                                </Field>
                                                                <ErrorMessage
                                                                    name={`data.${index}.id`}
                                                                    component='span'
                                                                    className='error'
                                                                />
                                                            </div>
                                                            <div className='d-flex flex-column align-start gap-025'>
                                                                <label className='form-label white-color'>
                                                                    Type
                                                                </label>
                                                                <Field
                                                                    as='select'
                                                                    name={`data.${index}.type`}
                                                                    className={'select-white w-100'}
                                                                >
                                                                    <option value=''>Select</option>
                                                                    <option value='attck'>Url</option>
                                                                    <option value='threat'>Data Studio</option>
                                                                </Field>
                                                                <ErrorMessage
                                                                    name={`data.${index}.type`}
                                                                    component='span'
                                                                    className='error'
                                                                />
                                                            </div>
                                                            <div className='d-flex flex-column align-start gap-025'>
                                                                <label className='form-label white-color'>
                                                                    Value:
                                                                </label>
                                                                <Field
                                                                    type='text'
                                                                    name={`data.${index}.value`}
                                                                    className={'input-white w-100'}
                                                                    placeholder='Value...'
                                                                />
                                                                <ErrorMessage
                                                                    name={`data.${index}.value`}
                                                                    component='span'
                                                                    className='error'
                                                                />
                                                            </div>
                                                            <div className='d-flex justify-start gap-1'>
                                                                {values.data.length > 1 && (
                                                                    <Button
                                                                        className='my-1'
                                                                        style={{
                                                                            backgroundColor: 'gray',
                                                                            color: '#fff',
                                                                            width: 'fit-content'
                                                                        }}
                                                                        variant='contained'
                                                                        onClick={() => remove(index)}
                                                                    >
                                                                        Remove
                                                                    </Button>
                                                                )}

                                                                {index === values.data.length - 1 && (
                                                                    <Button
                                                                        className='my-1'
                                                                        style={{
                                                                            width: 'fit-content',
                                                                            color: '#fff'
                                                                        }}
                                                                        color='success'
                                                                        variant='contained'
                                                                        type='button'
                                                                        onClick={() =>
                                                                            push({
                                                                                id: '',
                                                                                type: '',
                                                                                value: ''
                                                                            })
                                                                        }
                                                                    >
                                                                        Add Iframe
                                                                    </Button>
                                                                )}
                                                            </div>
                                                            <hr />
                                                        </div>
                                                    ))}
                                            </div>
                                        )}
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

export default memo(AddTanents)
