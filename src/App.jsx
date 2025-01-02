import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Banner from './pages/Banner';
import Main from './pages/Main';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';

const App = () => {
  const location = useLocation();

  // Banner səhifəsində Header və Footer'i gizlətmək üçün şərt
  const isBannerPage = location.pathname === '/';

  return (
    <div className="app">
      {!isBannerPage && <Header />}
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
