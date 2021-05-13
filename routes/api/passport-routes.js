// Requiring our models and passport as we've configured it

const passport = require("../../config/passport");
const router = require("express").Router();
const db = require("../../models/")
// const opusController = require("../../controllers/opusControllers");
  
//  // log in 
//  router.post("/api/login", passport.authenticate("local"), function(req, res) {
//   db.User.findOne({
//     where: {
//       email: req.body.email
//     }
//   })
// });

  // signup 
  router.post("/signup", (req, res) => {
    db.User.create({ })
      .then(() => {
        res.redirect(307, "https://www.google.com/");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  
  // router.route("/existing").get(
  //   db.User.findAll({})
  //   .then(dbModel => res.json(dbModel))
  //   .catch(err => res.status(422).json(err))
  
  // )

//  .get(opusController.allUsers)

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

module.exports = router;