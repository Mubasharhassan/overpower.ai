import React, { memo } from 'react'
import { IconButton } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'

const TableActions = ({ onDeleteOpen, onOpenEditModal }) => {
    return (
        <div className='d-flex'>
            <IconButton color='success' component='label' onClick={onOpenEditModal}>
                <Edit />
            </IconButton>
            <IconButton color='error' component='label' onClick={onDeleteOpen}>
                <Delete />
            </IconButton>
        </div>
    )
}

export default memo(TableActions)
