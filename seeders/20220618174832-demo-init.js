"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("companies", [
      {
        com_id: 1,
        company_name: "GCT pvt ltd",
      },
    ]);

    await queryInterface.bulkInsert("employees", [
      {
        emp_id: 1,
        employee_name: "John Doe",
        employee_company_id: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("company", null, {});
    await queryInterface.bulkDelete("employee", null, {});
  },
};
