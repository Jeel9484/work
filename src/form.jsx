import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';

const Form = ({ formData, setFormData, isDialog }) => {
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.mobile.match(/^[0-9]{10}$/))
      newErrors.mobile = 'Enter valid 10-digit number';
    if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  useEffect(() => { setErrors({}); setSubmitted(false); }, [formData]);

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        width: '100%',
        maxWidth: isDialog ? '100%' : 400,
        mx: isDialog ? 0 : 'auto',
        mt: isDialog ? 0 : 5,
        p: isDialog ? 0 : 3,
        boxShadow: isDialog ? 'none' : 3,
        borderRadius: isDialog ? 0 : 2
      }}
    >
      <Typography variant="h5" gutterBottom align="center">
        User Registration
      </Typography>

      {/* Name */}
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={submitted && Boolean(errors.name)}
        helperText={submitted && errors.name}
      />

      {/* Gender */}
      <TextField
        select
        label="Gender"
        fullWidth
        margin="normal"
        value={formData.gender}
        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        error={submitted && Boolean(errors.gender)}
        helperText={submitted && errors.gender}
      >
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
        <MenuItem value="others">Others</MenuItem>
      </TextField>

      {/* Mobile Number */}
      <TextField
        label="Mobile Number"
        type="tel"
        fullWidth
        margin="normal"
        value={formData.mobile}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, '');
          setFormData({ ...formData, mobile: value });
        }}
        error={submitted && Boolean(errors.mobile)}
        helperText={submitted && errors.mobile}
      />

      {/* Password */}
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
        error={submitted && Boolean(errors.password)}
        helperText={submitted && errors.password}
        autoComplete="new-password" 
      />

      {/* Only show submit button if not in dialog */}
      {!isDialog && (
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => {}}
        >
          Submit
        </Button>
      )}
    </Box>
  );
};

export default Form;
