// npm packages and configured server items 
const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const routes = require("./routes");
// Express App
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") { 
  app.use(express.static("client/build")); 
}

// Passport 
app.use(session({ 
  secret: "keyboard cat", 
  resave: false, 
  saveUninitialized: false 
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

// Syncing our database
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log( "Listening on port.");
    });
  });