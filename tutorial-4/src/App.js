// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ProfileListingPage from './components/ProfileListingPage';
import ProfileDetailPage from './components/ProfileDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfileListingPage />} />
        <Route path="/profile/:id" element={<ProfileDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
