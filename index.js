const numbers = [
  { num: "zero", value: 0 },
  { num: "one", value: 1 },
  { num: "two", value: 2 },
  { num: "three", value: 3 },
  { num: "four", value: 4 },
  { num: "five", value: 5 },
  { num: "six", value: 6 },
  { num: "seven", value: 7 },
  { num: "eight", value: 8 },
  { num: "nine", value: 9 },
];

function numExpression(str) {
  let resultExpression = "";

  if (str.includes("plus")) {
    let values = str.split("plus");

    let [valueOne, valueTwo] = wordToNumber(values[0], values[1]);

    const total = plus(+valueOne, +valueTwo);

    resultExpression = total.toString();
  }

  if (str.includes("minus")) {
    let values = str.split("minus");

    let [valueOne, valueTwo] = wordToNumber(values[0], values[1]);

    const total = minus(+valueOne, +valueTwo);

    resultExpression = total.toString();
  }

  return numberToWord(resultExpression);
}

function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function wordToNumber(valueOne, valueTwo) {
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    valueOne = valueOne.replaceAll(element.num, element.value);
    valueTwo = valueTwo.replaceAll(element.num, element.value);
  }
  return [valueOne, valueTwo];
}

function numberToWord(number) {
  let word = "";
  for (let index = 0; index < number.length; index++) {
    const element = number[index];
    word += numbers.find((n) => n.value == element)?.num || "negative";
  }

  return word;
}

console.log(numExpression("sevenplussix")); // onethree
console.log(numExpression("oneminusoneone")); // negativeonezero
console.log(numExpression("sevenminusnine"));
