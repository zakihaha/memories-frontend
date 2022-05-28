import React, { useEffect } from 'react';
import { Container } from '@material-ui/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { gapi } from 'gapi-script';

function App(props) {
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
            <Container maxwidth='lg'>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/auth' element={<Auth />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;