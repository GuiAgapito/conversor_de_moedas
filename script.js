const initialValue = document.querySelector("#initial-value");
const convertFrom = document.querySelector("#convert-from");
const convertTo = document.querySelector("#convert-to");
const convertedCoin = document.querySelector("#converted-coin");

const currentCoinBRL = 1;
const currentCoinUSD = 5.43;
const currentCoinEUR = 5.81;

const convert = () => {
  let convertFromSelected = convertFrom.value.toUpperCase();
  let convertToSelected = convertTo.value.toUpperCase();
  let valueToBeConverted = parseFloat(initialValue.value.replace(',', '.'));

  if (isNaN(valueToBeConverted)) {
    valueToBeConverted = 0.0;
  }

  let result = 0.0;

  if (convertFromSelected === 'BRL' && convertToSelected === 'USD') {
    result = valueToBeConverted / currentCoinUSD;
  } else if (convertFromSelected === 'BRL' && convertToSelected === 'EUR') {
    result = valueToBeConverted / currentCoinEUR;
  } else if (convertFromSelected === 'USD' && convertToSelected === 'BRL') {
    result = valueToBeConverted * currentCoinUSD;
  } else if (convertFromSelected === 'USD' && convertToSelected === 'EUR') {
    result = valueToBeConverted * (currentCoinEUR / currentCoinUSD);
  } else if (convertFromSelected === 'EUR' && convertToSelected === 'BRL') {
    result = valueToBeConverted * currentCoinEUR;
  } else if (convertFromSelected === 'EUR' && convertToSelected === 'USD') {
    result = valueToBeConverted / (currentCoinEUR / currentCoinUSD);
  } else {
    result = valueToBeConverted;
  }

  convertedCoin.value = result.toFixed(2);
};
