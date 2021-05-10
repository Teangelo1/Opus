// Requiring our models and passport as we've configured it
const db = require("../../models");
const passport = require("../../config/passport");
const router = require("express").Router();
const opusController = require("../../controllers/opusControllers");
  
    // log in 
  // app.post("/api/login", passport.authenticate("local"), function(req, res) {
  //   res.json(req.user);
  //   // redirect function to bookshelf page?
  // });

  // signup 
  router.route("/signup")
  .post(opusController.newUser);
  
  // app.post("/api/signup", function(req, res) {
  //   db.User.create({
  //     email: req.body.email,
  //     password: req.body.password
  //   })
  //     .then(function() {
  //       res.redirect(307, "/api/login"); // redirect to member prefrences page? 
  //     })
  //     .catch(function(err) {
  //       res.status(401).json(err);
  //     });
  // });

  // // Route for logging user out
  // app.get("/logout", function(req, res) {
  //   req.logout();
  //   res.redirect("/");
  // });

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