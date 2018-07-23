const https = require('https');
const api = require ("./api.json")

//Print out temp details
function printWeather(res_body){
    const message = `Current temperature in ${res_body.name} is ${res_body.main.temp}C`;
    console.log(message);
}
// Print out error message
function printEror(error){
    console.error(error.message);
}

function get(query) {
    try{
        const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${api.key}`, response => {
        let body = "";

        //Read the data 
        response.on('data', data => {
            body+=data;
        });

        response.on('end', ()=>{
            const res_body = JSON.parse(body);
            if(res_body.name){
            printWeather(res_body);}
            else{
                console.log(`There is no such place: ${query}. Please retry...`)
            }
        });
    
    });
} catch(error){
    printEror(error);
}
};

module.exports.get = get;

//ToDo: Handle the Errors