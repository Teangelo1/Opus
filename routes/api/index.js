const router = require("express").Router();
const  userBooks = require("./books");

// Book routes
router.use("/books", userBooks);

module.exports = router