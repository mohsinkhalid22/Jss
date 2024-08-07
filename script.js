for ( let count = 1; count <= 12; count++){
    console.log("DAY3");
}

console.log("loop has ended.");

for (let i = 1; i <= 3; i++){
    console.log("loopo", i );
}

console.log("loopo loop has ended")

for (let i = 1; i <= 5; i++){
    console.log("loopi", i);
}

console.log("loopi loop has ended")

let i = 1;
while(i <= 5){
    console.log("i =", i);
    i++
}

console.log("loop has ended");

let j = 1;
while(j <= 6){
    console.log("j =", j);
    j++
}

console.log("loopi has ended");

let u = 1;

// do {
//     console.log("'do while loop'");
//     u++
// } while (u <= 10);

do {
    console.log("u =", u);
    u++
} while (u <= 5);

console.log("do while has ended");

// for of loop

// let str = "JavaScript";

// for(let t of str){
//     console.log("t =", t);
// }

let str = "Mononpe";
let size = 0;

for(let val of str){
    console.log("val =", val);
    size++    
}

console.log("string size =",size);

let student = {
    Name : "Rahul Kumar",
    Age : 17,
    CGPA : 2.2,
    isPass: "Pass",
};

for( let key in student){
    console.log("key =",key, " value =", student[key]);
}

// Practice #1

for (let num=0; num<=100; num++){
    if( num%2 !== 0){
        console.log("num =", num);
    }
}

/// Practice # 2

let gameNum = 19;

let userNum = prompt("Guess the game number :");

// if(userNum == gameNum){
//     console.log("Your guess is correct!");
// } else {
//     console.log("Your guess is incorrect!");
// }

while (userNum != gameNum){
    userNum = prompt("It is incorrect. Guess again:");
}

console.log("Congratulations! It is correct.")