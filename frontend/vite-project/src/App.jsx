import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './From';
import Display from './Display';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </Router>
  );
};

export default App;


