// src/App.tsx
import React from 'react';
import LogTable from './components/LogTable';
import LogStream from './components/LogStream';
import TabbedChart from './components/TabbedCharts.tsx';
import Header from './components/Header.tsx';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const App: React.FC = () => {
  return (
    <Router>
    <div className='dashboard'>
      <Header/>
      <div className='right'>
        <Routes>
            <Route path="/stream" element={<LogStream />} />
            <Route path="/chart" element={<TabbedChart />} />
            <Route path="/table" element={<LogTable />} />
            <Route path="/" element={<LogStream />} />
          </Routes>
      </div>
    </div>
    </Router>
  );
};

export default App;
