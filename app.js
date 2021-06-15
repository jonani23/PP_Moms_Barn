// Create Dependencies
const express = require("express");
const morgan = require("morgan");

// Create Variables for 'app' and 'PORT'
const app = express();
const PORT = 3000;

// Add Middleware
app.use(morgan('combined'));

// Add Path module
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');



// Server
app.listen(PORT, () =>{
    console.log(`The server is listening on port ${PORT}`);
});


// Updating Route Handlers(using render)
app.get('/', (request, respond) => {
    respond.render('pages/index');
});

app.get('/about', (request, respond) => {
    respond.render('pages/about')
});

app.get('/login', (request, respond) => {
    respond.render('pages/login')
});

app.get('/registration', (request, respond) => {
    respond.render('pages/register')
});

app.get('/activities', (request, respond) => {
    respond.render('pages/activities');
});


// GET routes with Params

