// Create Dependencies
const express = require("express");
const morgan = require("morgan");

// Create Variables for 'app' and 'PORT'
const app = express();
const PORT = 3000;

// Add Middleware
app.use(morgan('combined'));

// Server
app.listen(PORT, () =>{
    console.log(`The server is listening on port ${PORT}`);
});

// Create GET routes
app.get("/", (request, response) => {
    response.send("This route points to the Home page");
})
app.get("/about", (request, response) => {
    response.send("This route points to the About page");
})
app.get("/login", (request, response) => {
    response.send("This route points to the Login page");
})
app.get("/activities", (request, response) => {
    response.send("This route points to the Activities page");
})
app.get("/register", (request, response) => {
    response.send("This route points to the Registration page");
})