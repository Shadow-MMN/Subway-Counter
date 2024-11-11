//   count = 0; // Select elements
// let countEl = document.getElementById("count-el");
// let incrementBtn = document.getElementById("increment-btn");
// let saveBtn = document.getElementById("save-btn");
// let saveEl = document.getElementById("save-el");

// // Initialize counter
// let count = 0;

// // Increment button functionality
// incrementBtn.addEventListener("click", function () {
//     count++;
//     countEl.textContent = count; // Update displayed count
// });

// // Save button functionality
// saveBtn.addEventListener("click", function () {
//     saveEl.textContent += count + " - "; // Append the current count to the saved numbers
//   // Reset counter
//     countEl.textContent = count; // Update displayed count
// });
// let myAge = 18
// let dogAgeRatio = 7
// let myDogAge = myAge * dogAgeRatio
// console.log(myDogAge);


// let bonusPoint = 50
// console.log(bonusPoint)
// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)
// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)
// bonusPoint = bonusPoint + 45

// console.log(bonusPoint)

// function getNumber(){
//     console.log(42)
// }
// getNumber()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// function totalLap(){
//     let total = lap1 + lap2 + lap3
//     console.log(total)
// }
// totalLap()


// let lapCompleted = 0
// function lapCount(){
//     lapCompleted = lapCompleted + 1
  
// }
// lapCount()
// lapCount()
// lapCount()
// console.log(lapCompleted)
let count = 0
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let totalPassengers = document.getElementById('total-passengers')
function increment(){
    count+= 1
    countEl.innerText = count    
}
function save(){
    let countKeeper = count + ' - '
    saveEl.textContent += countKeeper 
    console.log(count)
    countEl.innerText = 0
    count = 0
}
