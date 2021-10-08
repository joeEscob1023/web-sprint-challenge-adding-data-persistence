// build your `/api/projects` router here
const router = require("express").Router();
const Project = require("./model");

router.get("/:project_id", (req, res, next) => {
  Project.getProjectById(req.params.project_id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong in the Project router",
    message: err.message,
  });
});

module.exports = router;
