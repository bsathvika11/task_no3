let celciusInput = document.querySelector(".celcius > input");
let fahrenheitInput = document.querySelector(".fahrenheit > input");
let kelvinInput = document.querySelector(".kelvin > input");

let btn = document.querySelector(".button button");

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

/* celcius to fahrenheit and kelvin*/
celciusInput.addEventListener("input", function () {
  let cTemp = parseFloat(celciusInput.value);
  let fTemp = cTemp * 1.8 + 32;
  let kTemp = cTemp + 273.15;

  fahrenheitInput.value = roundNumber(fTemp);
  kelvinInput.value = roundNumber(kTemp);
});

/*fahrenheit to celcius and kelvin*/
fahrenheitInput.addEventListener("input", function () {
  let fTemp = parseFloat(fahrenheitInput.value);
  let cTemp = (fTemp - 32) / 1.8;
  let kTemp = (fTemp - 32) / 1.8 + 273.15;

  celciusInput.value = roundNumber(cTemp);
  kelvinInput.value = roundNumber(kTemp);
});

/*kelvin to celcius and fahrenheit*/
kelvinInput.addEventListener("input", function () {
  let kTemp = parseFloat(kelvinInput.value);
  let cTemp = kTemp - 273.15;
  let fTemp = (kTemp - 273.15) * 1.8 + 32;

  fahrenheitInput.value = roundNumber(fTemp);
  celciusInput.value = roundNumber(cTemp);
});

btn.addEventListener("click", () => {
  celciusInput.value = "";
  fahrenheitInput.value = "";
  kelvinInput.value = "";
});