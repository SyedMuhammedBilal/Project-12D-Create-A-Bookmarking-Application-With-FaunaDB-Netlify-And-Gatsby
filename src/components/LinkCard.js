import React from 'react'
import './Card.css'

function LinkCard({ link, refreshLinks }) {

    const archiveLink = async () => {
        link.archived = true;
        try {
            await fetch('/.netlify/functions/updateLink', {
                method: 'PUT',
                body: JSON.stringify(link),
            });
            refreshLinks();
        } catch (error) {
            console.error('Something went wrong', error);
        }
    };

    const deleteLink = async () => {
        const id = link._id;
        try {
            await fetch('/.netlify/functions/deleteLink', {
                method: 'DELETE',
                body: JSON.stringify({ id }),
            });
            refreshLinks();
        } catch (error) {
            console.error('Something went wrong', error);
        }
    };

    return (
        <div className="neumorphism-1" style={{borderRadius: '9px'}}>
            <div style={{background: '#EBECF0'}} className='card-header'>
                <h2>Name: {link.name}</h2>   
            </div>
            <div className='card-body'>
                <span>URL: <a href={link.url}>{link.url}</a></span>
                <p>DESCRIPTION: {link.description}</p>
            </div>
            <div style={{background: '#EBECF0'}} className='card-footer text-center'>
                <button style={{borderRadius: '14px'}} className="btn btn-success mr-5" onClick={archiveLink}>
                    Opened
                </button>
                <button style={{borderRadius: '14px'}} className="btn btn-danger" onClick={deleteLink}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default LinkCard
