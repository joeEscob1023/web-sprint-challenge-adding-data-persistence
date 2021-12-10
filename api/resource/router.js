// build your `/api/resources` router here
const express = require("express");
const router = express.Router();
const resources = require("./model");

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong in the Project router",
    message: err.message,
  });
});

router.post("/resources", (req, res, next) => {
  //add code here
});

module.exports = router;
