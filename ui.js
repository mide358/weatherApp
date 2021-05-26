class UI{
  constructor(){
    this.location = document.querySelector('#w-location');
    this.desc = document.querySelector('#w-desc');
    this.string = document.querySelector('#w-string');
    this.icon = document.querySelector('#w-icon');
    this.details = document.querySelector('#w-details');
    this.humidity = document.querySelector('#w-humidity');
    this.time = document.querySelector('#w-time');
    this.feelsLike = document.querySelector('#w-feels-like');
    this.wind = document.querySelector('#w-wind');
  }

  paint(weather){
    this.location.textContent = `${weather.location.name}, ${weather.location.country}`
    this.desc.textContent = weather.current.condition.text;
    this.string.textContent = `${weather.current.temp_c}°C  (${weather.current.temp_f}°F)`;
    this.icon.setAttribute('src', weather.current.condition.icon);
    this.humidity.textContent =`Humidity: ${weather.current.humidity}%`;
    this.time.textContent =`Current Time: ${weather.location.localtime}`;
    this.feelsLike.textContent =`Feels like: ${weather.current.feelslike_c}°C (${weather.current.feelslike_f}°F)`;
    this.wind.textContent =`Wind: ${weather.current.wind_mph}`;

  }
}