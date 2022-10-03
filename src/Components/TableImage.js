import React from 'react'

const TableImage = ({ image, name }) => {
    return (
        <div>
            <img src={image} alt={name} className='table-img' />
        </div>
    )
}

export default TableImage
