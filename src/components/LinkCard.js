import React from 'react'

function LinkCard({ link }) {
    return (
        <div className='card'>
            <div className='card-header'>
                {link.name}
            </div>
            <div className='card-body'>
                <a href={link.url}>{link.url}</a>
                <p>{link.description}</p>
            </div>
            <div className='card-footer'>
                <button className="btn btn-warning mr-2">
                    Hide
                </button>
                
                <button className="btn btn-danger" >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default LinkCard
