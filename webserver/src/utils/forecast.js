const request = require('request')

const forecast = (zipcode, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&APPID=31ccdce38d7be8cba4e13d567e1d43db'

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body,daily.data[0].summary + 'There is a ' + response.body.currently.precipProbability + '% chance of rain' +  ' It is currently ' + response.body.currently.temperature + ' degrees out!')
        }
    })
}

module.exports = forecast