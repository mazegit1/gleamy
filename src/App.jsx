import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Banner from './pages/Banner';
import Main from './pages/Main';

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
