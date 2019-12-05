//mport { request } from "http";
console.log('Client side js is loaded')
//const request = require('request')
//const https = require('https')

/* Global Variables */

// function to take user zipcode
// function to take user feelings
const searchForm = document.querySelector('form')
const searchZip = document.querySelector('input')
const feelingSearch = document.querySelector('textarea')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const zipcode = searchZip.value
    const fs = feelingSearch.value


    fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&APPID=31ccdce38d7be8cba4e13d567e1d43db&units=imperial').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

    console.log(zipcode)
    console.log(fs)
})




// below used to concat into a url with api
// const location = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&APPID=31ccdce38d7be8cba4e13d567e1d43db'
// const weatherURL = location

// // requesting weather from open weather
// request({url: weatherURL, json: true}, (error, response) => {
//     console.log(response.body.main.temp)
// })


// Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



