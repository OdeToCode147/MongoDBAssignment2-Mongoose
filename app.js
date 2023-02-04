const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./database/mongoose");
const employeeRouter = require("./routes/employee");

const app = express();

app.use(bodyParser.json());
app.use(employeeRouter);

app.listen(9000, async () => {
  console.log("Server is started at port 9000");
  console.log("Running the database Connection");
  await connect();
});
