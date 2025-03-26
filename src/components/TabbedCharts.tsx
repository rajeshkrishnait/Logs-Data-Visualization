import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import {
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie, Cell,
  AreaChart, Area,
  ScatterChart, Scatter, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { generateDummyData, LogEntry } from '../data/dummyData';

const ChartsGrid: React.FC = () => {
  const data: LogEntry[] = generateDummyData();

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
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {/** Bar Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Log Levels</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={logLevelData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/** Line Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Response Time Over Time</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={responseTimeData}>
                <XAxis dataKey="timestamp" hide />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="responseTime" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/** Pie Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Status Code Distribution</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={statusCodeData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="count" label>
                  {statusCodeData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/** Area Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Response Time Area</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={responseTimeData}>
                <XAxis dataKey="timestamp" hide />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="responseTime" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/** Scatter Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Response Time vs Status Code</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <XAxis type="number" dataKey="x" name="Status Code" />
                <YAxis type="number" dataKey="y" name="Response Time" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="Logs" data={scatterData} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/** Radar Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Service Request Distribution</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart cx="50%" cy="50%" outerRadius={100} data={serviceData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Radar name="Logs" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChartsGrid;
