import React, { useState } from 'react';
import { DataGrid, GridColDef, GridToolbar, GridPaginationModel } from '@mui/x-data-grid';
import { TextField, Box } from '@mui/material';
import { generateDummyData, LogEntry } from '../data/dummyData';
import { useTheme } from '../Context/ThemeContext';

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
  const { theme } = useTheme();
  const [rows] = useState<LogEntry[]>(generateDummyData());
  const [searchText, setSearchText] = useState('');
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handlePaginationChange = (model: GridPaginationModel) => {
    setPaginationModel(model);
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value?.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <Box
      sx={{
        height: 600,
        width: '100%',
        backgroundColor: theme === 'dark' ? '#0a192f' : 'white',
        color: theme === 'dark' ? '#ffffff' : '#000000',
        borderRadius: 2,
      }}
    >
      {/* Search Bar */}
      <TextField
        label="Search Logs"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchText}
        onChange={handleSearch}
        sx={{
          input: { color: theme === 'dark' ? '#ffffff' : '#000000' },
          label: { color: theme === 'dark' ? '#ffffff' : '#000000' },
          fieldset: { borderColor: theme === 'dark' ? '#ffffff' : '#000000' },
        }}
      />

      {/* Data Grid */}
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pagination
        pageSizeOptions={[10, 25, 50]}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationChange}
        slots={{ toolbar: GridToolbar }}
        sx={{
          backgroundColor: theme === 'dark' ? '#112240' : '#f5f5f5',
          color: theme === 'dark' ? '#ffffff' : '#000000',
        
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme === 'dark' ? '#0d2538' : '#e0e0e0',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            color: theme === 'dark' ? '#ffffff' : '#000000', 
            fontWeight: 'bold',
          },
        
          '& .MuiDataGrid-cell': {
            color: theme === 'dark' ? '#ffffff' : '#000000',
            borderBottom: theme === 'dark' ? '1px solid #2a3a5f' : '1px solid #ddd',
          },
        
          '& .MuiDataGrid-toolbarContainer': {
            backgroundColor: theme === 'dark' ? '#0d2538' : '#e0e0e0',
            color: theme === 'dark' ? '#ffffff' : '#000000',
          },
        
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: theme === 'dark' ? '#0d2538' : '#e0e0e0',
            color: theme === 'dark' ? '#ffffff' : '#000000',
          },
        
          '& .MuiTablePagination-root, & .MuiTablePagination-actions button': {
            color: theme === 'dark' ? '#ffffff' : '#000000',
          },
        
          '& .Mui-selected': {
            backgroundColor: theme === 'dark' ? '#1a3a5f !important' : '#d0d0d0 !important',
            color: theme === 'dark' ? '#ffffff' : '#000000',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: theme === 'dark' ? '#173a5f' : '#f0f0f0',
          },
        }}
        
      />
    </Box>
  );
};

export default LogTable;
