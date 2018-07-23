const weather = require('./weather-app-api');
// Join Multiple Values passed as arguments and replace all the spaces with underscores
const query = process.argv.slice(2).join(',').replace(' ',",");

weather.get(query);