import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import PostEdit from './components/PostEdit';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<PrivateRoute><PostList /></PrivateRoute>} />
            <Route path="/create" element={<PrivateRoute><PostCreate /></PrivateRoute>} />
            <Route path="/edit/:id" element={<PrivateRoute><PostEdit /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
