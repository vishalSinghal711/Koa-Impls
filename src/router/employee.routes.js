const koaRouter = require("koa-router");
//router for KOA
const empRouter = koaRouter();
//🔴Helps to fetch body from request
const koaBody = require("koa-body")();
const {
  getEmployee,
  getEmployees,
  getEmployeeWithQuery,
  addEmployee,
  updateEmployee,
  updateEmployeeWithId,
  deleteEmployee,
  deleteEmployeeWithId,
} = require("../controller/employee.controller");

//3 types of get requests
empRouter.get("/employee/:id", getEmployee);
empRouter.get("/employees", getEmployees);
empRouter.get("/employee", getEmployeeWithQuery);

// post request
//🔴 Pass koaBody where body of request needed
empRouter.post("/addEmployee", koaBody, addEmployee);

//put request to update
//🔴 Pass koaBody where body of request needed
empRouter.put("/updateEmployee/:id", koaBody, updateEmployeeWithId);
empRouter.put("/updateEmployee", koaBody, updateEmployee);

//delete
empRouter.delete("/deleteEmployee/:id", deleteEmployeeWithId);
empRouter.delete("/deleteEmployee/", deleteEmployee);

module.exports = empRouter;
