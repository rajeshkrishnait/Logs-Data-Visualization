import React, { useState } from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { TextField, Box } from '@mui/material';
import { generateDummyData, LogEntry } from '../data/dummyData';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'timestamp', headerName: 'Timestamp', width: 200 },
  { field: 'logLevel', headerName: 'Log Level', width: 130 },
  { field: 'message', headerName: 'Message', width: 300 },
  { field: 'serviceName', headerName: 'Service Name', width: 200 },
  { field: 'statusCode', headerName: 'Status Code', width: 120 },
  { field: 'responseTime', headerName: 'Response Time (ms)', width: 160 },
  { field: 'ipAddress', headerName: 'IP Address', width: 150 },
  { field: 'environment', headerName: 'Environment', width: 150 },
];

const LogTable: React.FC = () => {
  const [rows] = useState<LogEntry[]>(generateDummyData());
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value?.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <TextField
        label="Search Logs"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchText}
        onChange={handleSearch}
      />
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={10}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default LogTable;
