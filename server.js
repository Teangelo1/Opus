// npm packages and configured server items 
const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const routes = require("./routes");
const path = require("path");

const PORT = process.env.PORT || 3001;
const db = require("./models");

// Express App
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Passport 
app.use(session({ 
  secret: "keyboard cat", 
  resave: false, 
  saveUninitialized: false 
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

if (process.env.NODE_ENV==='production'){
  // set a static folder 
  app.use(express.static('client/build'))
  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}
// Syncing our database
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log( "Listening on port %s.");
    });
  });
  