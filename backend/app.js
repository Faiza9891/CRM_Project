const express = require("express");
const helmet =require("helmet");
const morgan= require( "morgan");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const customer = require("./routes/customerRoute");






app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use("/api/v1", customer);



module.exports = app;