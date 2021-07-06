const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

module.exports = app 