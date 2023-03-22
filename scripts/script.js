// function declaration: can be hoisted(used earlier in code)

// function greet(str){
//     console.log(`Hello ${str}!`)
// }

// Function expression stored in variable:
// let const = function(str){
//     console.log(`Hello ${str}!`)
// }

// Arrow notation
const greet = (str) => {
    console.log(`Hello ${str}!`)
}

let name_prompt = prompt("Enter your name: ");
greet(name_prompt)