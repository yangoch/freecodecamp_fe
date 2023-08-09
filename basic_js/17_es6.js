class Thermostat {
  constructor(temperature) {
    this._temperature = (5 / 9) * (temperature - 32);
  }

  get temperature() {
    return this._temperature;
  }

  set temperature(updateTemperature) {
    return (this._temperature = updateTemperature);
  }
}

// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.


const thermos = new Thermostat(76); 
let temp = thermos.temperature; // 24.44 C
console.log(temp);
thermos.temperature = 26;
console.log(thermos);
temp = thermos.temperature; // 26 C
console.log(temp);
