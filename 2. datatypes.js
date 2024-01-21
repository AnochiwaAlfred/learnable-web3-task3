


// ARRAYS


// const scores = new Array(20, 34, 82)
const scores = [20, 34, 82]

// console.log(typeof scores)
// console.log(Array.isArray(scores))

// accessing array elements
// console.log(scores[1])

// array manipulation - push, unshift, pop, indexOf

// console.log(scores)
// scores.push(90)
// console.log(scores)
// scores.unshift(73)
// console.log(scores)
// scores.pop()
// console.log(scores)
// console.log(scores.indexOf(73))





// OBJECTS

const person = {
    name: "John",
    age:34,
    isTall:true,
    address:{
        street:"No 1 Genesys Street",
        city: "Enugu"
    }
}


// accessing object property

// console.log(person["name"])
// console.log(person["address"]["street"])
// console.log(person.name)
// console.log(person.address.city)

//  destructuring

// const {name, age} = person //for objects

// const {score1, score2} = scores // for arrays
// console.log(name, age)