const express = require("express");
const setupDB = require("./config/database");
const router = require("./config/route");
const app = express();
const port = 5000;
setupDB();
app.use(express.json());
//Request handler
// app.get(
//   "/message",
//   (req, res, next) => {
//     const msg = "hi there";
//     req.msg = msg;
//     console.log("middleware function 1");
//     next();
//   },

//   (req, res) => {
//     console.log("request handler");
//     res.send(req.msg);
//   }
// );
// Application level - logging perpouse
app.use((req, res, next) => {
  console.log(`${req.url}-${req.method}-${new Date()}`);
  next();
});
app.use("/", router);

app.listen(port, () => {
  console.log("listining to the port", port);
});
