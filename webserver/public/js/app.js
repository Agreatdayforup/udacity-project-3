import { request } from "http";
const request = require('request')
const https = require('https')

/* Global Variables */

// function to take user zipcode
const search = document.querySelector('input')
const zipcode = search.value
// below used to concat into a url with api
const location = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&APPID=31ccdce38d7be8cba4e13d567e1d43db'
const weatherURL = location

// requesting weather from open weather
request({url: weatherURL, json: true}, (error, response) => {
    console.log(response.body.main.temp)
})


// Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



