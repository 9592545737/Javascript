// Init storage class
const storage = new Storage();

// Get stored lOcation data
const weatherLocation = storage.getLocationData();

// Init Weather class
const weather = new Weather(weatherLocation.country, weatherLocation.pCode);

// Init UI Class
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const country = document.getElementById('city').value;
  const pCode = document.getElementById('state').value;

  // Change Location
  weather.changeLocation(country, pCode);

  // Set Location in LS
  storage.setLocationData(country, pCode);
  
  //Get Weather after changing location
  getWeather();

  // Close Modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results, weather.country, weather.pCode);
    })
    .catch(err => console.log(err));
}