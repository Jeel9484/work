import React, { useEffect, useState } from 'react';
import {
  Box, Button, TextField, Checkbox, FormControlLabel, RadioGroup,
  Radio, Typography, Avatar, FormGroup
} from '@mui/material';

const initialState = {
  name: '',
  gender: 'male',
  preferences: {
    newsletter: false,
    updates: false,
  },
  image: '',
};

const UserForm = ({ onSubmit, editData }) => {
  const [formData, setFormData] = useState(initialState);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    if (editData) {
      setFormData(editData);
      setImagePreview(editData.image);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'newsletter' || name === 'updates') {
      setFormData((prev) => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.gender) {
      alert('Name and Gender are required');
      return;
    }
    onSubmit(formData);
    setFormData(initialState);
    setImagePreview('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2 }}
    >
      <Typography variant="h6">{formData.id ? '✏️ Edit User' : '➕ Add User'}</Typography>

      <TextField
        label="Name"
        name="name"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>

      <FormGroup row>
        <FormControlLabel
          control={<Checkbox checked={formData.preferences.newsletter} onChange={handleChange} name="newsletter" />}
          label="Newsletter"
        />
        <FormControlLabel
          control={<Checkbox checked={formData.preferences.updates} onChange={handleChange} name="updates" />}
          label="Updates"
        />
      </FormGroup>

      <Button variant="outlined" component="label" sx={{ mt: 1 }}>
        Upload Image
        <input type="file" hidden onChange={handleImageUpload} />
      </Button>

      {imagePreview && (
        <Avatar src={imagePreview} alt="Preview" sx={{ width: 56, height: 56, mt: 2 }} />
      )}

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        {formData.id ? 'Update' : 'Submit'}
      </Button>
    </Box>
  );
};

export default UserForm;
