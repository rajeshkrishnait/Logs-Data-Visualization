// src/App.tsx
import React from 'react';
import { Container } from '@mui/material';
import LogTable from './components/LogTable';
import LogStream from './components/LogStream';
import TabbedChart from './components/TabbedCharts.tsx';
import Header from './components/Header.tsx';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const App: React.FC = () => {
  return (
    <Router>
    <Container>
      <Header/>
      <div>
        <Routes>
            <Route path="/stream" element={<LogStream />} />
            <Route path="/chart" element={<TabbedChart />} />
            <Route path="/table" element={<LogTable />} />
            <Route path="/" element={<LogStream />} />
          </Routes>
      </div>
    </Container>
    </Router>
  );
};

export default App;
