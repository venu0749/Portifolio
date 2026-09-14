const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const getProjectsFilePath = () => {
  if (process.env.PROJECTS_FILE) {
    return path.isAbsolute(process.env.PROJECTS_FILE)
      ? process.env.PROJECTS_FILE
      : path.resolve(__dirname, "..", process.env.PROJECTS_FILE);
  }
  return path.join(__dirname, "../data/projects.json");
};

router.get("/", (req, res, next) => {
  try {
    const filePath = getProjectsFilePath();
    const data = fs.readFileSync(filePath, "utf8");
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    next(error);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    const filePath = getProjectsFilePath();
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const project = data.find(
      (p) => String(p.id) === String(req.params.id)
    );

    if (!project) {
      return res.status(404).json({
        error: "Project not found",
      });
    }

    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
