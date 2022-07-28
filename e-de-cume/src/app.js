require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect();

module.exports = app