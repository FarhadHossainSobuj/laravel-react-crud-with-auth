import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = ()=>{
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios.get('/api/posts').then(response => setPosts(response.data));
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <Link to="/create">Create post</Link>
            <ul>
                {
                    posts.map(post=>(
                        <li key={post.id}>
                            {post.title}
                            <Link to={`/edit/${post.id}`}>Edit</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};
export default PostList;
