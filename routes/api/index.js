const router = require("express").Router();
const  userBooks = require("./book");
const user = require("./passport-routes")

// Book Routes
router.use("/books", userBooks);

// User Routes
router.use("/user", user); 

module.exports = router;
