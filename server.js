// npm packages and configured server items 
const express = require("express");
// const cors if we want fb eventually 
const session = require("express-session");
const passport = require("./config/passport");
// will need strategies from each place
// will need a key folder and keys for log ins 
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
  resave: false, 
  saveUninitialized: false 
}));

app.use( (req, res, next) => {
  console.log('req.session', req.session);
  return next();
});

app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Syncing our database
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log( "Listening on port %s.", PORT);
    });
  });