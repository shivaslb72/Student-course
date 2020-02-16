const Student = require("../models/student");

module.exports.checkStudentDepartment = (req, res, next) => {
  const id = req.params.id;
  const departmentId = req.params.departmentId;

  Student.findById(id).then(student => {
    if (student.department == departmentId) {
      next();
    } else {
      res.send("student dose not belogs to the department");
    }
  });
};
