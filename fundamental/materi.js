/*
    Fundamental JavaScript
    1. console.log
    2. Comments
    3. Variable
    4. Tipe Data
    5. Operator
    6. If/Else Statement
    7. Switch Case Statement
    8. Loop
*/

// 1. console.log 

console.log("Hello Achmad Rifki"); // console.log method for print text 

// 2. Comments

//This is for 1 line comment

/* 
    This is for multiple line comments
    You can add anything in here
*/

/* 
    3. Variable

    a. var
    b. const
    c. let
*/

var firstName = "Achmad";
console.log(firstName);

/* 
    Output:
    Achmad
*/

let odd = 5;
odd = 6;
console.log(odd);

/* 
    Output:
    6
    Because we use "let" that means changeable
*/

const even = 6;
console.log(even);

/* 
    Output:
    error
    Because we use "const" that means unchangeable
*/

/*
    4. Tipe Data
        a. Undefined
        b. Numbers
        c. BigInt
        d. Strings
        e. Boolean
        f. Null
        g. Symbol
*/

let animal; // Undefined
console.log(typeof(animal));

let oddNumber = 3; // Numbers
console.log(typeof(odd));

const bigInteger = 12345677123123123454545457373737n // BigInt end with "n"
console.log(typeof(bigInteger));

const smallNumber = 123n // This is BigInt too, because there is an "n" at the end of number
console.log(typeof(smallNumber));

const myName = "Achmad" // Strings
console.log(typeof(myName));

let isMarried = false // Boolean
console.log(typeof(isMarried));

let money = null // Null value. We use null value when we don't need any values yet and we want to set the value later
console.log(typeof(money));

const id_mhs = Symbol("id") // Symbol
console.log(typeof(id_mhs));

const id_dosen = Symbol("id") // Symbol too and not error
console.log(typeof(id_dosen));