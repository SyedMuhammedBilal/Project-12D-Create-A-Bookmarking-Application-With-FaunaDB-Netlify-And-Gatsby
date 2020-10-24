import React from 'react';
import LinkCard from './LinkCard';

function LinkList({ links }) {
    return (
        <div>
            <h2 className='my-4'>Bookmarks</h2>
            {
                links && links.map(link => ( 
                    <LinkCard key={link._id} link={link} />
                ))
            }
        </div>
    )
}

export default LinkList
