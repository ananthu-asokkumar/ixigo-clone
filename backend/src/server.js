

const express = require("express");

const app = express();
app.use(express.json());

const connect = require("./configs/db");


const flightController = require("./controllers/flight.controllers");


app.use("/flights", flightController);
// app.set("views", path.join(__dirname, "views/"));


app.listen(5000, async () => {
  await connect();
  console.log("listening to port 5000");
});
