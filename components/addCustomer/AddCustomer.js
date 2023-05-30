import React from 'react'


const AddCustomer = () => {
  return (
    <div>
    {/*<Typography 
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
    </form>*/}
    
    </div>
  )
}

export default AddCustomer