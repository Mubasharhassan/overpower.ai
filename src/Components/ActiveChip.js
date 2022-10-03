import React from 'react'
import { Chip } from '@mui/material'

const ActiveChip = ({ active }) => {
    return (
        <Chip
            label={active ? 'Active' : 'In Active'}
            color={active ? 'success' : 'error'}
            size='small'
        />
    )
}

export default ActiveChip
