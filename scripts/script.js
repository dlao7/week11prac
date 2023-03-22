// function declaration: can be hoisted(used earlier in code)

// function greet(str, time = 'day'){
//     console.log(`Good ${time}, ${str}!`)
// }

// Function expression stored in variable:
// let const = function(str){
//     console.log(`Hello ${str}!`)
// }

// Arrow notation
// const greet = (str) => {
//     console.log(`Hello ${str}!`)
// }

// let name_prompt = prompt("Enter your name: ");
// let time = prompt("Enter what time of day it is, (day, night, afternoon): ")
// greet(name_prompt, time)

function calculateCircleArea(radius){
    const area = Math.PI * radius ** 2
    return area
}

let radius = prompt("Enter a radius: ");
if (isNaN(radius)){
    alert("That is not a number.");
}

else{
area = calculateCircleArea(radius);
area_round = area.toFixed(2);

alert(`The area of a circle with radius ${radius} is ${area_round}.`);
}