//mport { request } from "http";
console.log('Client side js is loaded')



/* Global Variables */

// const to take user zipcode and user feelings
const searchForm = document.querySelector('form')
const searchZip = document.querySelector('input')
const feelingSearch = document.querySelector('textarea')

const userTemp = document.querySelector('#temp')
const userDate = document.querySelector('#date')
const userContent = document.querySelector('#content')



searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const zipcode = searchZip.value
    const fs = feelingSearch.value

    fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&APPID=31ccdce38d7be8cba4e13d567e1d43db&units=imperial').then((response) => {
        response.json().then((data) => {
            console.log(data) 
            if (data.error) {
                
            } else {
            userTemp.textContent = 'The temperature for ' + zipcode + ' is ' + data.forecast + '.'
            userContent.textContent = fs
            }
    })
})

    console.log(zipcode)
    console.log(fs)
})


// Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



