"use strict";
const migrations = {
  //this is a function 1 UP
  //used to create the table formed
  up: async function (queryInterface, Sequelize) {
    //Function 2 : create table Company
    await queryInterface.createTable("companies", {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    //Function 1 : create table Employee
    await queryInterface.createTable("employees", {
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
          model: "companies",
          key: "com_id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  //this is a function 2  down
  // this is used to delete the tables formed
  down: async function (queryInterface, Sequelize) {
    //drop table Employee
    await queryInterface.dropAllTables();

    // //drop table Company
    // await queryInterface.dropTable("Company");
  },
};

module.exports = migrations;
