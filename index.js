//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

let day1TempF = 32;
let day2TempC = 25;
let day3TempF = 70;
let day4TempC = 18;
let day5TempF = 80;
let day6TempC = 15;
let day7TempF = 72;
let day8TempC = 28;
let day9TempF = 68;
let day10TempC = 20;
let day11TempF = 75;
let day12TempC = 23;
let day13TempF = 82;
let day14TempC = 30;
let day15TempF = 65;
let day16TempC = 22;
let day17TempF = 77;
let day18TempC = 26;
let day19TempF = 78;
let day20TempC = 24;
let day21TempF = 73;
let day22TempC = 21;
let day23TempF = 79;
let day24TempC = 27;
let day25TempF = 71;
let day26TempC = 19;
let day27TempF = 74;
let day28TempC = 17;
let day29TempF = 76;
let day30TempC = 29;

//reassigning celsius to fahrenheit
day2TempC = (day2TempC * 9) / 5 + 32;
day4TempC = (day4TempC * 9) / 5 + 32;
day6TempC = (day6TempC * 9) / 5 + 32;
day8TempC = (day8TempC * 9) / 5 + 32;
day10TempC = (day10TempC * 9) / 5 + 32;
day12TempC = (day12TempC * 9) / 5 + 32;
day14TempC = (day14TempC * 9) / 5 + 32;
day16TempC = (day16TempC * 9) / 5 + 32;
day18TempC = (day18TempC * 9) / 5 + 32;
day20TempC = (day20TempC * 9) / 5 + 32;
day22TempC = (day22TempC * 9) / 5 + 32;
day24TempC = (day24TempC * 9) / 5 + 32;
day26TempC = (day26TempC * 9) / 5 + 32;
day28TempC = (day28TempC * 9) / 5 + 32;
day30TempC = (day30TempC * 9) / 5 + 32;

//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius
let tot_temperature_in_fahrenheit =
  day1TempF +
  day2TempC +
  day3TempF +
  day4TempC +
  day5TempF +
  day6TempC +
  day7TempF +
  day8TempC +
  day9TempF +
  day10TempC +
  day11TempF +
  day12TempC +
  day13TempF +
  day14TempC +
  day15TempF +
  day16TempC +
  day17TempF +
  day18TempC +
  day19TempF +
  day20TempC +
  day21TempF +
  day22TempC +
  day23TempF +
  day24TempC +
  day25TempF +
  day26TempC +
  day27TempF +
  day28TempC +
  day29TempF +
  day30TempC;

let tot_temperature_in_celsius = ((tot_temperature_in_fahrenheit - 32) * 5) / 9;

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
let avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

//! Console.log the results for your own inspection if you'd like
console.log(tot_temperature_in_fahrenheit);
console.log(tot_temperature_in_celsius);
console.log(avg_temperature_in_celsius);
console.log(avg_temperature_in_fahrenheit);

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
  // tot_temperature_in_fahrenheit,
  // tot_temperature_in_celsius,
  // avg_temperature_in_fahrenheit,
  // avg_temperature_in_celsius
};
