const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

const setupDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/oct-Student", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .then(() => {
      console.log("connected to DB");
    });
};

module.exports = setupDB;
