// get data
let array = document.getElementsByTagName("pre")[0].innerText.split("\n");

// clean data
let popped = array.pop();

// part one
function getGammaRate(array) {
    const outerLength = array.length;
    const innerLength = array[0].length;
    const sumOfOnes = new Array(innerLength).fill(0);
    for (let i = 0; i < outerLength; i++) {
      for (let j = 0; j < innerLength; j++) {
        if (array[i][j] === '1') {
          sumOfOnes[j]++;
        }
      }
    }
    return sumOfOnes.map(ones => ones > outerLength / 2 ? '1' : '0').join('');
  }
  
  const gammaRate = getGammaRate(array);
  const epsilonRate = gammaRate.split('').map(digit => String(1 - digit)).join('');
  const gammaDecimal = parseInt(gammaRate, 2);
  const epsilonDecimal = parseInt(epsilonRate, 2);
  console.log('Power consumption of the submarine:', gammaDecimal * epsilonDecimal);



// part two