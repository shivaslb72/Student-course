const faker = require("faker");

for (let i = 0; i < 200; i++) {
  console.log(faker.name.findName());
}
