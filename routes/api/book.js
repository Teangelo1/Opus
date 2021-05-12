// import DB from '../..//db'

const router = require("express").Router();
const { response } = require("express");
const opusController = require("../../controllers/opusControllers");


const db = require("../../models/book")

// // Matches with "/api/books"
router.route("/")
  .get(opusController.findAll)
  .post(opusController.create); // add to a page? may not need 

  router.get('/api/bookshelf', (req, res) => {
    console.log(req.body)
    db.Book.findAll({
      where: {
        shelf: req.body.shelf
      }
    }).then(response => {
      return res.render("results", {
        results: response
      })
    })
    console.log(response)
  }) // look at activity 13 post routes for giving user an ID

  router.get('/api/bookshelf/:id', (req, res) => {
    db.Book.findById({
      where: {
        id: req.body.id,
        shelf: req.body.shelf // may have to associate shelf with user with FK that references the users PK
      }
    }).then(response => {
      return res.render("results", {
        results: response
      })
    })
  })

  // may need route that grabs by id

 router.post("/api/bookshelf", (req, res) => {
    console.log("events-api.js app post route fired");
    console.log(req.body);
    db.Book.create({
      title: req.body.title,
      
    });
  });

  // })

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(opusController.findById)
//   .put(opusController.update) // would update status of reading or review
//   .delete(opusController.remove);

// module.exports = (app) => {
//   app.get("/api/books", (req, res) => {
//     db.book.findAll({})
//     .then((dbRoute) => {
//       res.json(dbRoute); 
//     })
//   })
// }
module.exports = router;