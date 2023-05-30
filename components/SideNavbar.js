import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Paper
} from '@mui/material';
import AddCustomer from './addCustomer/AddCustomer';

const SideNavbar = () => {
  const [toggle,setToggle] = useState();
  const toggleElement = () =>{
    setToggle(!toggle)
  }
 
  return (
    <Paper
    elevation={3}
    style={{
      width: '15%',
      backgroundColor: '#badaf5',
      border: '1px solid grey',
      height: '100%',
      position: 'absolute',
      display: 'flex',
      color:"black",
      borderRadius: "0px 50px 50px 0px",
     justifyContent: 'center',
boxShadow:"3px 1px 3px 5px grey"

    }}
  >
  <List >
  <ListItem button >
    <ListItemText primary="Dashboard" />
  </ListItem>
  <ListItem button onClick={toggleElement}>
    <ListItemText primary="Add Customer" />
    {toggle ? <AddCustomer/> : null}
  </ListItem>
  <ListItem button>
    <ListItemText primary="Customer Lists" />
  </ListItem>
</List>
  </Paper>
  );
};

export default SideNavbar;
