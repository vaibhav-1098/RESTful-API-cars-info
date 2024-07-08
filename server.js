const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();
const carRoutes = require("./Routes/carRoutes");
const { allowOnlyGet } = require("./Controllers/carControllers");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"))
app.use(allowOnlyGet);

/* ROUTES */
app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use("/", carRoutes);

// port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server started");
});
