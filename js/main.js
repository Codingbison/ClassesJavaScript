/*Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function Person(pizza,tacos,burgers,ice_cream,shakes){
    this.pizza = pizza;
    this.tacos = tacos;
    this.burgers = burgers;
    this.ice_cream = ice_cream;
    this.shakes = shakes

}
for(let i = 0; i < Object.keys(person3).lenght; i++){
    console.log(Object.keys(person3)[i])
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name,age){
    this.name = name;
    this.age = age;
    this.printInfo = () => {
        return `You are ${this.name}, And your age is ${this.age} years old`
    }
    this.updateAge = function() {
        return ++this.age;
    }
}

let new_person = new Person('Mehdi',40);

console.log(new_person.printInfo())
let new_person = new Person('Zachary', 37);
console.log(new_person.printInfo())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const stringLenght = (string) => {
    return new Promise((resolve,reject) => {
        if(lenght > 10){
            resolve(true);
        }else {
            reject(false)
        }
    })
}

// Using JS Promise
stringLenght(6).then((result) => {
    console.log('Big word', result)
}).catch((error) => {
    console.log('Small Number', error)
})


// Codewars
function getMiddle(str){ 
    let lenght = str.length
    let middle = Math.floor(lenght/2);
    
   if (lenght % 2 === 0) {
     return str[middle - 1] + str[middle]
   } else {
     return str[middle]
   }
  }