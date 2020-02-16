const Student = require("../models/student");

module.exports.departmentInfo = (req, res) => {
  res.send("send back course information");
};

module.exports.list = (req, res) => {
  Student.find().then(students => res.json(students));
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Student.findById(id).then(student => res.json(student));
};
