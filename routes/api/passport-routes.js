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
 router.post("/login", (req, res, next) => {
   console.log(req.body)
   next();
 },
   passport.authenticate('local'),
   (req, res) => {
     const user = {
       id: req.user.id,
       first_name: req.user.first_name, 
       last_name: req.user.last_name, 
       email: req.user.email,
     }
     console.log(user.first_name + " " + user.last_name + " logged in")
     res.send(user);
}
 );
 
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