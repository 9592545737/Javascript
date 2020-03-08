class Weather {
  constructor(city, state) {
    this.apiID = '85b23013';
    this.apikey = '8bd25154ab252f12ef39fb1d442d92a6';
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(`http://api.weatherunlocked.com/api/trigger/{Location}/{DataType} {Element} {TimePeriod} {Operator} {Value}?app_id={APP_ID}&app_key={APP_KEY}${apiID}&${apikey}.json`);


    const responseData = await response.json();
    return responseData;
  }

  // Change Location 
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}