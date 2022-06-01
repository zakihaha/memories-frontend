import React, { useEffect } from 'react';
import { Container } from '@material-ui/core'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { gapi } from 'gapi-script';
import PostDetails from './components/PostDetails/PostDetails';
import './index.css'

function App(props) {
    const user = JSON.parse(localStorage.getItem('profile'))
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: '998173041129-9bslnpnqck2bhipjt182fn6eq4gutavh.apps.googleusercontent.com',
                scope: ''
            })
        }

        gapi.load('client:auth2', start)
    }, [])

    return (
        <BrowserRouter>
            <Container maxwidth='xl'>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Navigate to="/posts" replace />} />
                    <Route path='/posts' exact element={<Home />} />
                    <Route path='/posts/search' exact element={<Home />} />
                    <Route path='/posts/:id' element={<PostDetails />} />
                    <Route path='/auth' exact element={!user ? <Auth /> : <Navigate to="/posts" replace />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;