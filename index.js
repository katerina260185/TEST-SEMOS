const express = require ("express");
const config = require("./pkg/config");
require("./pkg/db");

const api = express()
api.use(express.json()); 

const {
    createUiversity,
    removeUniversity,
    updateUniversity,
    getAllUniversities
} = require ("./handlers")

api.get("/api/universities", getAllUniversities);

api.post("/api/universities", createUiversity);

api.put("/api/universities/:id", updateUniversity);

api.delete("/api/universities/:id", removeUniversity);


api.listen(config.get("development").port, (err) => {
    err
      ? console.log(err)
      : console.log(`Serverot e spremen na porta: ${config.get("development").port} GOOD LUCK !!!`);
  });