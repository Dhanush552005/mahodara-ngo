const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", require("./routes/contact"));
//app.use("/api/payment", require("./routes/payment"));

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});