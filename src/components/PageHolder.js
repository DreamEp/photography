import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './Home'
import Gallery from './Gallery'


const PageHolder = () => (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Gallery' element={<Gallery/>}></Route>
    </Routes>
);

export default PageHolder;