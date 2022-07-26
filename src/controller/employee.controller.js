const { sequelize, Sequelize } = require("../../models/index");
const empModel = require("../../models/employee")(sequelize, Sequelize);

function EmployeeController() {
  (this.name = "Inside Employees Controller"),
    //! 🔴GET
    //getEmployees
    (this.getEmployees = async (ctx, next) => {
      console.log(this.name, "@GET");
      const user = await empModel.findAll({
        attributes: ["emp_id", "employee_name", "employee_company_id"],
      });
      ctx.body = user;
      next();
    }),
    //getCompanies with id
    (this.getEmployee = async (ctx, next) => {
      console.log(this.name, "@GET");
      const user = await companyModel.findAll({
        attributes: ["com_id", "company_name"],
      });
      ctx.body = user;
      next();
    }),
    //getCompanies with query
    (this.getEmployeeWithQuery = async (ctx, next) => {
      console.log(this.name, "@GET");
      const user = await companyModel.findAll({
        attributes: ["com_id", "company_name"],
      });
      ctx.body = user;
      next();
    }),
    //! POST
    //add company
    (this.addEmployee = async (ctx, next) => {
      console.log(this.name, "@POST");
      const body = ctx.request.body;

      const res = await empModel.bulkCreate([body]);
      ctx.body = res;
      next();
    }),
    //! PUT
    //update with query
    (this.updateEmployee = () => {
      console.log(this.name, "@UPDATE");
    }),
    //update with id
    (this.updateEmployeeWithId = () => {
      console.log(this.name, "@UPDATE");
    }),
    //!DELETE
    //delete with query
    (this.deleteEmployee = () => {
      console.log(this.name, "@DELETE");
    }),
    //delete with id
    (this.deleteEmployeeWithId = () => {
      console.log(this.name, "@DELETE");
    });
}

module.exports = new EmployeeController();
