const express = require("express");
const cors = require("cors");

const connect = require("./configs/db");
const { register, login, newToken } = require("./controllers/auth.controller");
const test = require("./controllers/testController")

const app = express();
app.use(express.json());

let port = process.env.PORT || 2348;


app.use(cors());


// register
app.post("/register", register);
// .login
app.post("/login", login);

app.use("/test" , test)

app.listen(port, async (req, res) => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
  console.log("working");
});
