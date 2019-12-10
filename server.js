
//  Node packages
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require('mongoose');

//  =================================================
// const paymentRoute = require("./routes/payment-routes");
const imageRoutes = require("./routes/image-routes");
const inventoryRoutes = require("./routes/inventory-routes");
const commandeRoutes = require("./routes/commande-routes");


const users = require("./routes/User-routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

//========================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);

if(process.env.NODE_ENV === "production"){
    app.use (express.static("client/build"))

}

//Connection to mongoDB
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tayment', { useNewUrlParser: true }, ()=>{
    console.log("Succesfuly Connected to MongoDB")
});


app.use("/api",inventoryRoutes);
app.use("/api/users", users);
app.use("/api", imageRoutes);
app.use("/api", commandeRoutes);
// app.use("/api", userRoutes);
// app.use("/api", sellsRoutes);
// app.use("/api", storeRoutes)
// app.use("/api", paymentRoute);


app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});


// PORT Listener
app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`);
});