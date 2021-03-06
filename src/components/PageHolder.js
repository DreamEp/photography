import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './Home';
import Home2 from './Home2';
import Gallery from './Gallery';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';



const PageHolder = () => (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/2' element={<Home2/>}></Route>
        <Route path='/landscape' element={<Gallery/>}></Route>
        <Route path='/portrait' element={<Gallery/>}></Route>
        <Route path='/photoshop' element={<Gallery/>}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}></Route>
        <Route path='/terms-and-conditions' element={<TermsAndConditions/>}></Route>
    </Routes>
);

export default PageHolder;