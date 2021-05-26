//Init storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();
//init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//init UI
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.querySelector('#w-change-btn').addEventListener('click', (e)=>{
  const city = document.querySelector('#city').value;
  const country = document.querySelector('#country').value;

  //Change location
  weather.changeLocation(city, country);

  //set location in local storage
  storage.setLocationData(city, country)
  //Get and display weather on change
  getWeather();

  //Close modal
  $('#locModal').modal('hide');
});

// weather.changeLocation('miami')

function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paint(results)

  })
  .catch(err => console.log(err))
}