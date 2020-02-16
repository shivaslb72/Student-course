const mongoose = require("mongoose");
// const Department = require("./department");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department"
  }
});

const Course = mongoose.model("Department", courseSchema);
module.exports = Course;
