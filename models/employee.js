"use strict";

//🔴Model for Employee - provides orm support with relational database
module.exports = (sequelize, Sequelize) => {
  //! Table name must be matched with the table name in actual db
  const Employee = sequelize.define("employees", {
    emp_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    employee_name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    employee_company_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "company",
        key: "com_id",
      },
    },
  });
  return Employee;
};
