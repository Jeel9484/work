import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Outlet />
    </Box>
  );
};

export default Dashboard;
