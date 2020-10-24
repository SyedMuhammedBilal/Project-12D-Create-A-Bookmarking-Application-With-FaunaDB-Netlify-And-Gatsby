import React, { useState } from 'react'
import './Form.css'

function LinkForm({ refreshLinks }) {

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    const resetForm = () => {
        setName('');
        setDescription('');
        setUrl('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { name, url, description };
        try {
            const res = await fetch('/.netlify/functions/createLink', {
                method: 'POST',
                body: JSON.stringify(body),
            });
            resetForm();
            refreshLinks();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {/*<div style={{background: '#242424', color: 'white', justifyContent: 'center', alignItems: 'center'}} className="card-header">Add Bookmark</div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control neumorphism-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">URL</label>
                        <input
                            type="text"
                            name="url"
                            className="form-control neumorphism-2"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            className="form-control neumorphism-2"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </form>
            </div>*/}
            <form className="Form container" onSubmit={handleSubmit}>
              <h1>Add your Bookmark</h1>
                <input
                  className='inputBox'
                  placeholder='Name...'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                  className='inputBox'
                  placeholder='Url'
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                ></input>
                <input
                  className='inputBox'
                  placeholder='Description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
              <button className="sign-btn" type="submit">Add</button>
            </form>
        </div>
    )
}

export default LinkForm
