import React from 'react';
import "./App.css";
import Gallery from './Gallery';
import Footer from './Footer';

function App() {
  return (
   <>
      <div className="page-container">
        <div className="content-wrap">
          <h1 style ={{textAlign: 'center'}}>Image Gallery</h1>
          <Gallery />      
        </div>
        <Footer />
      </div>
      
   </>
  );
}

export default App;
