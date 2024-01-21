

// for...loop
const countries = ["Nigeria","Kenya","Ghana"]

// for (let i=0; i<countries.length; i++){
//     countries[i]=countries[i].toLocaleUpperCase()
// }
// console.log(countries)


// while...loop
// let i=0
// while(20>i){
//     console.log(i%2==0 && i!=0 ? i : "")
//     i++
// }



// for...of (array)
// const names = ["John", "Doe", "Bob"]
// for (const name of names){
//     console.log(name.toLocaleUpperCase())
// }



// for...in (object)
const players = {
    "Harvetz":{
        age: 34,
        country:"USA",
        position:"Goalkeeper",
        goals:34,
        assists:23
    },
    "Messi":{
        age: 35,
        country:"Argentina",
        position:"Striker",
        goals:187,
        assists:96,
    },
    "Ronaldo":{
        age: 38,
        country:"Brazil",
        position:"Striker",
        goals:98,
        assists:120
    },
    "Mount":{
        age: 32,
        country:"England",
        position:"Defender",
        goals:23,
        assist:50
    }
}
let sum = 0;
for (const player in players){
    sum+=players[player].goals
}
console.log(sum)

