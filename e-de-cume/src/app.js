require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const pancsRoutes = require("./routes/pancsRoutes");
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

const app = express();

app.use(express.json());
app.use(cors());
app.use("/my-documentation-route", swaggerUi.serve, swaggerUi.setup(swaggerFile));

mongoose.connect();

app.use(pancsRoutes);

module.exports = app