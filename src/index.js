import { getWeatherData } from "./modules/api.js";

getWeatherData('Calgary')
  .then((response) => {
    console.log(response);
  })