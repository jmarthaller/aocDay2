// get data 
let array = document.getElementsByTagName("pre")[0].innerText.split("\n").map(x => Number(x));



// part one
let increases = 0;
for (let i = 0; i < array2.length; i++) {
    if (array2[i+1] > array2[i]) {
        increases++;
    }
}
console.log(increases)



// part two