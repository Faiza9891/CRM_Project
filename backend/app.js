const express = require("express");
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());


const customer = require("./routes/customerRoute");
const subcustomer = require("./routes/subCustomerRoute");
app.use("/api/v1", customer);
app.use("/api/v1", subcustomer);

module.exports = app;