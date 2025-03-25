// src/App.tsx
import React from 'react';
import LogTable from './components/LogTable';
import LogStream from './components/LogStream';
import TabbedChart from './components/TabbedCharts.tsx';
import Header from './components/Header.tsx';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Intro.tsx';
import {ThemeProvider}  from './Context/ThemeContext.tsx';
import './styles/theme.css'
const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
      <div className='dashboard'>
        <Header/>
        <div className='right'>
          <Routes>
              <Route path="/Logs-Data-Visualization/stream" element={<LogStream />} />
              <Route path="/Logs-Data-Visualization/chart" element={<TabbedChart />} />
              <Route path="/Logs-Data-Visualization/table" element={<LogTable />} />
              <Route path="/Logs-Data-Visualization" element={<Home />} />
            </Routes>
        </div>
      </div>
    </ThemeProvider>
    </Router>
  );
};

export default App;
