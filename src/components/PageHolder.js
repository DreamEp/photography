import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './Home'
import Gallery from './Gallery'
import PrivacyPolicy from './PrivacyPolicy'
import TermsAndConditions from './TermsAndConditions'



const PageHolder = () => (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}></Route>
        <Route path='/terms-and-conditions' element={<TermsAndConditions/>}></Route>
    </Routes>
);

export default PageHolder;