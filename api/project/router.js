// build your `/api/projects` router here
const router = require("express").Router();
const Project = require("./model");

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong in the recipes router",
    message: err.message,
  });
});

module.exports = router;
