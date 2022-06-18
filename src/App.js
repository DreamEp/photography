import React from 'react';
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import PageHolder from './components/PageHolder';
import BackToTopButton from './components/BackToTopButton';





function App() {
  return (
   <>
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          {/*<h1 style ={{textAlign: 'center'}}>Image Gallery</h1>
          <Gallery />   */}
          <PageHolder />
          <BackToTopButton />   
        </div>
        <Footer />
      </div>
      
   </>
  );
}

export default App;
