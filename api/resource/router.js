// build your `/api/resources` router here
const router = require("express").Router();
//const Rosource = require("./model");

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong in the Project router",
    message: err.message,
  });
});

module.exports = router;
