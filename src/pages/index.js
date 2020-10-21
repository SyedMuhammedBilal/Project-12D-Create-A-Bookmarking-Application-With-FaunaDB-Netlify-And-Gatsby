import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import gql from 'graphql-tag';

const BookMarksQuery = gql`{
    bookmark {
        url,
        desc
    }
}`;

const addBookMarkMutation = gql`
    mutation addBookmark($url: String!, $desc: String!) {
        addBookmark(url: $url, desc: $desc) {
            url, 
        }
    }
`

function Home() {
    let textField;
    let desc;

    const [addBookmark] = useMutation(addBookMarkMutation);

    const addBookMark = () => {
        addBookmark({
            variables: {
                url: textField.value,
                desc: desc.value
            },
            refetchQueries: [{query: BookMarksQuery}],
        });
        console.log('textField', textField.value)
        console.log('desc', desc.value)
    }

    const { data, loading, error } = useQuery(BookMarksQuery);
    
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error</h1>
    console.table(data.bookmark[0].url);

    return (
        <div>
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
                <button onClick={addBookMark}>Add</button>
            </div>
            <div>
                    {
                        data.bookmark.map((bm, index) => {
                            console.log(bm)
                            return(
                                <div key={index}>
                                    <p>{bm.url}</p>
                                    <p>{bm.desc}</p>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default Home
