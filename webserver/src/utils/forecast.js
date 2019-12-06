const request = require('request')

const forecast = (zipcode, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&APPID=31ccdce38d7be8cba4e13d567e1d43db'

    request({ url: url, json: true}, (error, { body }) => {
        if (error) {
            callback('unable to connect to weather service!', undefined)
        } else if (body.error) {
             callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.main[2].temp + ' degrees outside')
        }
    })
}

module.exports = forecast