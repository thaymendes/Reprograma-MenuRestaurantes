const express = require("express")
const cors = require("cors")
const indexRoutes = require('./routes/index')
const appRoutes = require('./routes/apiRoutes')
const app = express()

app.use(cors())
app.use(express.json())


app.use("/", indexRoutes);

app.use("/", appRoutes);

module.exports = app 