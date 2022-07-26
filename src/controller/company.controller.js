//* connected sequelize instance(with db)
const { sequelize, Sequelize } = require("../../models/index");

//* 🔴requiring model definition and passing sequelize(with our database gets connected) and Sequelize(in which datatypes are defined)
const companyModel = require("../../models/company")(sequelize, Sequelize);

function CompanyController() {
  (this.name = "Inside Companies Controller"),
    //! GET
    //getComapanies
    (this.getCompanies = async (ctx, next) => {
      console.log(this.name, "@GET all ");

      //* if hooks throws the error from validations then it can be catch
      try {
        const user = await companyModel.findAll({
          attributes: ["com_id", "company_name"],
        });
        ctx.body = user;
      } catch (err) {
        ctx.body = err;
      }
      next();
    }),
    //getCompanies with id
    (this.getCompany = async (ctx, next) => {
      console.log(this.name, "@GET with id");

      const param = ctx.request.params.id;

      //* if hooks throws the error from validations then it can be catch
      try {
        const user = await companyModel.findAll({
          where: {
            com_id: param,
          },
          attributes: ["com_id", "company_name"],
        });
        ctx.body = user;
      } catch (err) {
        ctx.body = err;
      }

      next();
    }),
    //getCompanies with query
    (this.getCompanyWithQuery = async (ctx, next) => {
      console.log(this.name, "@GET with Query");

      const query = ctx.request.query;

      //* if hooks throws the error from validations then it can be catch
      try {
        const user = await companyModel.findAll({
          where: query,
          attributes: ["com_id", "company_name"],
        });
        ctx.body = user;
      } catch (err) {
        ctx.body = err;
      }
      next();
    }),
    //! POST
    //add company
    (this.addCompany = async (ctx, next) => {
      console.log(this.name, "@POST");

      //🔴This can be achived using koa-body in router
      const body = ctx.request.body;

      //* if hooks throws the error from validations then it can be catch
      try {
        const res = await companyModel.bulkCreate([body], {
          individualHooks: true,
        });
        ctx.body = res;
      } catch (err) {
        ctx.body = err;
      }

      next();
    }),
    //! PUT
    //update with query
    (this.updateCompany = () => {
      console.log(this.name, "@UPDATE");
    }),
    //update with id
    (this.updateCompanyWithId = () => {
      console.log(this.name, "@UPDATE");
    }),
    //!DELETE
    //delete with query
    (this.deleteCompany = () => {
      console.log(this.name, "@DELETE");
    }),
    //delete with id
    (this.deleteCompanyWithId = () => {
      console.log(this.name, "@DELETE");
    });
}

module.exports = new CompanyController();
