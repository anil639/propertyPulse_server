const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const propertyRoutes = require("./routes/propertyRoutes");

const app = express();
app.use(express.json());

dotenv.config();
connectDB();

app.use("/api", propertyRoutes);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
