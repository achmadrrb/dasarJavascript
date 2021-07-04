// function minimal(a,b){
//     if(a > b){
//         return b
//     } else if (a < b){
//         return a
//     } else{
//         return a
//     }
// }

// console.log(minimal(9,9));

// const power = (a,b) => a**b

// console.log(power(7,3));

function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);