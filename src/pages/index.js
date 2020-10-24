import React, { useEffect, useState } from 'react';
import LinkList from '../components/LinkList'
import 'bootstrap/dist/css/bootstrap.css';

function Index () {

    const [links, setLinks] = useState([])
    const loadLinks = async() => {
        try {
            const res = await fetch('/.netlify/functions/getLinks');
            const links = await res.json();
            console.log(links)
            setLinks(links)
        } catch (err) {
            console.error(err);
        }    
    }

    useEffect(() => {
        loadLinks();
    }, []);

    return(
        <div className='container py-5'>
            <h1 className='text-center mb-5'>Bookmark Application</h1>
            <LinkList links={links} />
        </div>
    )
}

export default Index