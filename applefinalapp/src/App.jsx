import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/nav/Nav';
import Footer from './components/footer/Footer';

import Main from './components/main/Main';
import Iphone from './pages/Iphone/Iphone';
import Mac from './pages/Mac/Mac';
import Four04 from './pages/Four04/Four04';
import Productpage from './pages/Productpage/Productpage';
import Youtube from './components/Youtube/Youtube';
import './css/styles.css';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/iphone/:pid" element={<Productpage />} />
        <Route path="*" element={<Four04 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
