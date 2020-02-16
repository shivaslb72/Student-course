const express = require("express");
const router = express.Router();
const studentsController = require("../app/controllers/studentsController");

const { checkStudentDepartment } = require("../app/middlewares/validity");
//router level
router.get(
  "/students/:id/departments/:departmentId",
  checkStudentDepartment,
  studentsController.departmentInfo
);

router.get("/students", studentsController.list);
router.get("/students/:id", studentsController.show);

module.exports = router;
