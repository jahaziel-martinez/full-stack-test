"use strict";

import express from "express";
import sqlite3 from "sqlite3";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Test.
app
  .route("/api/v1")
  .get((req, res) => {
    // Connecting to DB.
    const db = new sqlite3.Database("src/db/full-stack-test.db", (err) => {
      if (err) {
        console.error("Error connecting to full-stack-test DB.", err.message);
        res.status(500).send();
      }
      console.log("Connected to the full-stack-test SQlite database.");
    });
    // Querying user table.
    const sql = `SELECT * FROM user`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(500).send();
      }
      res.status(200).send(rows);
    });
  })
  .post((req, res) => {
    // Connecting to DB.
    const db = new sqlite3.Database("src/db/full-stack-test.db", (err) => {
      if (err) {
        console.error("Error connecting to full-stack-test DB.", err.message);
        res.status(500).send();
      }
      console.log("Connected to the full-stack-test SQlite database.");
    });
    // Inserting new row into user table.
    const sql = `
        INSERT INTO user (id, name, user_type_id, company_id) 
        VALUES (?, ?, ?, ?)
    `;
    db.run(sql, req.body, function (err) {
      if (err) {
        console.error("Error inserting data into user table.", err.message);
        res.status(400).send();
      }
      res.status(201).send();
    });
  });

app.listen(port, () => {
  console.log("RESTful API server started on: " + port);
});
