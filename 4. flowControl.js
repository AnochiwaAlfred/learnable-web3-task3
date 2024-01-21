
//  if...else

const score = 35
if (score<=100&&score>=80){
    console.log("A")
}else if(score<80&&score>=60){
    console.log("B")
}else if(score<60&&score>=50){
    console.log("C")
}else if(score<50&&score>=40){
    console.log("D")
}else{
    console.log("F")
}

// Tenary operators

let x=9;
x>7 ? console.log("higher") : console.log("lower");

const age = 14
const isAdult = age>=18 ? true : false // condition, return value if true, return value if false
const isAdultStatus = age>=18 ? "Of age" : "Not of age" // condition, return value if true, return value if false

console.log(isAdult)
console.log(isAdultStatus)
/*
const name = "John"
const age = 20
const city = "New York"
const statement = `Hello ${name}, how are you? You are ${age} years old and live in ${city}.`
*/


// switch statements
switch (true) {
    case age >= 18:
        console.log('You are an adult')
        break
    case age >= 12 && age < 18:
        console.log('You are a teenager')
        break
    default:
        console.log('You are a child')
}

const dayOfTheWeek = 4
switch (dayOfTheWeek) {
    case 1:
        console.log("It's Weekend")
        break;
    case 7:
        console.log("It's Weekend")
        break;
    default:
        console.log(`Today is Day ${dayOfTheWeek}. It's not weekend`)
}



// Loops
// for(let i=0;i<5;i++){
//     console.log(`Loop: ${i+1}`)
// }

// let j=0
// while(j<5){
//     console.log(`While Loop: ${j+1}`)
// }
