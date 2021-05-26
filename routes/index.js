const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// using api path
router.use("/api", apiRoutes);
  
module.exports = router;