const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");
const allRoutes = require("./routes");

const app = express();
const PORT = process.env.PORT || process.env.PORT_API;

db.then(() => {
  console.log("berhasil konek ke mongoDB");
}).catch(() => {
  console.log("gagal konek ke mongodb");
});

app.use(cors());
app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
