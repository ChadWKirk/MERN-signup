const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/routes");

//middleware to parse and be able to use req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//mongoDB connection string. took pw out for security
const mongoDB =
  "mongodb+srv://ChadKirk:signup@cluster0.bchmycc.mongodb.net/users?retryWrites=true&w=majority";

//connect to db
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//if there's an error connecting to db, console log error message
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//testing express at home page
app.get("/", (req, res) => {
  res.send("test");
});

//middleware to use routes.js
app.use("/", router);

//use port 5000 eg: localhost:5000
app.listen(5000);
