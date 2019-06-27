const request = require('request');

const url = 'https://api.darksky.net/forecast/99713afcac68f6144b7063925f764289/37.8267,-122.4233';
const mapboxurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaXNpbW9ueGQiLCJhIjoiY2p4ZHdyYXFtMGlzdDN6bnYxYmZmcW8waCJ9.fqxq_9PIt2YLJOXSzYuY3Q';


request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})