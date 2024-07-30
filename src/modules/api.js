const API_KEY = '66YZUMG2MZXUJZPLALPQ4KAEQ';

function getWeatherData(location){
  return new Promise(function(resolve, reject){
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`)
    .then(
      (response) => response.json()
    )
    .then(
      (response) => {
        console.log(response);
        resolve({
          feelslike: response.currentConditions.feelslike,
          cloudcover: response.currentConditions.cloudcover,
          temp: response.currentConditions.temp,
          humidity:  response.currentConditions.humidity,
          conditions: response.currentConditions.conditions,
          precip: response.currentConditions.precip,
        })
      }
    )
    .catch(
      (response) => {
        reject(response);
      }
    )
  })
  
}

export {getWeatherData}