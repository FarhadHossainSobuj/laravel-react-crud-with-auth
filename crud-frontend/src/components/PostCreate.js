import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const PostCreate = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate  = useNavigate();

    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post('/api/posts', { title, content }).then(() => {
            navigate('/');  // Use navigate instead of history.push
          });
    };

    return (
        <Container>
            <h1>Create Post</h1>            
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        placeholder='Title'
                    />

                    <Form.Control
                        as="textarea"
                        value={content}
                        rows={3}
                        onChange={(e)=>setContent(e.target.value)}
                        placeholder='Enter Content'
                    />
                    
                </Form.Group>    
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        
        </Container>
    );
};
export default PostCreate;
