require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My Routes
const authRoutes = require("./routes/auth.js")
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
//const paymentBRoutes = require("./routes/payment");
//database connection___________________________________________
    mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('MongoDB connection established.'))
    .catch((error) => console.error("MongoDB connection failed:", error.message));
//database connection___________________________________________

//MiddleLayer___________________________________________________
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(cors()); 
//MiddleLayer___________________________________________________

//my routes
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",orderRoutes);
//app.use("/api",paymentBRoutes);
//Server________________________________________________________
const port = 8000;

app.listen(port,()=>{
    console.log(`app is running at ${port}`);
})