class Weather{
  constructor(country, pCode) {
    this.apiID = '85b23013';
    this.apikey = '8bd25154ab252f12ef39fb1d442d92a6';
    this.country = country;
    this.pCode = pCode;        
  }

  async getWeather() {
    const response = await fetch(`http://api.weatherunlocked.com/api/current/${this.country}.${this.pCode}?app_id=${this.apiID}&app_key=${this.apikey}`);

    const responseData = await response.json();
    return responseData;
  }

  // Change Location 
  changeLocation(country, pCode) {
    this.country = country;
    this.pCode = pCode;
  }
}