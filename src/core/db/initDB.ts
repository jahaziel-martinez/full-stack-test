"use strict";

import sqlite3 from "sqlite3";

const db = new sqlite3.Database("src/core/db/full-stack-test.db", (err) => {
  if (err) {
    return console.error("Error opening database.", err.message);
  }
  console.log("Connected to the full-stack-test SQlite database.");
});

db.serialize(() => {
  // Init company table.
  initCompanyTable();

  // Init user_type table.
  initUserTypeTable();

  // Init user table.
  initUserTable();
});

function initCompanyTable() {
  db.run("CREATE TABLE company(id integer, name text)", function (err) {
    if (err) {
      return console.log("Error creating company table.", err.message);
    }
    console.log("company table was created.");
  });

  db.run(
    `
      INSERT INTO company (id, name) 
      VALUES
          (1, "Oracle"),
          (2, "Amazon"),
          (3, "Google"),
          (4, "Microsoft")
    `,
    function (err) {
      if (err) {
        return console.log("Error inserting data into company table.", err.message);
      }
      // get the last insert id
      console.log("company table was initialized.");
    }
  );
}

function initUserTypeTable() {
  db.run("CREATE TABLE user_type(id integer, name text)", function (err) {
    if (err) {
      return console.log("Error creating user_type table.", err.message);
    }
    console.log("user_type table was created.");
  });

  db.run(
    `
      INSERT INTO user_type (id, name) 
      VALUES
          (1, "Employee"),
          (2, "Customer"),
          (3, "Partner")
    `,
    function (err) {
      if (err) {
        return console.log("Error inserting data into user_type table.", err.message);
      }
      // get the last insert id
      console.log("user_type table was initialized.");
    }
  );
}

function initUserTable() {
  db.run("CREATE TABLE user(id integer, name text, user_type_id integer, company_id integer)", function (err) {
    if (err) {
      return console.log("Error creating user table.", err.message);
    }
    console.log("user table was created.");
  });

  db.run(
    `
      INSERT INTO user (id, name, user_type_id, company_id) 
      VALUES
          (1, "Liam Smith", 1, 1),
          (2, "Noah Johnson", 2, 3),
          (3, "Oliver Wilson", 1, 3),
          (4, "Sophia Miller", 2, 1),
          (5, "Benjamin Taylor", 2, 2),
          (6, "Charlotte Miller", 1, 1),
          (7, "Amelia Harris", 2, 3),
          (8, "Evelyn Brown", 2, 4),
          (9, "Alexander Davis", 1, 2),
          (10, "Ava Lee", 2, 1)
    `,
    function (err) {
      if (err) {
        return console.log("Error inserting data into user table.", err.message);
      }
      // get the last insert id
      console.log("user table was initialized.");
    }
  );
}
