import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { users } from '../../../Raw/UserData'
import ActiveChip from '../../../Components/ActiveChip'
import PageTitle from '../../../Components/PageTitle'
import { Button } from '@mui/material'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import { useLocation, useNavigate } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Container } from '@mui/system'
import AddTanents from '../../../Components/Modals/AddTanants'



const Tenants = () => {

    const status = ({ row: { active } }) => {
        return <ActiveChip active={active} />
    }

    const userInfoValidation = Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
            .min(4, 'Name is too short - should be 4 chars minimum'),
        email: Yup.string().email().required('Email is required'),
        phonenumber: Yup.string()
            .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                'Phone number is not valid'
            )
            .required('Phone Number is required')
    })

    const passwordValidation = Yup.object().shape({
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .required('Confirm password is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })


    const {
        state: { email }
    } = useLocation()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const userData = {
        name: '',
        email: email,
        phonenumber: ''
    }
    const passwordData = {
        password: '',
        confirmPassword: ''
    }
    const columns = [
        {
            field: 'name',
            headerName: 'NAME',
            align: 'left',
            flex: 1
        },
        {
            field: 'active',
            headerName: 'Status',
            editable: false,
            renderCell: status
        }
    ]

    const onClose = () => setOpen(false)
    const onOpen = () => setOpen(true)

    return (
        <div className='py-1'>
            <AddTanents onClose={onClose} open={open} />
            <Container maxWidth={'1100px'}>
                <div className='form-section'>
                    <h3 className='heading-1'>User Info</h3>
                    <Formik
                        initialValues={userData}
                        validationSchema={userInfoValidation}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        {() => (
                            <Form>
                                <div className='form-fields'>
                                    <div className='form-input'>
                                        <label className='form-label'>Email</label>
                                        <Field
                                            className='input-white'
                                            placeholder='Email...'
                                            name='email'
                                            disabled
                                        />
                                        <ErrorMessage
                                            name='Email'
                                            component='span'
                                            className='error'
                                        />
                                    </div>
                                    <div className='form-input'>
                                        <label className='form-label'>Name</label>
                                        <Field
                                            className='input-white'
                                            name='name'
                                            placeholder='Name...'
                                        />
                                        <ErrorMessage
                                            name='name'
                                            component='span'
                                            className='error'
                                        />
                                    </div>
                                    <div className='form-input'>
                                        <label className='form-label'>Name</label>
                                        <Field
                                            className='input-white'
                                            placeholder='Phone...'
                                            name='phonenumber'
                                        />
                                        <ErrorMessage
                                            name='phonenumber'
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

                    <hr className='hr' />
                    <h3 className='heading-1'>User Password</h3>
                    <Formik
                        initialValues={passwordData}
                        validationSchema={passwordValidation}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        {() => (
                            <Form>
                                <div className='form-fields'>
                                    <div className='form-input'>
                                        <label className='form-label'>Password</label>
                                        <Field
                                            className='input-white'
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
                                    <div className='form-input'>
                                        <label className='form-label'>Confirm Password</label>
                                        <Field
                                            className='input-white'
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

                    <hr className='hr' />
                    <div>
                        <Button
                            type='submit'
                            className={'submit-btn my-1'}
                            color='error'
                            variant='contained'
                        >
                            Activate
                        </Button>
                    </div>
                </div>
                <PageTitle page={'Tenants'}>
                    <Button color='error' variant='contained' onClick={onOpen}>
                        <PersonAddAlt1Icon />
                        <p>Add New Tenant</p>
                    </Button>
                </PageTitle>
                <DataGrid
                    rows={users}
                    columns={columns}
                    headerHeight={50}
                    rowHeight={40}
                    sx={styles}
                    disableDensitySelector
                    hideFooterPagination={false}
                    autoHeight={true}
                    loading={!users}
                    onRowClick={({ id }) => navigate(`/dashboard/iframes/${id}`)}
                />
            </Container>
        </div>
    )
}

export default Tenants

const styles = {
    '& ': {
        backgroundColor: '#000000',
        color: '#d9d9d9'
        // border: 'none'
    },
    '& .MuiDataGrid-columnHeaders': {
        backgroundColor: '#434343',
        color: '#fff',
        fontWeight: 'bold'
    },
    '& .MuiDataGrid-columnSeparator': {
        display: 'none'
    },
    '& .css-ptiqhd-MuiSvgIcon-root ': {
        display: 'flex'
    },
    '& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle': {
        fontWeight: 'bold',
        fontSize: '1rem'
    },
    '& .css-1pans1z-MuiDataGrid-virtualScroller::-webkit-scrollbar': {
        display: 'none'
    },
    '& .css-1b34haf-MuiDataGrid-footerContainer': {
        // display: 'none'
        color: '#fff',
        backgroundColor: 'red'
    },
    '& .MuiDataGrid-footerContainer': {
        display: 'none'
    },
    '& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar': {
        color: 'white'
    },
    '& .MuiDataGrid-row': {
        fontSize: '0.9rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    '& .MuiDataGrid-cell,.css-okt5j6-MuiDataGrid-columnHeaders': {
        borderBottom: `1px solid #434343`
    }
}
