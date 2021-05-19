const passport = require("../../config/passport");
const router = require("express").Router();
const db = require("../../models/")

// signup 
router.post("/signup", (req, res) => {
  db.User.create(req.body)
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

// log in 
router.post("/login", (req, res, next) => {
  passport.authenticate('local',
    (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          delete req.user.password;
          res.send(req.user) //specify what sending 
        });
      }
    })(req, res, next);
});

// Route for logging user out
router.get("/logout", function (req, res) {
  req.logout();
});

// Get Logged in user
router.get("/userdata", function (req, res) {
  console.log(res)
  if (!req.user) {
    res.json({});
  } else {
    res.json(
      req.user
    );
  }
});


module.exports = router;