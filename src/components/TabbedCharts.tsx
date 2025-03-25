import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box } from '@mui/material';
import { styled } from '@mui/system';
import {
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie, Cell,
  AreaChart, Area,
  ScatterChart, Scatter, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { generateDummyData, LogEntry } from '../data/dummyData';

const StyledTabs = styled(Tabs)({
  backgroundColor: '#f5f5f5',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1976d2',
  },
});

const StyledTab = styled(Tab)({
  textTransform: 'none',
  fontWeight: 'bold',
  '&.Mui-selected': {
    color: '#1976d2',
  },
});

const TabPanel = (props: { children?: React.ReactNode; index: number; value: number }) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const TabbedChart: React.FC = () => {
  const [value, setValue] = useState(0);
  const data: LogEntry[] = generateDummyData();

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const logLevelData = ['INFO', 'WARN', 'ERROR'].map(level => ({
    name: level,
    count: data.filter(log => log.logLevel === level).length,
  }));

  const serviceData = ['AuthService', 'PaymentService', 'UserService'].map(service => ({
    name: service,
    count: data.filter(log => log.serviceName === service).length,
  }));

  const statusCodeData = [...new Set(data.map(log => log.statusCode))].map(code => ({
    name: `Status ${code}`,
    count: data.filter(log => log.statusCode === code).length,
  }));

  const responseTimeData = data.map(log => ({
    timestamp: log.timestamp,
    responseTime: log.responseTime,
  }));

  const scatterData = data.map(log => ({
    x: log.statusCode,
    y: log.responseTime,
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static">
        <StyledTabs value={value} onChange={handleChange} aria-label="chart tabs" variant="scrollable" scrollButtons="auto">
          <StyledTab label="Bar Chart" />
          <StyledTab label="Line Chart" />
          <StyledTab label="Pie Chart" />
          <StyledTab label="Area Chart" />
          <StyledTab label="Scatter Chart" />
          <StyledTab label="Radar Chart" />
        </StyledTabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={logLevelData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={responseTimeData}>
            <XAxis dataKey="timestamp" hide />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="responseTime" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie data={statusCodeData} cx="50%" cy="50%" outerRadius={150} fill="#8884d8" dataKey="count" label>
              {statusCodeData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={responseTimeData}>
            <XAxis dataKey="timestamp" hide />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="responseTime" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart>
            <XAxis type="number" dataKey="x" name="Status Code" />
            <YAxis type="number" dataKey="y" name="Response Time" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="Logs" data={scatterData} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart cx="50%" cy="50%" outerRadius={150} data={serviceData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar name="Logs" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </TabPanel>
    </Box>
  );
};

export default TabbedChart;
