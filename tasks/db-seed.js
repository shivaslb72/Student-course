const mongoose = require("mongoose");
const faker = require("faker");
const Department = require("../app/models/department");
const Student = require("../app/models/student");

mongoose
  .connect("mongodb://localhost:27017/oct-Student", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("connected to DB");
    const departments = [
      "computerscience",
      "commerce",
      "mechanical",
      "electronics and communication"
    ];
    departments.forEach(function(dept) {
      const department = new Department({ name: "dpt" });

      department.save().then(dept => {
        for (let i = 0; i < 10; i++) {
          const student = new Student({
            name: faker.name.findName(),
            department: dept._id,
            email: faker.internet.email()
          });
          student.save().then(() => {
            console.log(student.name, "saved");
          });
        }
      });
    });
  });

// const Department = new Department({ name: dept });

// departments.save().then(dept => {
//   for (let i = 0; i < 10; i++) {
//     const students = new Student({
//       name: faker.name.firstName(),
//       email: faker.internet.email()
//     });
//     students
//       .save()
//       .then(() => {
//         console.log(students.name, "saved");
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
// });
