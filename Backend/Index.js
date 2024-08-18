const express = require("express");
const app = express();
const cors = require("cors")
app.use(express.json())
app.use(cors());
const dotenv = require("dotenv")
dotenv.config()
const {dbConn} = require("./Connection/Conn")
dbConn(process.env.MONGO_URI);
const port = process.env.port

// Importing Routes
const cardRoute = require("./Routes/CardRoutes")
app.use("/api",cardRoute)
app.listen(port,() => {
    console.log(`Server Started on port ${port}`)
})

