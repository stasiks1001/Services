const express= require('express');
const authRouter  = require("./routes/auth_route")
const serviceRouter = require('./routes/service_router');
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors());


// middleware
const authenticateUser = require("./middlewars/authentication")
const notFoundMiddleware = require("./middlewars/not-found")
const errorHandlerMiddleware = require("./middlewars/error-handler")
app.use(cors());
// routes
app.use("/auth", authRouter)
app.use("/services", authenticateUser,serviceRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

   

mongoose.connect(process.env.MONGO_URI, () => console.log("db connected!"));

app.listen(4000,  () => {
    console.log("Server is running on port 4000");
})