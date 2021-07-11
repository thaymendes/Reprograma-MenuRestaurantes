const express = require("express")
const cors = require("cors")
const indexRoutes = require('./routes/index')
const restaurantesRoutes = require('./routes/restaurantesRoutes')
const menuRoutes = require('./routes/menuRoutes')
const pratosRoutes = require("./routes/itensRoutes")
const apiRoutes = require("./routes/apiRoutes")
const app = express()

app.use(cors())
app.use(express.json())


app.use("/", indexRoutes);

app.use("/restaurantes", restaurantesRoutes);
app.use("/menu", menuRoutes)
app.use("/pratos", pratosRoutes)
app.use("/api", apiRoutes)

module.exports = app 