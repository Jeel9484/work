import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  Snackbar, 
  Typography,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MuiAlert from '@mui/material/Alert';
import Form from '../form';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', gender: '', mobile: '', password: '' });
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMsg, setSnackMsg] = useState('');

  const handleOpen = (user) => {
    setEditingUser(user);
    setFormData(user || { name: '', gender: '', mobile: '', password: '' });
    setOpenDialog(true);
  };

  const handleClose = () => setOpenDialog(false);

  const handleFormChange = (data) => {
    setFormData(data);
  };

  const handleSubmit = () => {
    if (editingUser) {
      setUsers(users.map((u) => (u === editingUser ? formData : u)));
      setSnackMsg('User updated successfully!');
    } else {
      setUsers([...users, formData]);
      setSnackMsg('User added successfully!');
    }
    setOpenDialog(false);
    setSnackOpen(true);
  };

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setOpenDeleteDialog(true);
  };

  const handleDeleteConfirm = () => {
    setUsers(users.filter((u) => u !== userToDelete));
    setSnackMsg('User deleted successfully!');
    setSnackOpen(true);
    setOpenDeleteDialog(false);
    setUserToDelete(null);
  };

  return (
    <Box>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        mb: 2,
        p: 2,
        backgroundColor: 'primary.main',
        color: 'white',
        borderRadius: 1
      }}>
        <Typography variant="h5">User Management</Typography>
        <Button 
          variant="contained" 
          onClick={() => handleOpen(null)}
          sx={{ 
            backgroundColor: 'white',
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'grey.100'
            }
          }}
        >
          Add User
        </Button>
      </Box>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {users.map((user, index) => (
          <Card key={index} sx={{ 
            width: 280,
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 4
            }
          }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>{user.name}</Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Gender: {user.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Mobile: {user.mobile}
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                <IconButton 
                  onClick={() => handleOpen(user)}
                  color="primary"
                  size="small"
                >
                  <EditIcon />
                </IconButton>
                <IconButton 
                  onClick={() => handleDeleteClick(user)}
                  color="error"
                  size="small"
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Form Dialog */}
      <Dialog open={openDialog} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>{editingUser ? 'Edit User' : 'Add User'}</DialogTitle>
        <DialogContent>
          <Form
            formData={formData}
            setFormData={handleFormChange}
            onSubmit={handleSubmit}
            isDialog
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog 
        open={openDeleteDialog} 
        onClose={() => setOpenDeleteDialog(false)}
        maxWidth="xs"
        PaperProps={{
          sx: {
            borderRadius: 2,
            p: 1
          }
        }}
      >
        <DialogTitle sx={{ 
          color: 'error.main',
          pb: 1
        }}>
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete user "{userToDelete?.name}"? 
            This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 2, pt: 1 }}>
          <Button 
            onClick={() => setOpenDeleteDialog(false)}
            sx={{ 
              color: 'text.secondary',
              '&:hover': { backgroundColor: 'grey.100' }
            }}
          >
            Cancel
          </Button>
          <Button 
            variant="contained" 
            color="error"
            onClick={handleDeleteConfirm}
            sx={{ 
              px: 3,
              '&:hover': { backgroundColor: 'error.dark' }
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackOpen} autoHideDuration={3000} onClose={() => setSnackOpen(false)}>
        <MuiAlert onClose={() => setSnackOpen(false)} severity="success" sx={{ width: '100%' }}>
          {snackMsg}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default Users;
