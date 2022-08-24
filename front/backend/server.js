const express = require("express");
const app = express();
const mongoose = require("mongoose");

const mongoDB =
  "mongodb+srv://ChadKirk:signup@cluster0.bchmycc.mongodb.net/users?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("test");
});

app.listen(4444);
