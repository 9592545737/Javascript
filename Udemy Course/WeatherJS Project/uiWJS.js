class UI{
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.tempString = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather, country, pCode) {
    const icon = weather.wx_icon;
    this.location.textContent = `${country}, ${pCode}`;
    this.desc.textContent = weather.wx_desc;
    this.tempString.textContent = `${weather.temp_c}°`;
    this.icon.setAttribute('src', `/icons/${weather.wx_icon}`);
    this.humidity.textContent = `Relative Humidity: ${weather.humid_pct}%`;
    this.dewpoint.textContent = `Dewpoint(c): ${weather.dewpoint_c}`;
    this.feelsLike.textContent = `Feels Like(c): ${weather.feelslike_c}`;
    this.wind.textContent = `Wind(kmh): ${weather.humid_pct}`;    
  }
}