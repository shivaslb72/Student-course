const mongoose = require("mongoose");
const Department = require("../app/models/department");
const Student = require("../app/models/student");

mongoose
  .connect("mongodb://localhost:27017/oct-Student", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("connected to DB");
    Department.deleteMany({}).then(() => {
      console.log("Department documents removed");
    });
    Student.deleteMany({})
      .then(() => {
        console.log("students documents removed");
      })
      .catch(err => {
        console.log(err);
      });
  });
