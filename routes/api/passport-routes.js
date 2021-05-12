// Requiring our models and passport as we've configured it
const passport = require("../../config/passport");
const router = require("express").Router();
const db = require("../../models/")
// const opusController = require("../../controllers/opusControllers");
  
// log in 
//  router.post("/login/:email", passport.authenticate("local"), function(req, res) {
//   db.User.findOne({
//     where: {
//       email: req.body.email
//     }
//   })
// });

  // signup 
  router.post("/signup", (req, res) => {
    console.log(req.body)
    db.User.create({
      first_name: req.body.first_name, 
      last_name: req.body.last_name,
      email: req.body.email, // need to set rules for unique log in
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/account"); // not redirecting
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

    // // Route for logging user out
  // app.get("/logout", function(req, res) {
  //   req.logout();
  //   res.redirect("/");
  // });

//   Route for getting some data about our user to be used client side
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

  /////////////////////////////// Routes to see our data stored - Not necessarily needed for the functionality of passport, but unsure on that one

  // shows all users if visit http://localhost:3001/api/user/existing
  router.get("/existing", (req, res) => {
    db.User.findAll({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  })

  // works if enter the route in browswer: http://localhost:3001/api/user/login/jacqueline.ross09@gmail.com
router.get("/login/:email", (req, res) => {
  db.User.findOne({
    where: {
      email: req.params.email
    }
  })
  .then(dbUser => res.json(dbUser))
})


module.exports = router;