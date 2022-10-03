import React, { memo } from 'react'
import Dialog from '@mui/material/Dialog'
// import Slide from '@mui/material/Slide'
import { Button } from '@mui/material'
// import logo from '../../Assets/Images/logo.png'

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction='down' ref={ref} {...props} />
// })

const DeleteIframe = ({ onClose, open }) => {
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
                <h2>{'Delete'}</h2>
            </div>
            <div className='p-1 d-flex flex-column text-center gap-1'>
                <h4 className='text-left'>Are you sure you want to delete iframe?</h4>
                <div className='d-flex gap-05 justify-end'>
                    <Button variant='outlined' color='info' onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant='outlined' color='error' onClick={onClose}>
                        Delete
                    </Button>
                </div>
            </div>
        </Dialog>
    )
}

export default memo(DeleteIframe)
