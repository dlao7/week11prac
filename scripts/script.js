// function declaration: can be hoisted(used earlier in code)

function greet(str, time = 'day'){
    console.log(`Good ${time}, ${str}!`)
}

// Function expression stored in variable:
// let const = function(str){
//     console.log(`Hello ${str}!`)
// }

// Arrow notation
// const greet = (str) => {
//     console.log(`Hello ${str}!`)
// }

let name_prompt = prompt("Enter your name: ");
let time = prompt("Enter what time of day it is, (day, night, afternoon): ")
greet(name_prompt, time)

