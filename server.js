const express = require('express');
const routes = require('./routes');
const session = require('express-session');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const path = require('path');
const helpers = require('./utils/helpers')
require('dotenv').config();

// import sequelize connection

const app = express();
const PORT = (process.env.PORT || 3001);

const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: true,
}

app.use(session(sess));

const hbs = exphbs.create({helpers});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// app.set('view options', {layout: 'main'});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });