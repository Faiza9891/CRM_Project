const express = require("express");
const helmet =require("helmet");
const morgan= require( "morgan");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require('cors');
const app = express();
const customer = require("./routes/customerRoute");
const errorMiddleware = require("./middleware/error");
// const user = require("./routes/userRoute");


app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));



app.use("/api/v1", customer);
// app.use("/api/v1", user);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

app.use(errorMiddleware);
module.exports = app;