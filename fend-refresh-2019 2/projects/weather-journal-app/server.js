const path = require('path')
// Require Express to run server and routes
const express = require('express')
const app = express()
// Setup empty JS object to act as endpoint for all routes
projectData = {};




// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors')


// Initialize the main project folder
const publicDirectoryPath = path.join(__dirname, '../website')
app.use(express.static('publicDirectoryPath'));




app.get('', (req, res) => {
    res.send('Hello express!')
})

// Setup Server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})