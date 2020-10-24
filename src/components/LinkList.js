import React from 'react';
import LinkCard from './LinkCard';

function LinkList({ links, refreshLinks }) {
    return (
        <div>
            <h2 className='my-4'>Your Bookmarks</h2>
            {
                links && links.filter(link => !link.archived).map(link => ( 
                    <LinkCard 
                        key={link._id} 
                        link={link} 
                        refreshLinks={refreshLinks} 
                    />
                ))
            }
            <br />
            <h2 className='my-4'>Opened Links</h2>
            {
                links && links.filter(link => link.archived).map(link => ( 
                    <LinkCard 
                        key={link._id} 
                        link={link} 
                        refreshLinks={refreshLinks} 
                    />
                ))
            }
        </div>
    )
}

export default LinkList
