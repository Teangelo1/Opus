const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// using api path
router.use("/api", apiRoutes);

// using client
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;