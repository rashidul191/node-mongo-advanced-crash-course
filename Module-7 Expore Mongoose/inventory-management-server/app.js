const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

// middleware
app.use(express.json());
app.use(cors());

// routes
const productRoute = require("./routes/product.route");

// here we are export model

app.get("/", (req, res) => {
  res.send("inventory-management-server is running...");
});

// posting to database
app.use("/api/v1/product", productRoute);

// getting data from database
// app.get("/api/v1/product");
// getting data from database of id
// app.get("/api/v1/product/:id", );

// // listen port
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

module.exports = app;
