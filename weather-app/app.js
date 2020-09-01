const request = require("request")

const url = "http://api.weatherstack.com/current?access_key=13ce70dbdb8a262b03f1d61ed55dbb8f&query=37.8267,-122.4233&units=f"

request({url: url, json: true}, (error,response) => {
    // console.log(response.body.current)
    console.log("It is currently " + response.body.current.temperature + " degress out. It feels like " + response.body.current.feelslike) +  "degress out"
})



