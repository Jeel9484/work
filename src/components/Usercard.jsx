import React from 'react';
import {
  Card, CardContent, CardActions, Typography,
  Button, Avatar, Grid
} from '@mui/material';

const UserCard = ({ user, onDelete, onEdit }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ minHeight: 220 }}>
        <CardContent>
          <Avatar src={user.image} alt={user.name} sx={{ mb: 1 }} />
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="body2">Gender: {user.gender}</Typography>
          <Typography variant="body2">
            Preferences:
            {user.preferences.newsletter ? ' 📰 Newsletter' : ''}
            {user.preferences.updates ? ' 🔔 Updates' : ''}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => onEdit(user)}>Edit</Button>
          <Button color="error" onClick={() => onDelete(user.id)}>Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default UserCard;
