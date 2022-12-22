// optional (use a colors for output.)
const colors = require("colors");
const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();
const port = process.env.PORT || 5000;

// local database connection
//mongoose.connect(`mongodb://localhost:27017/database-name-here`).then(() => {
// mongoose.connect(`mongodb://127.0.0.1:27017/inventory-management`).then(() => {
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log(`Database connection successful`.blue.bold);
});

// main().catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/test");
//   // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
//   console.log(`Database connection successful`);
// }

// server listen
// const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
