const mongoose = require("mongoose");
// const Department = require("./department");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department"
  }
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
