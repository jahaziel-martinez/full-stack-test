"use strict";

import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// e.g.
app
  .route("/api/v1")
  .get((req, res) => {
    console.debug("Testing");
    res.send();
  });

app.listen(port, () => {
  console.log("RESTful API server started on: " + port);
});
