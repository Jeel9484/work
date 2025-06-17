import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon,
  useTheme,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = ({ open }) => {
  const theme = useTheme();
  const location = useLocation();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Users', icon: <PeopleIcon />, path: '/users' },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      sx={{
        width: open ? 240 : 72,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 240 : 72,
          transition: 'all 0.3s ease',
          overflowX: 'hidden',
          bgcolor: 'background.paper',
          borderRight: '1px solid',
          borderColor: 'divider',
          mt: 8,
          boxShadow: '2px 0 5px rgba(0,0,0,0.05)',
        },
      }}
    >
      <List sx={{ pt: 1 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem
              button
              component={NavLink}
              to={item.path}
              key={item.text}
              sx={{
                minHeight: 48,
                px: 2.5,
                mb: 0.5,
                position: 'relative',
                '&:before': isActive ? {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 4,
                  bgcolor: 'primary.main',
                  borderRadius: '0 4px 4px 0',
                } : {},
                '&:hover': {
                  bgcolor: 'action.hover',
                  '& .MuiListItemIcon-root': {
                    color: 'primary.main',
                  },
                },
                ...(isActive && {
                  bgcolor: 'primary.lighter',
                  '& .MuiListItemIcon-root': {
                    color: 'primary.main',
                  },
                  '& .MuiListItemText-primary': {
                    color: 'primary.main',
                    fontWeight: 600,
                  },
                }),
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : 'auto',
                  justifyContent: 'center',
                  color: isActive ? 'primary.main' : 'text.secondary',
                  transition: 'color 0.2s ease',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  opacity: open ? 1 : 0,
                  color: isActive ? 'primary.main' : 'text.primary',
                  '& .MuiTypography-root': {
                    fontWeight: isActive ? 600 : 400,
                  },
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
