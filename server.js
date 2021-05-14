// npm packages and configured server items 
const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const routes = require("./routes");

// Establishing Connections and Requring Models 
const PORT = process.env.PORT || 3001;
const db = require("./models");




// Express App
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") { app.use(express.static("client/build")); }


// Passport 
app.use(session({ 
  secret: "keyboard cat", 
  resave: true, 
  saveUninitialized: true 
}));

app.use(passport.initialize());
app.use(passport.session());


// Add routes, both API and view
app.use(routes);


// app.get('/books', function (req, res) {
//   // Connecting to the database.
//   connection.getConnection(function (err, connection) {

//   // Executing the MySQL query (select all data from the 'users' table).
//   connection.query('SELECT * FROM books', function (error, results, shelf) {
//     // If some error occurs, we throw an error.
//     if (error) throw error;

//     // Getting the 'response' from the database and sending it to our route. This is were the data is.
//     res.send(results) 
//     console.log(results)
//   });


// });
// });



// Syncing our database
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log( "Listening on port %s.", PORT);
    });
  });