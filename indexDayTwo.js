// get data
let array = document.getElementsByTagName("pre")[0].innerText.split("\n");

// clean data
let popped = array.pop();

// part one
const calcDistance = (array) => {
  let xAxisArray = [];
  let yAxisArray = [];

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let splitted = current.split(" ");
    let num = Number(splitted[1]);
    if (splitted[0] === "forward") {
      xAxisArray.push(num);
    } else if (splitted[0] === "down") {
      yAxisArray.push(num);
    } else if (splitted[0] === "up") {
      yAxisArray.push(num * -1);
    }
  }

  let xTotal = xAxisArray.reduce((a, b) => a + b);
  let yTotal = yAxisArray.reduce((a, b) => a + b);

  return xTotal * yTotal;
};

// part two
const calcAim = (array) => {
  let xAxis = 0;
  let yAxis = 0;
  let aim = 0;

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let splitted = current.split(" ");
    let num = Number(splitted[1]);
    if (splitted[0] === "forward") {
      xAxis += num;
      yAxis += aim * num
    } else if (splitted[0] === "down") {
      aim += num;
    } else if (splitted[0] === "up") {
      aim -= num;
    }
  }

  return xAxis * yAxis;
};
