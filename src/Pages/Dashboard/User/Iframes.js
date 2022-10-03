import React, { useCallback, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { users } from '../../../Raw/UserData'
import TableActions from '../../../Components/TableActions'
import ActiveChip from '../../../Components/ActiveChip'
import PageTitle from '../../../Components/PageTitle'
import { Button, Container } from '@mui/material'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import AddIframes from '../../../Components/Modals/AddIframes'
import DeleteIframeModal from '../../../Components/Modals/DeleteIframeModal'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'


const Iframes = () => {

    const status = ({ row: { active } }) => {
        return <ActiveChip active={active} />
    }

    const [open, setOpen] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)

    const initialValue = {
        name: ''
    }

    const validation = Yup.object().shape({
        name: Yup.string().required('Name is required')
    })

    const onClose = () => setOpen(false)
    const onOpen = () => setOpen(true)

    const onDeleteClose = () => setOpenDelete(false)
    const onDeleteOpen = useCallback(() => {
        setOpenDelete(true)
    }, [])

    const renderActions = (params) => {
        return (
            <TableActions
                value={params}
                onDeleteOpen={onDeleteOpen}
                onOpenEditModal={onOpen}
            />
        )
    }

    const columns = [
        {
            field: 'name',
            headerName: 'NAME',
            align: 'left',
            flex: 1
        },
        {
            field: 'value',
            headerName: 'Value',
            align: 'left',
            editable: false,
            flex: 1
        },
        {
            field: 'active',
            headerName: 'Status',
            editable: false,
            renderCell: status
        },
        {
            field: '*',
            headerName: 'Actions',
            editable: false,
            renderCell: renderActions
        }
    ]

    return (
        <div>
            <AddIframes onClose={onClose} open={open} />
            <DeleteIframeModal onClose={onDeleteClose} open={openDelete} />
            <Container maxWidth={'1100px'}>
                <div className='form-section'>
                    <h3 className='heading-1'>Tanent</h3>
                    <Formik
                        initialValues={initialValue}
                        validationSchema={validation}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        {() => (
                            <Form className='d-flex gap-1 align-center'>
                                <div className='form-fields'>
                                    <div className='form-input'>
                                        <label className='form-label'>Name</label>
                                        <Field
                                            className='input-white'
                                            placeholder='Name...'
                                            name='name'
                                        // disabled
                                        />
                                        <ErrorMessage
                                            name='name'
                                            component='span'
                                            className='error'
                                        />
                                    </div>
                                    <Button
                                        type='submit'
                                        className={'submit-btn mt-1'}
                                        color='error'
                                        variant='outlined'
                                    >
                                        Update
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <PageTitle page={'Iframe'}>
                    <Button color='error' variant='contained' onClick={onOpen}>
                        <PersonAddAlt1Icon />
                        <p>Add New Iframes</p>
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
                />
            </Container>
        </div>
    )
}

export default Iframes

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
