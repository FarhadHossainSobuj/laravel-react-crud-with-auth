import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(()=>{
        if(token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.get('/api/user').then(response => setUser(response.data));
        }
    }, [token]);

    const login = async (email, password) => {
        const response = await axios.post('/api/login', {email, password});
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setUser(response.data.user);
    };

    const register = async (name, email, password, password_confirmation) => {
        const response = await axios.post('/api/register', {name, email, password, password_confirmation});
        setToken(response.data.token)
        localStorage.setitem('token', response.data.token)
        setUser(response.data.user)
    };

    const logout = () => {
        axios.post('/api/logout');
        setUser(null);
        setToken(null)
        localStorage.removeItem('token')
    };

    return (
        <AuthContext.Provider  value={{ user, token, login, register, logout}}>
            {children}
        </AuthContext.Provider >
    );    
};

export { AuthProvider, AuthContext};