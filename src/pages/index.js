import React from 'react'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag';

const BookMarksQuery = gql`{
    bookmark {
        url,
    }
}`

function Home() {
    let textField;
    let desc;

    const addBookMark = () => {
        console.log('textField', textField.value)
        console.log('desc', desc.value)
    }

    const { data, loading, error } = useQuery(BookMarksQuery);
    return (
        <div>
            <p>{JSON.stringify(data)}</p>
            <div>
                <input 
                    type="text" 
                    placeholder="URL"
                    ref={node => 
                        textField=node
                    } 
                />
                <input 
                    type="text" 
                    placeholder="Description"
                    ref={node => 
                        desc=node
                    } 
                />
                <button onClick={addBookMark} >Add BookMark</button>
            </div>
        </div>
    )
}

export default Home
