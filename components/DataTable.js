import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Typography,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TextField,
    Button,
    Container,
  } from '@mui/material';
  import DeleteIcon from '@mui/icons-material/Delete';
  import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


  
export default function DataTable() {

const [customers, setCustomers] = useState([]);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [address, setAddress] = useState('');
const [editingCustomerId, setEditingCustomerId] = useState(null);

useEffect(() => {
  fetchCustomers();
}, []);

const fetchCustomers = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/v1/customers');
    setCustomers(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }

};
const handleEditCustomer = async () => {
    try {
      const updatedCustomer = { name, email, phone, address };
      const response = await axios.put(`http://localhost:5000/api/v1/customer/${editingCustomerId}`, updatedCustomer);
      setCustomers(customers.map((customer) => {
        if (customer._id === editingCustomerId) {
          return response.data;
        }
        return customer;
      }));
      clearForm();
      setEditingCustomerId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = (customer) => {
    setEditingCustomerId(customer._id);
    setName(customer.name);
    setEmail(customer.email);
    setPhone(customer.phone);
    setAddress(customer.address);
  };

  const handleCancelEdit = () => {
    clearForm();
    setEditingCustomerId(null);
  };

   const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };


 const handleAddCustomer = async () => {
  try {
    const newCustomer = { name, email, phone, address };
    const response = await axios.post('http://localhost:5000/api/v1/customer', newCustomer);
    setCustomers([...customers, response.data]);
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  } catch (error) {
    console.error(error);
  }
};

 const handleDeleteCustomer = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/v1/customer/${id}`);
    setCustomers(customers.filter((customer) => customer._id !== id));
  } catch (error) {
    console.error(error);
  }
};

  return (
    
    <Container maxWidth="sm">
    <Typography 
    style={{ position: 'absolute',left: '8%',top:"2%",fontSize:"40px" }}
    variant="h5" gutterBottom>{editingCustomerId ? 'Edit Customer' : 'Add Customer'}</Typography>
    <form 
    style={{ backgroundColor:"transparent",border:"1px solid grey",borderRadius:"5px",padding:"15px",position: 'absolute',top:"10%",left: '5%' ,width:"500px",boxShadow: '0 2px 4px grey' }}
    onSubmit={editingCustomerId ? handleEditCustomer : handleAddCustomer}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Phone"
        variant="outlined"
        fullWidth
        margin="normal"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        label="Address"
        variant="outlined"
        fullWidth
        margin="normal"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color={editingCustomerId ? "primary" : "success"}
      >
        {editingCustomerId ? "Update" : "Add"}
      </Button>
      {editingCustomerId && (
        <Button
          variant="outlined"
          color="error"
          onClick={handleCancelEdit}
        >
          Cancel
        </Button>
      )}
    </form>
    <Typography variant="h4" gutterBottom>Customer List</Typography>
    <Table style={{boxShadow: '0 2px 4px grey'}}>
      <TableHead
      variant="outlined"
      color="primary"
      fullWidth
      margin="normal"
      sx={{border:"3px solid black" ,borderRadius:"5px",padding:"15px",backgroundColor:"#5D8CAE"}} 
      >
        <TableRow
       
        >
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody
      variant="outlined"
      color="primary"
      fullWidth
      margin="normal"
      sx={{border:"1px solid grey" ,borderRadius:"5px",padding:"15px",backgroundColor:"#89C4F4"}} 
      >
        {customers.map((customer) => (
          <TableRow
          key={customer._id}>
            <TableCell>{customer.name}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.phone}</TableCell>
            <TableCell>{customer.address}</TableCell>
            <TableCell>
              <EditOutlinedIcon onClick={() => handleEditClick(customer)}/>
              <DeleteIcon color="action" 
              sx={{ fontSize: 25, color: '#E68364' }}
              onClick={() => handleDeleteCustomer(customer._id)}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
   
  </Container>
);
};








