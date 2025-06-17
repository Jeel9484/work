// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ onToggleSidebar, email }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onToggleSidebar}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Email or Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {email ? `Hello, ${email}` : 'My First Website'}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
