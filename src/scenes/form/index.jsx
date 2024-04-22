
import React, { useState } from 'react';
import { Box, Button, TextField } from "@mui/material";
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    city: '',
    zip: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit', formData);
      console.log('User saved:', response.data);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        address: '',
        city: '',
        zip: ''
      });
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return (
    <Box m="20px">
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="filled"
          type="text"
          id="name"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="filled"
          type="email"
          id="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="filled"
          type="tel"
          id="phone"
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="filled"
          type="number"
          id="age"
          label="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          id="address"
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          id="city"
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="filled"
          type="number"
          id="zip"
          label="Zip"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          required
        />
        <Button type="submit" color="secondary" variant="contained">
          Create User
        </Button>
      </form>
    </Box>
  );
};

export default Form;
