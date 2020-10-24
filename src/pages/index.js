import React, { useEffect, useState } from 'react';
import LinkList from '../components/LinkList';
import LinkForm from '../components/LinkForm';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

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
            <h1 className='text-center mb-5'>Bookmark App</h1>
            <LinkForm refreshLinks={loadLinks} />
            <br />
            <LinkList links={links} refreshLinks={loadLinks} />
        </div>
    )
}

export default Index