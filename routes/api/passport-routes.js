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
router.post("/login",(req, res, next) => {
  //console.log(req.body)
  passport.authenticate('local',
  (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        console.log('logged in ', req.user);
        res.send(req.user) //specify what sending 
      }); 
    }
  })(req, res, next);
});

// Route for logging user out
router.get("/logout", function (req, res) {
  req.logout();
});

// router.route("/existing").get(
//   db.User.findAll({})
//   .then(dbModel => res.json(dbModel))
//   .catch(err => res.status(422).json(err))

// )

// working
  // Route for getting some data about our user to be used client side
  router.get("/userdata", function(req, res) {
    console.log(res)
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      res.json(
      req.user
      );
    }
  });


module.exports = router;