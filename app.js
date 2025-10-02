//  Task 1: Grade Calculator
//  Given an array of 5 test scores 
// loop:
//  [85, 92, 78, 96, 88] , calculate the total and average score using a for
//  Loop through each score in the array
//  Add each score to a running total
//  After the loop, divide total by number of tests
//  Display: "Total: 439, Average: 87.8"

let scores = [85, 92, 78, 96, 88];
let total = 0;

for (let i = 0; i < scores.length; i++) {
  total += scores[i];
}

let average = total / scores.length;

console.log("Total : ", total);
console.log("Average : ", average);


//  You have a shopping cart with items and prices 
// Use a for loop to iterate through each price
//  Add each price to a running total
//  Apply 8% tax to the final total
//  [12.99, 8.50, 25.00, 4.75, 15.25] . Calculate the total cost:
//  Display: "Subtotal: $66.49, Tax: $5.32, Total: $71.81"


let price = [12.99, 8.50, 25.00, 4.75, 15.25];
let subtotal = 0;

for (let i = 0; i < price.length; i++) {
  subtotal += price[i];
}

let tax = subtotal * 0.08;

let totals = subtotal + tax;

console.log("Subtotal:", parseInt(subtotal.toFixed(2)));
console.log("tax:", parseInt(tax.toFixed(2)));
console.log("totals:", parseInt(totals.toFixed(2)));


//  Task 3: Multiplication Table Generator
//  Given a number (e.g., 7), create its multiplication table from 1 to 10:
//  Use a for loop from 1 to 10
//  Multiply the given number by each loop counter
//  Display each result: "7 x 1 = 7", "7 x 2 = 14", etc.
//  Show all 10 multiplication results

let num2 = 7;

for (let num1 = 1; num1 <= 10; num1++) {
  let sum = num1 * num2;
  console.log(num1, "*", num2, "=", sum);

}
//  Task 4: Password Strength Checker
//  Given a password string, analyze its strength by counting different character types:
//  Loop through each character in the password
//  Count uppercase letters, lowercase letters, numbers, and special characters
//  Based on counts, determine strength: "Weak", "Medium", "Strong", "Very Strong"
//  Display the counts and overall strength rating

let uppercase = 0;
let lowercase = 0;
let numbers = 0;
let special = 0;
let password = 'Ae@#&&12'

for (let i = 0; i < password.length; i++) {
  let character = password[i];
  if (character >= 'A' && character <= 'Z') {
    uppercase++;
  }
  else if (character >= 'a' && character <= 'z') {
    lowercase++;
  }
  else if (character >= '0' && character <= '9') {
    numbers++;
  } else {
    special++;
  }
}

let strength = "";
if (uppercase >0 && numbers >0 && lowercase >0 && password.length >= 12) {
    strength = "very strong";
}

else if (uppercase >0 && lowercase >0 && numbers >0 || special >0 && uppercase >0 && lowercase >0 || password.length >= 10) {
      strength = "strong";
}

else if (password.length >= 8) {
   strength = "Medium";
}

else {
  strength = "weak";
}



console.log(strength);




//  Given an array of attendance records 
// ["Present", "Absent", "Present", "Late", "Present"] for 5 days:
//  Loop through each day's record
//  Count present days, absent days, and late days
//  Calculate attendance percentage (Present + Late = attended)
//  Display: "Present: 3, Absent: 1, Late: 1, Attendance: 80%"


const attendance = ["Present", "Absent", "Absent", "Late", "Present"];

let presentCount = 0;
let absentCount = 0;
let lateCount = 0;

for (let i = 0; i < attendance.length; i++) {
  if (attendance[i] === "Present") {
    presentCount++;
  } else if (attendance[i] === "Absent") {
    absentCount++;
  } else if (attendance[i] === "Late") {
    lateCount++;
  }
}


const attendedDays = presentCount + lateCount;
const totalDays = attendance.length;
const attendancePercentage = (attendedDays / totalDays) * 100;


console.log("Present:", presentCount);
console.log("Absent:", absentCount);
console.log("Late:", lateCount);
console.log("Attendance:", attendancePercentage.toFixed(0) + "%");


//  Task 6: Temperature Converter
//  Given an array of Celsius temperatures 
// [0, 15, 25, 30, 35] , convert each to Fahrenheit:
// Loop through each Celsius temperature
//  Convert using formula: F = (C × 9/5) + 32
//  Store results in a new array or display each conversion
//  Show: "0°C = 32°F", "15°C = 59°F", etc.
//  Task

let celsiusTemps = [0, 15, 25, 30, 35];

for (let i = 0; i < celsiusTemps.length; i++) {
  let c = celsiusTemps[i];
  let f =(c * 9/5) + 32;
  console.log(`${c}°C = ${c}°F`);
}


// Task 7: Inventory Stock Check
//  Given product quantities 
// [5, 0, 12, 3, 0, 8] , identify stock status:
//  Loop through each product quantity
//  Categorize: Out of Stock (0), Low Stock (1-5), In Stock (6+)
//  Count items in each category
//  Display: "Out of Stock: 2 items, Low Stock: 2 items, In Stock: 2 item


let quantities = [5, 0, 12, 3, 0, 8];

let outOfStock = 0;
let lowStock = 0;
let inStock = 0;

for (let i = 0; i < quantities.length; i++) {
  const product = quantities[i];
  if (product === 0) {
     outOfStock++;
  }
  else if (product >= 1 && product <= 5) {
    lowStock++;
  }
  else{
    inStock++
  }
}

