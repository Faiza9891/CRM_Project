const express = require("express");
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());


const customer = require("./routes/customerRoute");
const subCustomer = require("./routes/contactRoute")
app.use("/api/v1", customer);
app.use("/api/v1", subCustomer);

module.exports = app;