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

const radiusPara = document.querySelector("#radius")
const resultPara = document.querySelector("#result")

function calculateCircleArea(radius){
    const area = Math.PI * radius ** 2;
    return area
}

let math_input = prompt("Enter a radius: ");
radiusPara.textContent += math_input

if (isNaN(math_input)){
    resultPara.textContent = "The entered value is not a number.";
}

else{
    radiusPara.textContent = `The radius was ${math_input}.`;
    area = calculateCircleArea(math_input);
    area_round = area.toFixed(2);
    alert(`The area of a circle with radius ${math_input} is ${area_round}.`);
    resultPara.textContent = "There were no errors.";
}

// const groceryList = ["apples", "eggs", "milk"];
// const shopList = document.querySelector("ul.shopping")

// groceryList.forEach(element => shopList.append(<li>element</li>));


