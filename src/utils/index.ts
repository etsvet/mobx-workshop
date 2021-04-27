export const celciusToFahrenheit = (temp: number) => (temp*1.8 + 32);
export const fahrenheitToCelsius = (temp: number) => (temp-32) * 0.5556;
export const celciusToKelvin = (temp: number) => temp + 273.15;

export const wait = (msTime: number) => new Promise(resolve => setTimeout(resolve, msTime));

export const getRandInRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
}
