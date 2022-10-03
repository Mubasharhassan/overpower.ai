import React from 'react'

const PageTitle = ({ children, name, page }) => {
    return (
        <div className='page-title'>
            <h1>{page}</h1>
            <div>{children}</div>
        </div>
    )
}

export default PageTitle
