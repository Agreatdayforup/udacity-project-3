const path = require('path')
const bodyParser = require('body-parser')

// Require Express to run server and routes
const express = require('express')
const app = express()

const forecast = require('./utils/forecast')


// Setup empty JS object to act as endpoint for all routes
//projectData = {};



// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors')


// Initialize the main project folder setsup static directory 
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))
console.log(path.join(__dirname, '../public'))




// Setup Server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

