import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'

const Postedit = ()=> {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get(`/api/posts/${id}`).then((response)=>{
            setTitle(response.data.title);
            setContent(response.data.content);
        });
    }, [id]);

    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.put(`/api/posts/${id}`, {title, content}).then(()=>{
            navigate("/");
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Edit Post</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Postedit;

