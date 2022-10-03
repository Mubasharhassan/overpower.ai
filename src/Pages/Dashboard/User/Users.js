import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { users } from '../../../Raw/UserData'
import ActiveChip from '../../../Components/ActiveChip'
import PageTitle from '../../../Components/PageTitle'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/system'
import { Button } from '@mui/material'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import AddUsers from '../../../Components/Modals/AddUsers'



const Users = () => {

    const status = ({ row: { active } }) => {
        return <ActiveChip active={active} />
    }

    const [open, setOpen] = useState(false)
    const columns = [
        {
            field: 'name',
            headerName: 'NAME',
            align: 'left',
            flex: 1,
            // headerAlign: 'center',
            width: 60

        },
        {
            field: 'email',
            headerName: 'Email',
            align: 'left',
            editable: false,
            flex: 2,
            // headerAlign: 'center',
            width: 250
        },
        {
            field: 'active',
            headerName: 'Status',
            editable: false,
            // flex: 1,
            renderCell: status
        }
    ]

    const onClose = () => setOpen(false)
    const onOpen = () => setOpen(true)

    const navigate = useNavigate()

    return (
        <div className='py-1'>
            <AddUsers onClose={onClose} open={open} />
            <Container maxWidth={'1100px'}>
                <PageTitle page={'Users'}>
                    <Button color='error' variant='outlined' onClick={onOpen}>
                        <PersonAddAlt1Icon />
                        <p>Add New User</p>
                    </Button>
                    <Button
                        style={{
                            borderRadius: 5,
                            backgroundColor: "#21b6ae",
                            padding: "8px 16px",
                            // fontSize: "10px"
                        }}
                        variant="contained"
                        onClick={onOpen}
                    >
                        <PersonAddAlt1Icon />
                        <p>Add New User</p>
                    </Button>
                </PageTitle>
                {/* <h1 className='heading-1 mb-1'>Users</h1> */}
                <DataGrid
                    rows={users}
                    columns={columns}
                    headerHeight={60}
                    rowHeight={40}
                    sx={styles}
                    disableDensitySelector
                    hideFooterPagination={false}
                    autoHeight={true}
                    loading={!users}
                    onRowClick={({ row: { id, email } }) =>
                        navigate(`/dashboard/${id}`, { state: { email } })
                    }
                />
            </Container>
        </div>
    )
}

export default Users

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
        textOverflow: 'ellipsis',
        // textAlign: 'center',
    },
    '& .MuiDataGrid-cell,.css-okt5j6-MuiDataGrid-columnHeaders': {
        borderBottom: `1px solid #434343`
    }
}