console.log(`Out of Stock: ${outOfStock} items, Low Stock: ${lowStock} items, In Stock: ${inStock} ite`);


//  Task 8: ATM Withdrawal Simulator
//  Starting with account balance of $500, simulate withdrawals:
//  Keep asking for withdrawal amounts while balance > 0
//  Each withdrawal reduces the balance
//  Stop when balance reaches 0 or user enters 0
//  Display remaining balance after each transaction
//  Final message: "Account empty" or "Session ended, Balance: $X

let balance =5000;

let withdrawals = [100, 50, 200, 150, 0];  

for (let i = 0; i < withdrawals.length; i++) {
  let withdraw = withdrawals[i];

  if (withdraw === 0) {
    console.log("Balance: $" + balance);
    
  }
  else if (withdraw > balance) {
      console.log("Current balance: $" + balance);
      
  }


    else {
        balance -= withdraw;
        console.log("You withdrew $" + withdraw + ", Remaining balance: $" + balance);
    }
  }
  if ( balance === 0) {
    console.log("Account empty");
    
  }

//   Task 9: Number Guessing Game
//  The computer picks a random number between 1-50, player keeps guessing:
//  Continue asking for guesses while guess is incorrect
//  Give hints: "Too high" or "Too low" after each wrong guess
//  Count the number of attempts
//  Stop when correct number is guessed
//  Display: "Correct! You guessed it in X attempts
let guess = 49;
let attempt = 0;
 
for (let i = 1; i <= 1; i++) {
  let randomNumber = Math.floor(Math.random() * 50) + 1;
   console.log(`Random ${i}: ${randomNumber}`);
  if(randomNumber >=20 && randomNumber <=50){
    console.log("Too High")
  }
   else if(randomNumber >=1 && randomNumber <=19){
    console.log("Too low")
  }
  else if (guess >= randomNumber || guess <= randomNumber) {
   console.log("Correct!")
}
 
}

// // Generate 10 random numbers between 1 and 50 using for loop
// for (let i = 1; i <= 10; i++) {
//   let randomNumber = Math.floor(Math.random() * 50) + 1;
//   console.log(`Random ${i}: ${randomNumber}`);
// }

// Task 10: Dice Rolling Challenge
//  Player rolls dice until they get three 6's in a row:
//  Keep rolling dice while streak of 6's is less than 3
//  Reset streak counter if any roll is not a 6
//  Count total number of rolls
//  Display each roll result and current streak
//  Final message: "Success! Got three 6's in X total rolls


let streak = 0;
let totalRolls = 0;

for(; ;){
  let roll = Math.floor(Math.random() * 6) + 1;
  totalRolls++;
  if (roll === 6){
    streak++;
  }
  else{
    streak++; 
  }


console.log("Roll:", roll, "Current streak:", streak);

    if (streak === 3) {
        console.log("Success!");
        break; 
    }

  }


//    Task 11: Savings Goal Tracker
//  Person saves $25 each week toward a $500 goal:
//  Start with $0 saved
// Keep adding $25 each week while total < $500
//  Count the number of weeks
//  Display weekly progress: "Week X: Saved $Y, Total: $Z"
//  Final message: "Goal reached in X weeks!"


let weeklySaving = 25;
let goal = 500;
let totalSaved =0;
let week = 0;

for (; totalSaved < goal; week++) {
  totalSaved += weeklySaving;
  console.log(`Week ${week + 1}: Saved $${weeklySaving}, Total: $${totalSaved}`);
  
  
}

console.log(`Goal reached in ${week} weeks!`);


//  Task 12: Password Login System
//  User has 3 attempts to enter correct password "admin123":
//  Keep asking for password while attempts < 3 AND password is wrong
//  Count failed attempts
//  Give feedback after each wrong attempt
//  Stop when correct password entered or attempts exhausted
//  Display: "Access granted" or "Account locked after 3 failed attempts"


// const readline = require("readline-sync");

// let correctPassword = "ain123";
// let maxAttempts = 3;

// for (let attempt = 1; attempt <= maxAttempts; attempt++) {
//   let input = readline.question("Enter password: "); 

//   if (input === correctPassword) {
//     console.log("Access granted");
//     break;
//   } else {
//     if (attempt < maxAttempts) {
//       console.log("Wrong password! Attempts left: " );
//     } else {
//       console.log("Account locked after 3 failed attempts");
//     }
//   }
// }


//  Phone battery starts at 100% and drains 15% per hour:
//  Keep draining battery while percentage > 0
//  Reduce battery by 15% each hour
//  Count hours passed
//  Display hourly status: "Hour X: Battery at Y%"
//  Final message: "Phone died after X hours

let battery = 90;
let drain = 15;
let hours = 0;

for (; battery > 0; ) {
  hours++;
  battery -= drain;
  if (battery > 0) {
    console.log("Hour " + hours + " Battery at " + battery + "%");
  } else {
    console.log("Hour " + hours + " Battery at 0%");
    console.log("Phone died after " + hours + " hours");
  }
}

// Task 14: Population Growth Calculator
//  City population of 10,000 grows 3% annually until it reaches 50,000:
//  Keep calculating new population while current < 50,000
//  Increase population by 3% each year
//  Count the number of years
//  Display yearly growth: "Year X: Population is Y"
//  Final message: "Population reached 50,000+ in X years"
// Node.js এ রান করার জন্য কোনো extra library লাগবে না



