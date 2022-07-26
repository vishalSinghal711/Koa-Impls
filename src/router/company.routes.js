const koaRouter = require("koa-router");
//router for KOA
const comRouter = koaRouter();
//🔴Helps to fetch body from request
const koaBody = require("koa-body")();
const {
  getCompany,
  getCompanies,
  getCompanyWithQuery,
  addCompany,
  updateCompany,
  updateCompanyWithId,
  deleteCompany,
  deleteCompanyWithId,
} = require("../controller/company.controller");

//3 types of get requests
comRouter.get("/company/:id", getCompany);
comRouter.get("/companies", getCompanies);
comRouter.get("/company", getCompanyWithQuery);

// post request
//🔴 Pass koaBody where body of request needed
comRouter.post("/addCompany", koaBody, addCompany);

//* 🟢Use PATCH INstead for Shallow Merging
//put request to update
//🔴 Pass koaBody where body of request needed
comRouter.put("/updateCompany/:id", koaBody, updateCompanyWithId);
comRouter.put("/updateCompany", koaBody, updateCompany);

//* 🟢Use Soft Delete using isActive one more column -> means update isActive to false
//delete
comRouter.delete("/deleteCompany/:id", deleteCompanyWithId);
comRouter.delete("/deleteCompany/", deleteCompany);

module.exports = comRouter;
