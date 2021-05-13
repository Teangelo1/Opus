const passport = require("../../config/passport");
const router = require("express").Router();
const db = require("../../models/")
// const opusController = require("../../controllers/opusControllers");

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
 router.post("/login", (req, res) => {
   passport.authenticate(
  function(email, password, done) {
    db.User.findOne({ email: email }, 
      function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
);
 })

 // Route for logging user out
  router.get("/logout", function(req, res) {
    req.logout();
  });
  
  // router.route("/existing").get(
  //   db.User.findAll({})
  //   .then(dbModel => res.json(dbModel))
  //   .catch(err => res.status(422).json(err))
  
  // )

//   // Route for getting some data about our user to be used client side
//   app.get("/api/user_data", function(req, res) {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     } else {
//       // Otherwise send back the user's email and id
//       res.json({
//         email: req.user.email,
//         id: req.user.id
//       });
//     }
//   });
// };

module.exports = router;