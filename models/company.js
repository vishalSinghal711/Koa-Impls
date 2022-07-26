"use strict";
//🔴Model for Company - provides orm support with relational database
module.exports = (sequelize, Sequelize) => {
  //! Table name must be matched with the table name in actual db
  const Company = sequelize.define(
    "companies",
    {
      com_id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      hooks: {
        //USE MORE HOOKS

        //* Automatically called with every lifecycle change of object
        beforeCreate: async function (company) {
          //🔴Can be used for validations
          /** 🔴if(user.accessLevel > 10 && user.username !== "Boss") {
                    throw new Error("You can't grant this user an access level above 10!");
                } 
            */
          console.log(
            "Before company Create Called ",
            `${company.com_id}`,
            `${company.company_name}`
          );
        },
        afterCreate: async function (company) {
          //🔴Can be used for performing some action just after the created instance
          console.log("After company Create Called");
        },
      },
    }
  );
  return Company;
};
