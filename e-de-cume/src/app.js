require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const pancsRoutes = require("./routes/pancsRoutes");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect();

app.use(pancsRoutes);

module.exports = app