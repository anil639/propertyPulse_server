const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const propertyRoutes = require("./routes/propertyRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

dotenv.config();
connectDB();

app.use("/api", propertyRoutes);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
