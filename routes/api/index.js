const router = require("express").Router();
const  userBooks = require("./book");
const user = require("./passport-routes")

// Book routes
router.use("/books", userBooks);
router.use("/user", user); 

module.exports = router;