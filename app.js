// // // //  Task 1: Grade Calculator
// // // //  Given an array of 5 test scores 
// // // // loop:
// // // //  [85, 92, 78, 96, 88] , calculate the total and average score using a for
// // // //  Loop through each score in the array
// // // //  Add each score to a running total
// // // //  After the loop, divide total by number of tests
// // // //  Display: "Total: 439, Average: 87.8"

// // // let scores = [85, 92, 78, 96, 88];
// // // let total = 0;

// // // for (let i = 0; i < scores.length; i++) {
// // //   total += scores[i];
// // // }

// // // let average = total / scores.length;

// // // console.log("Total : ", total);
// // // console.log("Average : ", average);


// // // //  You have a shopping cart with items and prices 
// // // // Use a for loop to iterate through each price
// // // //  Add each price to a running total
// // // //  Apply 8% tax to the final total
// // // //  [12.99, 8.50, 25.00, 4.75, 15.25] . Calculate the total cost:
// // // //  Display: "Subtotal: $66.49, Tax: $5.32, Total: $71.81"


// // // let price = [12.99, 8.50, 25.00, 4.75, 15.25];
// // // let subtotal = 0;

// // // for (let i = 0; i < price.length; i++) {
// // //   subtotal += price[i];
// // // }

// // // let tax = subtotal * 0.08;

// // // let totals = subtotal + tax;

// // // console.log("Subtotal:", parseInt(subtotal.toFixed(2)));
// // // console.log("tax:", parseInt(tax.toFixed(2)));
// // // console.log("totals:", parseInt(totals.toFixed(2)));


// // // //  Task 3: Multiplication Table Generator
// // // //  Given a number (e.g., 7), create its multiplication table from 1 to 10:
// // // //  Use a for loop from 1 to 10
// // // //  Multiply the given number by each loop counter
// // // //  Display each result: "7 x 1 = 7", "7 x 2 = 14", etc.
// // // //  Show all 10 multiplication results

// // // let num2 = 7;

// // // for (let num1 = 1; num1 <= 10; num1++) {
// // //   let sum = num1 * num2;
// // //   console.log(num1, "*", num2, "=", sum);

// // // }
// // // //  Task 4: Password Strength Checker
// // // //  Given a password string, analyze its strength by counting different character types:
// // // //  Loop through each character in the password
// // // //  Count uppercase letters, lowercase letters, numbers, and special characters
// // // //  Based on counts, determine strength: "Weak", "Medium", "Strong", "Very Strong"
// // // //  Display the counts and overall strength rating

// // // let uppercase = 0;
// // // let lowercase = 0;
// // // let numbers = 0;
// // // let special = 0;
// // // let password = 'A2hasjhshuijwhuih'

// // // for (let i = 0; i < password.length; i++) {
// // //   let character = password[i];
// // //   if (character >= 'A' && character <= 'Z') {
// // //     uppercase++;
// // //   }
// // //   else if (character >= 'a' && character <= 'z') {
// // //     lowercase++;
// // //   }
// // //   else if (character >= '0' && character <= '9') {
// // //     numbers++;
// // //   } else {
// // //     special++;
// // //   }
// // // }

// // // let strength = "";
// // // if (uppercase >0 && numbers >0 && lowercase >0 && password.length >= 12) {
// // //     strength = "very strong";
// // // }

// // // else if (uppercase >0 && lowercase >0 && numbers >0 || special >0 && uppercase >0 && lowercase >0 || password.length >= 10) {
// // //       strength = "strong";
// // // }

// // // else if (password.length >= 8) {
// // //    strength = "Medium";
// // // }

// // // else {
// // //   strength = "weak";
// // // }



// // // console.log(strength);




// // // //  Given an array of attendance records 
// // // // ["Present", "Absent", "Present", "Late", "Present"] for 5 days:
// // // //  Loop through each day's record
// // // //  Count present days, absent days, and late days
// // // //  Calculate attendance percentage (Present + Late = attended)
// // // //  Display: "Present: 3, Absent: 1, Late: 1, Attendance: 80%"


// // // const attendance = ["Present", "Absent", "Absent", "Late", "Present"];

// // // let presentCount = 0;
// // // let absentCount = 0;
// // // let lateCount = 0;

// // // for (let i = 0; i < attendance.length; i++) {
// // //   if (attendance[i] === "Present") {
// // //     presentCount++;
// // //   } else if (attendance[i] === "Absent") {
// // //     absentCount++;
// // //   } else if (attendance[i] === "Late") {
// // //     lateCount++;
// // //   }
// // // }


// // // const attendedDays = presentCount + lateCount;
// // // const totalDays = attendance.length;
// // // const attendancePercentage = (attendedDays / totalDays) * 100;


// // // console.log("Present:", presentCount);
// // // console.log("Absent:", absentCount);
// // // console.log("Late:", lateCount);
// // // console.log("Attendance:", attendancePercentage.toFixed(0) + "%");


// // // //  Task 6: Temperature Converter
// // // //  Given an array of Celsius temperatures 
// // // // [0, 15, 25, 30, 35] , convert each to Fahrenheit:
// // // // Loop through each Celsius temperature
// // // //  Convert using formula: F = (C × 9/5) + 32
// // // //  Store results in a new array or display each conversion
// // // //  Show: "0°C = 32°F", "15°C = 59°F", etc.
// // // //  Task

// // // let celsiusTemps = [0, 15, 25, 30, 35];

// // // for (let i = 0; i < celsiusTemps.length; i++) {
// // //   let c = celsiusTemps[i];
// // //   let f =(c * 9/5) + 32;
// // //   console.log(`${c}°C = ${c}°F`);
// // // }


// // // // Task 7: Inventory Stock Check
// // // //  Given product quantities 
// // // // [5, 0, 12, 3, 0, 8] , identify stock status:
// // // //  Loop through each product quantity
// // // //  Categorize: Out of Stock (0), Low Stock (1-5), In Stock (6+)
// // // //  Count items in each category
// // // //  Display: "Out of Stock: 2 items, Low Stock: 2 items, In Stock: 2 item


// // // let quantities = [5, 0, 12, 3, 0, 8];

// // // let outOfStock = 0;
// // // let lowStock = 0;
// // // let inStock = 0;

// // // for (let i = 0; i < quantities.length; i++) {
// // //   const product = quantities[i];
// // //   if (product === 0) {
// // //      outOfStock++;
// // //   }
// // //   else if (product >= 1 && product <= 5) {
// // //     lowStock++;
// // //   }
// // //   else{
// // //     inStock++
// // //   }
// // // }

// // // console.log(`Out of Stock: ${outOfStock} items, Low Stock: ${lowStock} items, In Stock: ${inStock} ite`);


// // // //  Task 8: ATM Withdrawal Simulator
// // // //  Starting with account balance of $500, simulate withdrawals:
// // // //  Keep asking for withdrawal amounts while balance > 0
// // // //  Each withdrawal reduces the balance
// // // //  Stop when balance reaches 0 or user enters 0
// // // //  Display remaining balance after each transaction
// // // //  Final message: "Account empty" or "Session ended, Balance: $X

// // // let balance =5000;

// // // let withdrawals = [100, 50, 200, 150, 0];  

// // // for (let i = 0; i < withdrawals.length; i++) {
// // //   let withdraw = withdrawals[i];

// // //   if (withdraw === 0) {
// // //     console.log("Balance: $" + balance);
    
// // //   }
// // //   else if (withdraw > balance) {
// // //       console.log("Current balance: $" + balance);
      
// // //   }


// // //     else {
// // //         balance -= withdraw;
// // //         console.log("You withdrew $" + withdraw + ", Remaining balance: $" + balance);
// // //     }
// // //   }
// // //   if ( balance === 0) {
// // //     console.log("Account empty");
    
// // //   }

// // // //   Task 9: Number Guessing Game
// // // //  The computer picks a random number between 1-50, player keeps guessing:
// // // //  Continue asking for guesses while guess is incorrect
// // // //  Give hints: "Too high" or "Too low" after each wrong guess
// // // //  Count the number of attempts
// // // //  Stop when correct number is guessed
// // // //  Display: "Correct! You guessed it in X attempts
// // // let guess = 49;
// // // let attempt = 0;
 
// // // for (let i = 1; i <= 1; i++) {
// // //   let randomNumber = Math.floor(Math.random() * 50) + 1;
// // //    console.log(`Random ${i}: ${randomNumber}`);
// // //   if(randomNumber >=20 && randomNumber <=50){
// // //     console.log("Too High")
// // //   }
// // //    else if(randomNumber >=1 && randomNumber <=19){
// // //     console.log("Too low")
// // //   }
// // //   else if (guess >= randomNumber || guess <= randomNumber) {
// // //    console.log("Correct!")
// // // }
 
// // // }

// // // // // Generate 10 random numbers between 1 and 50 using for loop
// // // // for (let i = 1; i <= 10; i++) {
// // // //   let randomNumber = Math.floor(Math.random() * 50) + 1;
// // // //   console.log(`Random ${i}: ${randomNumber}`);
// // // // }

// // // // Task 10: Dice Rolling Challenge
// // // //  Player rolls dice until they get three 6's in a row:
// // // //  Keep rolling dice while streak of 6's is less than 3
// // // //  Reset streak counter if any roll is not a 6
// // // //  Count total number of rolls
// // // //  Display each roll result and current streak
// // // //  Final message: "Success! Got three 6's in X total rolls


// // // let streak = 0;
// // // let totalRolls = 0;

// // // for(; ;){
// // //   let roll = Math.floor(Math.random() * 6) + 1;
// // //   totalRolls++;
// // //   if (roll === 6){
// // //     streak++;
// // //   }
// // //   else{
// // //     streak++; 
// // //   }


// // // console.log("Roll:", roll, "Current streak:", streak);

// // //     if (streak === 3) {
// // //         console.log("Success!");
// // //         break; 
// // //     }

// // //   }


// // // //    Task 11: Savings Goal Tracker
// // // //  Person saves $25 each week toward a $500 goal:
// // // //  Start with $0 saved
// // // // Keep adding $25 each week while total < $500
// // // //  Count the number of weeks
// // // //  Display weekly progress: "Week X: Saved $Y, Total: $Z"
// // // //  Final message: "Goal reached in X weeks!"


// // // let weeklySaving = 25;
// // // let goal = 500;
// // // let totalSaved =0;
// // // let week = 0;

// // // for (; totalSaved < goal; week++) {
// // //   totalSaved += weeklySaving;
// // //   console.log(`Week ${week + 1}: Saved $${weeklySaving}, Total: $${totalSaved}`);
  
  
// // // }

// // // console.log(`Goal reached in ${week} weeks!`);


// // // //  Task 12: Password Login System
// // // //  User has 3 attempts to enter correct password "admin123":
// // // //  Keep asking for password while attempts < 3 AND password is wrong
// // // //  Count failed attempts
// // // //  Give feedback after each wrong attempt
// // // //  Stop when correct password entered or attempts exhausted
// // // //  Display: "Access granted" or "Account locked after 3 failed attempts"


// // // // const readline = require("readline-sync");

// // // // let correctPassword = "ain123";
// // // // let maxAttempts = 3;

// // // // for (let attempt = 1; attempt <= maxAttempts; attempt++) {
// // // //   let input = readline.question("Enter password: "); 

// // // //   if (input === correctPassword) {
// // // //     console.log("Access granted");
// // // //     break;
// // // //   } else {
// // // //     if (attempt < maxAttempts) {
// // // //       console.log("Wrong password! Attempts left: " );
// // // //     } else {
// // // //       console.log("Account locked after 3 failed attempts");
// // // //     }
// // // //   }
// // // // }


// // // //  Phone battery starts at 100% and drains 15% per hour:
// // // //  Keep draining battery while percentage > 0
// // // //  Reduce battery by 15% each hour
// // // //  Count hours passed
// // // //  Display hourly status: "Hour X: Battery at Y%"
// // // //  Final message: "Phone died after X hours

// // // let battery = 90;
// // // let drain = 15;
// // // let hours = 0;

// // // for (; battery > 0; ) {
// // //   hours++;
// // //   battery -= drain;
// // //   if (battery > 0) {
// // //     console.log("Hour " + hours + " Battery at " + battery + "%");
// // //   } else {
// // //     console.log("Hour " + hours + " Battery at 0%");
// // //     console.log("Phone died after " + hours + " hours");
// // //   }
// // // }

// // // // Task 14: Population Growth Calculator
// // // //  City population of 10,000 grows 3% annually until it reaches 50,000:
// // // //  Keep calculating new population while current < 50,000
// // // //  Increase population by 3% each year
// // // //  Count the number of years
// // // //  Display yearly growth: "Year X: Population is Y"
// // // //  Final message: "Population reached 50,000+ in X years"
// // // // Node.js এ রান করার জন্য কোনো extra library লাগবে না



// // //  Task 12: Password Login System
// // //  User has 3 attempts to enter correct password "admin123":
// // //  Keep asking for password while attempts < 3 AND password is wrong
// // //  Count failed attempts
// // //  Give feedback after each wrong attempt
// // //  Stop when correct password entered or attempts exhausted
// // //  Display: "Access granted" or "Account locked after 3 failed attempts"

// // // const correctPassword = "admin123";
// // // let attempts = 1;
// // // let enteredPassword = "";


// // // while (attempts  < 3 && enteredPassword !== correctPassword) {
// // //   enteredPassword =  ("Enter password")

// // //   if (enteredPassword --- correctPassword) {
// // //     console.log("Access granted");
    
// // //   }
// // //   else{
// // //     attempts++;
// // //     if (attempts <3) {
// // //       console.log("wrong passwrod! Attemts left:" + (3 - attempts));
      
// // //     }
  
// // //   else {
// // //     console.log("Account locked after 3 failed attempts");
    
// // //   }
// // // }
// // // }

// // // Array 

// // // 1. Student Grade Analyzer
// // // Scenario: Analyze student scores to assign grades, calculate the class average, and count the passes.
// // // Example Data (Array of Objects):
// // // [
// // //   { name: "Alice", score: 88, class: "Math" },
// // //   { name: "Bob", score: 52, class: "Math" },
// // //   { name: "Charlie", score: 95, class: "Math" },
// // //   { name: "Diana", score: 71, class: "Math" }
// // // ]

// // // Conditions to Use:
// // // forEach: Iterate over the students to sum scores and assign grades.
// // // if/else: Determine the letter grade (e.g., A: ≥90, B: ≥80, C: ≥70, Fail: <60).
// // // for or while: Loop over the data again to count how many students scored ≥70.


// // // let student = [
// // //  { name: "Alice", score: 88, class: "Math" },
// // //  { name: "Bob", score: 52, class: "Math" },
// // //  { name: "Charlie", score: 95, class: "Math" },
// // //  { name: "Diana", score: 71, class: "Math" }
// // //  ]


// // //  let total = 0;

// // //  student.forEach(student => {
// // //      total += student.score;

// // //      if (student.score >= 90) student.grade = 'A';
// // //      else if (student.score >= 80 ) student.grade = 'B';
// // //      else if (student.score >= 70) student.grade = 'C';
// // //      else student.grade = 'Fail';

// // //      console.log(`${student.name} scored${student.score} grade${student.grade}`);
     
// // //  });

// // //  let average = total / student.length;
// // //  console.log("class average:", average);


// // //  let passCount = 0;

// // //  for (let i = 0; i < student.length; i++) {
// // //   if (student [i].score >= 95) {
// // //     passCount++;
// // //   }
  
// // //  }

// // //  console.log("student :", passCount);
 

// //   2. Check product stock levels and list low-stock items.
// // Example Data (Array of Objects):
// // [
// //   { id: 101, name: "Laptop", price: 1200, stock: 5 },
// //   { id: 102, name: "Mouse", price: 25, stock: 0 },
// //   { id: 103, name: "Keyboard", price: 75, stock: 12 },
// //   { id: 104, name: "Monitor", price: 300, stock: 1 }
// // ]

// // Conditions to Use:
// // forEach: Iterate and print all product names and their stock.
// // if/else: Check if stock === 0 (out of stock) or stock < 5 (low stock).

// let products = [
//   { id: 101, name: "Laptop", price: 1200, stock: 5 },
//   { id: 102, name: "Mouse", price: 25, stock: 0 },
//   { id: 103, name: "Keyboard", price: 75, stock: 12 },
//   { id: 104, name: "Monitor", price: 300, stock: 1 }
// ];

// let i = 0;

// while (i < products.length) {
//   let product = products[i];
//   console.log(`Product: ${product.name}, Stock: ${product.stock}`);

//   if (product.stock === 0) {
//     console.log("Out of stock!");
//   } else if (product.stock < 5) {
//     console.log("Low stock!");
//   }

//   i++;
// }



// // // // 3. User Profile Filter
// // // // Scenario: Filter users based on age and active status and then list their names.
// // // // Example Data (Array of Objects):
// // // // [
// // // //   { name: "Ella", age: 24, isActive: true },
// // // //   { name: "Frank", age: 35, isActive: true },
// // // //   { name: "Grace", age: 29, isActive: false },
// // // //   { name: "Henry", age: 41, isActive: true }
// // // // ]

// // // // Conditions to Use:
// // // // forEach: Iterate over the users to perform checks.
// // // // if/else: Select users where isActive is true AND age is less than 30.
// // // // for: Loop over a new array containing only the filtered user names.


// // // let users = [
// // //   { name: "Ella", age: 24, isActive: true },
// // //   { name: "Frank", age: 35, isActive: true },
// // //   { name: "Grace", age: 29, isActive: false },
// // //   { name: "Henry", age: 41, isActive: true }
// // // ];

// // // let filteredNames = [];

// // // users.forEach(user => {
// // //    if (user.isActive && user.age < 45) {
// // //      filteredNames.push(user.name);  
// // //    }
// // // });

// // // for (let i = 0; i < filteredNames.length; i++) {
// // //   console.log(filteredNames[i]);
// // // }


// // // // 4. Recipe Ingredient Calculator
// // // // Scenario: Analyze recipe ingredients to see if you have enough on hand.
// // // // Example Data (Object containing an Array):
// // // // {
// // // //   recipeName: "Pancakes",
// // // //   servings: 4,
// // // //   ingredients: [
// // // //     { name: "Flour", quantity: 200, unit: "g", onHand: 150 },
// // // //     { name: "Milk", quantity: 300, unit: "ml", onHand: 500 },
// // // //     { name: "Egg", quantity: 2, unit: "count", onHand: 1 }
// // // //   ]
// // // // }

// // // // Conditions to Use:
// // // // for: Loop through the ingredients array to check supply levels.
// // // // if/else: Determine if onHand is less than quantity (missing ingredients).
// // // // forEach: Loop through the ingredients array to print a formatted list of all items needed.

// // // let recipe = {
// // //   recipeName: "Pancakes",
// // //   servings: 4,
// // //   ingredients: [
// // //     { name: "Flour", quantity: 200, unit: "g", onHand: 150 },
// // //     { name: "Milk", quantity: 300, unit: "ml", onHand: 500 },
// // //     { name: "Egg", quantity: 2, unit: "count", onHand: 1 }
// // //   ]
// // // };

// // // for (let i = 0; i < recipe.ingredients.length; i++) {
// // //   let ingredient = recipe.ingredients[i];

// // //   if (ingredient.onHand < ingredient.quantity) {
// // //     console.log(` ${ingredient.name} is missing! Needed: ${ingredient.quantity}${ingredient.unit}, You have: ${ingredient.onHand}${ingredient.unit}`);
// // //   } else {
// // //     console.log(` ${ingredient.name} is enough.`);
// // //   }
// // // }


// // // console.log("\nAll ingredients for recipe:");

// // // recipe.ingredients.forEach(ingredient => {
// // //   console.log(`${ingredient.name}: ${ingredient.quantity}${ingredient.unit} needed, You have: ${ingredient.onHand}${ingredient.unit}`);
// // // });

// // // // // 5. Bookstore Search
// // // // // Scenario: Find books published before a certain year and summarize the collection.
// // // // // Example Data (Array of Objects):
// // // // // [
// // // // //   { title: "Novel A", author: "X. Y.", genre: "Fiction", year: 2010 },
// // // // //   { title: "Tech B", author: "A. B.", genre: "Non-Fiction", year: 1998 },
// // // // //   { title: "Poetry C", author: "J. K.", genre: "Poetry", year: 2005 },
// // // // //   { title: "Old Manual", author: "S. T.", genre: "Reference", year: 1985 }
// // // // // ]

// // // // // Conditions to Use:
// // // // // while: Loop until you've found the first three books published before 2000.
// // // // // if/else: Check if year is less than 2000.
// // // // // forEach: Iterate over the entire array and print the title and author of every book.

// // // // let books = [
// // // //   { title: "Novel A", author: "X. Y.", genre: "Fiction", year: 2010 },
// // // //   { title: "Tech B", author: "A. B.", genre: "Non-Fiction", year: 1998 },
// // // //   { title: "Poetry C", author: "J. K.", genre: "Poetry", year: 2005 },
// // // //   { title: "Old Manual", author: "S. T.", genre: "Reference", year: 1985 },
// // // //   { title: "Classic D", author: "L. P.", genre: "History", year: 1975 }
// // // // ];

// // // // let i = 0;
// // // // let oldBooks = [];

// // // // while (i < books.length && oldBooks.length < 3) {
// // // //   if (books[i].year < 2000) {
// // // //     oldBooks.push(books[i]);
// // // //   }
// // // //   i++;
// // // // }

// // // // console.log("Books published before 2000:");
// // // // for (let j = 0; j < oldBooks.length; j++) {
// // // //   console.log("- " + oldBooks[j].title + " by " + oldBooks[j].author + " (" + oldBooks[j].year + ")");
// // // // }

// // // // console.log(""); // blank line
// // // // console.log("All Books:");
// // // // books.forEach(book => {
// // // //   console.log("- " + book.title + " - " + book.author);
// // // // });

// // // // 6. Expense Tracker
// // // // Scenario: Calculate total spending and flag individual expenses that are over budget.
// // // // Example Data (Array of Objects):
// // // // [
// // // //   { date: "2024-03-01", amount: 45.50, category: "Groceries" },
// // // //   { date: "2024-03-01", amount: 150.00, category: "Rent" },
// // // //   { date: "2024-03-02", amount: 12.75, category: "Coffee" },
// // // //   { date: "2024-03-03", amount: 95.00, category: "Dinner" }
// // // // ]

// // // // Conditions to Use:
// // // // forEach: Calculate the total sum of all amounts.
// // // // for: Loop through the expenses to check for high-cost items.
// // // // if/else: Flag an expense if amount is greater than 100.00.

// // // let expenses = [
// // //   { date: "2024-03-01", amount: 45.50, category: "Groceries" },
// // //   { date: "2024-03-01", amount: 150.00, category: "Rent" },
// // //   { date: "2024-03-02", amount: 12.75, category: "Coffee" },
// // //   { date: "2024-03-03", amount: 95.00, category: "Dinner" }
// // // ]


// // // let totalSaved = 0;
// // // expenses.forEach(expense => {
// // //   total += expense.amount;
// // // });

// // // console.log("Total Spending: $" + total.toFixed(2));



// // // for (let i = 0; i < expenses.length; i++) {
// // //   let expense = expenses[i];
  
 
// // //   if (expense.amount > 100.00) {
// // //     console.log(`${expense.category} - $${expense.amount} Over Budget`);
// // //   } else {
// // //     console.log(`${expense.category} - $${expense.amount} Within Budget`);
// // //   }
// // // }

// // // // 7. Voting Eligibility Check
// // // // Scenario: Determine which voters are eligible (≥18) and process the list.
// // // // Example Data (Array of Objects):
// // // // [
// // // //   { id: 1, name: "Leo", age: 19, registered: false },
// // // //   { id: 2, name: "Mia", age: 17, registered: true },
// // // //   { id: 3, name: "Noah", age: 30, registered: true },
// // // //   { id: 4, name: "Olive", age: 18, registered: false }
// // // // ]

// // // // Conditions to Use:
// // // // forEach: Iterate and check every voter's eligibility.
// // // // if/else: Check if age is ≥18 AND if registered is true.
// // // // while: Loop and print the names of voters until you encounter the first voter who is not registered.

// // // let voters = [
// // //   { id: 1, name: "Leo", age: 19, registered: false },
// // //   { id: 2, name: "Mia", age: 17, registered: true },
// // //   { id: 3, name: "Noah", age: 30, registered: true },
// // //   { id: 4, name: "Olive", age: 18, registered: false }
// // // ]

// // // voters.forEach(voter => {
// // //   if (voter.age >= 18 && voter.registered === true) {
// // //     console.log(`${voter.name} Eligible to vote`);
    
// // //   }
// // //   else{
// // //     console.log(`${voter.name} not eligible`);
    
// // //   }
// // // });
// // // console.log("\n resgisterred  voters (first unregistered)");

// // // let i = 0
// // // while (i < voters.length) {
// // //   if (voters[i].registered === false) {
// // //     break;
// // //   }
// // //   console.log(voters[i].name);
// // //   i++;
// // // }


// // // // 8. Simple Quiz Scorer
// // // // Scenario: Compare user answers against correct answers to calculate a score.
// // // // Example Data (Object for Correct Answers & Array for User Answers):
// // // // // Correct Answers Object
// // // // {
// // // //   q1: "Mercury",
// // // //   q2: "Blue",
// // // //   q3: "Triangle"
// // // // }

// // // // // User Answers Array
// // // // [
// // // //   { qNum: "q1", uAnswer: "Mercury" },
// // // //   { qNum: "q2", uAnswer: "Red" },
// // // //   { qNum: "q3", uAnswer: "Triangle" }
// // // // ]

// // // // Conditions to Use:
// // // // for: Loop through the User Answers array using the index.
// // // // if/else: Compare the uAnswer with the corresponding key's value in the Correct Answers object.
// // // // forEach: Loop through the User Answers array to print the question number and whether the answer was correct or incorrect.

// // // let correctAnswers = {
// // //   q1: "Mercury",
// // //   q2: "Blue",
// // //   q3: "Triangle"
// // // };

// // // let userAnswers = [
// // //   { qNum: "q1", uAnswer: "Mercury" },
// // //   { qNum: "q2", uAnswer: "Red" },
// // //   { qNum: "q3", uAnswer: "Triangle" }
// // // ];

// // // let score = 0;

// // // for (let i = 0; i < userAnswers.length; i++) {
// // //   let question = userAnswers[i];
// // //   if (question.uAnswer === correctAnswers[question.qNum]) {
// // //     score++;
// // //   }
// // // }

// // // console.log("Total Score: " + score + " out of " + userAnswers.length);

// // // userAnswers.forEach(answer => {
// // //   if (answer.uAnswer === correctAnswers[answer.qNum]) {
// // //     console.log(`${answer.qNum}: Correct`);
// // //   } else {
// // //     console.log(`${answer.qNum}: Wrong`);
// // //   }
// // // });


// // // // 9. Music Playlist Manager
// // // // Scenario: Calculate the total length of a playlist and filter out short songs.
// // // // Example Data (Array of Objects):
// // // // [
// // // //   { title: "Song 1", artist: "A", durationSeconds: 180 },
// // // //   { title: "Song 2", artist: "B", durationSeconds: 250 },
// // // //   { title: "Song 3", artist: "C", durationSeconds: 15 },
// // // //   { title: "Song 4", artist: "D", durationSeconds: 320 }
// // // // ]

// // // // Conditions to Use:
// // // // while: Loop through the array to accumulate the total duration, stopping if the total exceeds 600 seconds.
// // // // if/else: Check if durationSeconds is less than 60 (too short for the radio).
// // // // forEach: Create a new array containing only the titles of songs that are longer than 150 seconds.

// // // let songs = [
// // //   { title: "Song 1", artist: "A", durationSeconds: 180 },
// // //   { title: "Song 2", artist: "B", durationSeconds: 250 },
// // //   { title: "Song 3", artist: "C", durationSeconds: 15 },
// // //   { title: "Song 4", artist: "D", durationSeconds: 320 }
// // // ]

// // // let allSong = 0;
// // // let k = 0;

// // // while (i < songs.length && total <= 600) {
// // //   allSong += songs[i].durationSeconds;
// // //   i++;
// // // }
// // // console.log("Total Playlist Duration (limited to 600s): " + total + " seconds\n");

// // // songs.forEach(song => {
// // //   if (song.durationSeconds < 60) {
// // //     console.log(`${song.title}: Too short for radio`);
// // //   } else {
// // //     console.log(`${song.title}: Good length`);
// // //   }
// // // });
// // // let longSongs = [];
// // // songs.forEach(song => {
// // //   if (song.durationSeconds > 150) {
// // //     longSongs.push(song.title);
// // //   }
// // // });

// // // console.log("\nSongs longer than 150 seconds:");
// // // console.log(longSongs);



// // // // 10. Data Aggregator
// // // // Scenario: Calculate the sum and average of numerical data, and find the minimum and maximum.
// // // // Example Data (Array of Objects):
// // // // [
// // // //   { value: 42 },
// // // //   { value: 15 },
// // // //   { value: 87 },
// // // //   { value: 22 }
// // // // ]

// // // // Conditions to Use:
// // // // forEach: Iterate to calculate the total sum and count.
// // // // for: Loop through the array to find the minimum and maximum value.
// // // // if/else: Update the minimum/maximum variables inside the loop when a smaller/larger number is found. Store the results in a summary object (e.g., { totalSum: 166, min: 15, max: 87 }).

// // // let data = [
// // //   { value: 42 },
// // //   { value: 15 },
// // //   { value: 87 },
// // //   { value: 22 }
// // // ];

// // // // 1️⃣ total sum & count
// // // let totalSum = 0;
// // // let count = 0;

// // // data.forEach(item => {
// // //   totalSum += item.value;
// // //   count++;
// // // });

// // // let averagess = totalSum / count;


// // // let min = data[0].value;
// // // let max = data[0].value;

// // // for (let i = 1; i < data.length; i++) {
// // //   if (data[i].value < min) {
// // //     min = data[i].value;
// // //   } else if (data[i].value > max) {
// // //     max = data[i].value;
// // //   }
// // // }


// // // let summary = {
// // //   totalSum: totalSum,
// // //   average: averagess,
// // //   min: min,
// // //   max: max
// // // };

// // // console.log(summary);

// // // 11. Ticket Validator
// // // Scenario: Validate tickets and separate valid ones from invalid ones.
// // // Example Data (Array of Objects):
// // // [
// // //   { id: "T001", destination: "Tokyo", valid: true },
// // //   { id: "T002", destination: "Paris", valid: false },
// // //   { id: "T003", destination: "London", valid: true },
// // //   { id: "T004", destination: "Rome", valid: true },
// // //   { id: "T005", destination: "Berlin", valid: false }
// // // ]

// // // Conditions to Use:
// // // for: Loop through the array to count how many tickets are valid.
// // // if/else: Check the valid status and the destination (e.g., print a special message if the destination is 'Paris' and it's valid).
// // // forEach: Iterate over the array to build a new array containing only the objects where valid is true.

// // let tickets = [
// //   { id: "T001", destination: "Tokyo", valid: true },
// //   { id: "T002", destination: "Paris", valid: false },
// //   { id: "T003", destination: "London", valid: true },
// //   { id: "T004", destination: "Rome", valid: true },
// //   { id: "T005", destination: "Berlin", valid: false }
// // ];

// // let validCount = 0;

// // for (let i = 0; i < tickets.length; i++) {
// //   if (tickets[i].valid) {
// //     validCount++;
// //     if (tickets[i].destination === "paris") {
// //       console.log("paris found:" + tickets[i].id);
      
// //     }
// //   }
  
// // }

// // console.log("total vaild tickets:", validCount);

// // let validTickets = [];

// // tickets.forEach(ticket => {
// //   if (ticket.valid) {
// //     validTickets.push(ticket);
// //   }
// // });

// // console.log('\nvalid tickets list');
// // console.log(validTickets);


// // // 12. Weather Report Processor
// // // Scenario: Analyze daily temperatures and conditions.
// // // Example Data (Array of Objects):
// // // [
// // //   { day: "Mon", highTemp: 28, isSunny: true },
// // //   { day: "Tue", highTemp: 22, isSunny: false },
// // //   { day: "Wed", highTemp: 31, isSunny: true },
// // //   { day: "Thu", highTemp: 25, isSunny: false }
// // // ]

// // // Conditions to Use:
// // // forEach: Iterate and print a summary of each day.
// // // if/else: Check if highTemp is >30 AND isSunny is true (a heatwave day).
// // // while: Loop until you find the first day where isSunny is false.


// // let weatherData = [
// //   { day: "Mon", highTemp: 28, isSunny: true },
// //   { day: "Tue", highTemp: 22, isSunny: false },
// //   { day: "Wed", highTemp: 31, isSunny: true },
// //   { day: "Thu", highTemp: 25, isSunny: false }
// // ];


// // console.log("Daily Weather Report:");
// // weatherData.forEach(dayInfo => {
// //   console.log(`${dayInfo.day}: Temp = ${dayInfo.highTemp}°C, Sunny = ${dayInfo.isSunny}`);

// // if (dayInfo.highTemp > 30 && dayInfo.isSunny) {
// //     console.log(`${dayInfo.day} is a Heatwave Day!\n`);
// //   } else {
// //     console.log("");
// //   }
// // });


// // let p = 0;
// // while (p < weatherData.length) {
// //   if (!weatherData[p].isSunny) {
// //     console.log(` First cloudy day is: ${weatherData[p].day}`);
// //     break;
// //   }
// //   p++;
// // }

// // // 13. Task Completion Checker
// // // Scenario: Track task status and count tasks by priority.
// // // Example Data (Array of Objects):
// // // [
// // //   { title: "Buy Milk", priority: "Low", completed: true },
// // //   { title: "Finish Report", priority: "High", completed: false },
// // //   { title: "Call Client", priority: "Medium", completed: false },
// // //   { title: "Book Flight", priority: "High", completed: true }
// // // ]

// // // Conditions to Use:
// // // for: Loop through the array to count the number of high-priority tasks.
// // // if/else: Check if priority is "High" and if completed is false.
// // // forEach: Create a new array of objects containing only the tasks that are not completed.

// // let tasks = [
// //   { title: "Buy Milk", priority: "Low", completed: true },
// //   { title: "Finish Report", priority: "High", completed: false },
// //   { title: "Call Client", priority: "Medium", completed: false },
// //   { title: "Book Flight", priority: "High", completed: true }
// // ];

// // let highCount = 0;
// // for (let i = 0; i < tasks.length; i++) {
// //   if (tasks[i].priority === "High") {
// //     highCount++;
// //   }
// // }
// // console.log("Total High Priority Tasks:", highCount);

// // for (let k = 0; k < tasks.length; k++) {
// //   if (tasks[k].priority === "High" && tasks[k].completed === false) {
// //     console.log("High Priority k:", tasks[k].title);
// //   }
// // }

// // const incompleteTasks = [];
// // tasks.forEach((task) => {
// //   if (!task.completed) {
// //     incompleteTasks.push(task);
// //   }
// // });

// // console.log("Incomplete:", incompleteTasks);

// // // 14. User Permissions
// // // Scenario: Determine a user's permissions based on their role configuration.
// // // Example Data (Config Object & User Array):
// // // // Permissions Configuration Object
// // // {
// // //   admin: ["read", "write", "delete", "manage"],
// // //   editor: ["read", "write"],
// // //   viewer: ["read"]
// // // }

// // // // User Data Array
// // // [
// // //   { name: "Sam", role: "editor" },
// // //   { name: "Tina", role: "admin" },
// // //   { name: "Max", role: "viewer" }
// // // ]

// // // Conditions to Use:
// // // forEach: Iterate over the User Data array.
// // // for: Inside the forEach, loop over the permissions array found in the Config object (using the user's role as the key).
// // // if/else: Check if the user's permissions array includes the action "delete".

// // let permissionsConfig = {
// //   admin: ["read", "write", "delete", "manage"],
// //   editor: ["read", "write"],
// //   viewer: ["read"]
// // };

// // let users = [
// //   { name: "Sam", role: "editor" },
// //   { name: "Tina", role: "admin" },
// //   { name: "Max", role: "viewer" }
// // ];

// // users.forEach((user) => {
// //   const role = user.role;
// //   const userPermissions = permissionsConfig[role]

// //    console.log(` User: ${user.name} (${role})`);
// //   console.log("Permissions:");

// //   for (let z = 0; z < userPermissions.length; z++) {
// //     console.log(" - " + userPermissions[z]);
// //   }

  
// //   if (userPermissions.includes("delete")) {
// //     console.log("This user CAN delete content.");
// //   } else {
// //     console.log("This user CANNOT delete content.");
// //   }

// //   console.log("---------------------");
// // });

// // // 15. Product Price Updater
// // // Scenario: Apply a 10% price increase only to products in the 'electronics' category.
// // // Example Data (Array of Objects):
// // // [
// // //   { id: 201, name: "Webcam", price: 50.00, category: "electronics" },
// // //   { id: 202, name: "Coffee Maker", price: 75.00, category: "home" },
// // //   { id: 203, name: "USB Drive", price: 15.00, category: "electronics" },
// // //   { id: 204, name: "Blender", price: 40.00, category: "home" }
// // // ]

// // // Conditions to Use:
// // // while: Loop until the price of the first 'electronics' item exceeds $60.00 (This forces multiple iterations of updates).
// // // if/else: Check if category is "electronics" and apply the price update (price ×1.10).
// // // forEach: Loop through the array after the updates to print the final, adjusted price for every product.


// //  let products = [
// //   { id: 201, name: "Webcam", price: 50.00, category: "electronics" },
// //   { id: 202, name: "Coffee Maker", price: 75.00, category: "home" },
// //   { id: 203, name: "USB Drive", price: 15.00, category: "electronics" },
// //   { id: 204, name: "Blender", price: 40.00, category: "home" }
// // ];


// // while (products.find(p => p.category === "electronics").price <= 60) {

  
// //   products.forEach(product => {
// //     if (product.category === "electronics") {
// //       product.price = product.price * 1.10; 
// //     } else {
      
// //       product.price = product.price;
// //     }
// //   });
// // }


// // products.forEach(product => {
// //   console.log(`${product.name} (${product.category}) - $${product.price.toFixed(2)}`);
// // });

// // intaractive perctice 

// // let names = ['shakib', 'rifat', 'nadir', 23, true]
// // let newArr = [];

// // for( let i = 0; i < names.length; i++){
// //   newArr.push('ss' + names[i])
// //   console.log(newArr);
  
  
// // }

// // let nums = [1, 2, 3, 4, 5, 6, 7, ];
// // let newNums = [];

// // for(i = 0; i < nums.length; i++){
// //   newNums.push(nums[i] * 2);
// // }
// // console.log(newNums);


// let age = 10;

// if (age >= 24) {
//   console.log('wellcome');
// }
// else{
//   console.log(false);
  
// }

// let age = 18;
// let address = 'dahaka';

// if (age >= 18 && address == 'dahaka') {
//   console.log('welcome');
  
// }
// else{
//   console.log('get out');
  
// }

// // FUNCTION


// // Task 1: Basic Function
// // Scenario: Greeting App
// // Description: Create a function named greetUser that takes one argument, a name, and prints a personalized greeting to the console.
// // Hint: Use function greetUser(name) { ... } and console.log().
// // Example: // Call the function with your name to test it

// let nam = 'shamim';

// function greetUser(nam) {
//       return nam;    
  
// }
//  console.log(`Hello,${nam} welcome`);

// console.log('-------------');
// // Task 2: Function Return
// // Scenario: Simple Math
// // Description: Write a function addTwoNumbers that accepts two numbers and returns their sum..
// // Hint: Use the return keyword. The function should not use console.log().
// // Example: let result = addTwoNumbers(15, 20);

// function addTwoNumbers(num1, num2) {
//    return num1 + num2;
// }

// let result = addTwoNumbers(15, 20);
// console.log(result);
// console.log('-------------');
// // Task 3: Arrow Function
// // Scenario: Quick Double
// // Description: Write an arrow function named doubleNumber that takes a number and returns that number multiplied by 2.
// // Hint: Use the return keyword. The function should not use console.log().
// // Example: let result = addTwoNumbers(15, 20);

// const doubleNumber = (nums) => {
//     return  nums* 2;
  
  
// };

// let print1 = doubleNumber(15,);
// let print2  = doubleNumber(20,);
// console.log(print1, print2);
// console.log('-------------');


// // Task 4: Default Parameter
// // Scenario: Dinner Cost
// // Description: Create calculateTotal that takes a price and an optional taxRate. Default taxRate to 0.05 (5%).
// // Hint: Set the default in the signature: (price, taxRate = 0.05). Return the full total.
// // Example: let total = calculateTotal(100);



// function calculateTotal(price, taxRate = 0.05){
//   return price +(price * taxRate)
// }

// let total = calculateTotal(100);
// console.log(total);
// console.log('-------------');

// // Task 5: Arrow Function
// // Scenario: String Length
// // Description: Write a single-line arrow function getStringLength that takes a string and returns its length.
// // Hint: Omit parentheses for the single parameter. Use the .length property.
// // Example: let nameLength = getStringLength("LearnAboutFunction");
 
// const getStringLength = str =>str.length;

// let nameLength = getStringLength("LearnAboutFunction");

// console.log(nameLength);
// console.log('-------------');


// // 🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🦖🦖🦖🦖🦖🦖🦖


// // Task 6: Function Calling
// // Scenario: Price Calculator
// // Description: Write a function applyDiscount(price, percentage). Then, call it inside a main function finalPrice and print the result.
// // Hint: Define two functions. The second function calls the first and uses its return value.
// // Example: function applyDiscount(...) { ... }

// function applyDiscount(price, percentage) {
//   return price - (price * (percentage / 100));
// }

// function finalPrice() {
//   let totales = applyDiscount(1000, 10); 
//   console.log("Final Price after discount:", totales);
// }

// finalPrice();

// console.log('-------------');
// // Task 7: Conditional Return
// // Scenario: Is Adult?
// // Description: Create a function isAdult that takes an age and returns true if the age is 18 or greater, otherwise false.
// // Hint: Use a comparison operator (>=) and the return keyword.
// // Example: console.log(isAdult(20)); // Should be true


// function isAdult(age) {
//   return age >= 18;
// }

// console.log(isAdult(20)); 
// console.log(isAdult(10));

// console.log('-------------');
// // Task 8: No Parameters
// // Scenario: Random Number
// // Description: CWrite a function generateRandomNum that takes no arguments and returns a random integer between 1 and 10 (inclusive).
// // Hint: Use Math.random() multiplied by 10, then use Math.floor() and add 1.
// // Example: let luckyNum = generateRandomNum();

// function generateRandomNum() {
//   return Math.floor(Math.random() * 10) +1;
// }
// for (let i = 0; i < 10; i++) {
//   console.log(generateRandomNum ());
  
  
// }
// console.log('-------------');


// // Task 9: Multiple Parameters
// // Scenario: Volume of a Box
// // Description: Write a function boxVolume that takes length, width, and height and returns the volume.
// // Hint: The formula is l×w×h.
// // Example: let volume = boxVolume(5, 2, 3);

// function boxVolume(length,width,height) {
//    return length * width *height;
// }

// let volume = boxVolume(5, 2, 3)
// console.log(volume);
// console.log('-------------');


// // Task 10: Function Printing
// // Scenario: To-Do List
// // Description: Create a function printList that takes an array of strings and prints each one on a new line.
// // Hint: Use a basic for loop or tasks.forEach(...) inside the function.
// // Example: const tasks = ["Buy Milk", "Code", "Sleep"];

// function printList(tasks) {
//   tasks.forEach(task => console.log(task));
// }

// const tasks = ["Buy Milk", "Code", "Sleep"];
// printList(tasks);


// console.log('-------------');

// // Task 11: Conditional Logic
// // Scenario: Temperature Check
// // Description: Write checkTemp that takes a temperature. If it's over 30, return "It's hot!", otherwise return "It's mild or cool."
// // Hint: Use an if/else block with two different return values.
// // Example: console.log(checkTemp(35));

// function checkTemp(temp) {
//   if (temp > 30) {
//     return "hot!";
//   } else {
//     return "cool";
//   }
// }


// console.log(checkTemp(35)); 
// console.log(checkTemp(25)); 
// console.log('-------------');

// // Task 12: Arrow + Default
// // Scenario: Power Calculator
// // Description: Write an arrow function power(base, exponent = 2) that returns the base raised to the power of the exponent.
// // Hint: Use the exponent operator: **.
// // Example: console.log(power(5)); // 25

// const power = (base, exponent = 2) => base ** exponent;

// console.log(power(5));
// console.log(power(2, 4));
// console.log('-------------');
// // Task 13: Template Literal
// // Scenario: HTML Generator
// // Description: Create a function makeListItem(content) that returns a string formatted as an HTML list item.
// // Hint: Use Template Literals (backticks ``) to easily insert the content.
// // Example: let item = makeListItem("Hello");

// function makeListItem(content) {
//   return`<li> ${content}</li>`
// }
// let item = makeListItem("Hello");
// console.log(item);
// console.log('-------------');

// // Task 14: Input Validation
// // Scenario: Positive Check
// // Description: Write a function isPositive(num) that returns true only if num is greater than 0.
// // Hint: Focus solely on the condition num > 0.
// // Example: console.log(isPositive(-5)); // false

// function isPositive(numu) {
//   if (numu > 0) {
//     return true;
//   }
//   else{
//     return false
//   }
// }

//  console.log(isPositive(-5))
//   console.log(isPositive(10))
//   console.log('-------------');

// //   Task 15: Side Effect
// // Scenario: Counter
// // Description: Declare let count = 0;. Write a function incrementCount that adds 1 to count each time it is called.
// // Hint: The function does not need a return statement, only the modification: count = count + 1;.
// // Example: incrementCount(); console.log(count);
// let count = 0;
// function incrementCount() {
//    count = count + 1;
// }

// incrementCount() ;
// incrementCount() ;
// incrementCount() ;
// incrementCount() ;
// incrementCount() ;
// console.log(count);

// console.log('-------------');

// // Task 16: Callback Concept
// // Scenario: Simple Execution
// // Description: Define a function execute(callback) that calls the function it receives. Pass an arrow function that prints "Task Done!" to execute.
// // Hint: Call execute(() => { ... });
// // Example: function execute(callback) { ... }

// function execute(callback) {
//   callback();
// }
// execute (() => {
//   console.log("Task Done!");
  
// })

// console.log('-------------');


// // Task 17: Array Access
// // Scenario: First Element
// // Description: Create a function getFirstElement that takes an array and returns the item at index 0.
// // Hint: Use bracket notation: array[0].
// // Example: const colors = ["Red", "Blue", "Green"];

// function getFirstElement(arr) {
//    return arr[0];
// }

// const colors = ["Red", "Blue", "Green"];
// console.log(colors);
// console.log('-------------');

// // Task 18: Object Access
// // Scenario: User Info
// // Description: Write a function getUserAge(user) that takes a user object and returns only their age.
// // Hint: Use dot notation: user.age.
// // Example: const user = { name: "Alice", age: 24 };

// function getUserAge(user) {
//   return user.age;
// }
// const user = { name: "Alice", age: 24 };
// console.log(user);

// console.log('-------------');

// // Task 19: String Manipulation
// // Scenario: Capitalize Name
// // Description: Create a function capitalizeName(name) that capitalizes the first letter of a name and keeps the rest lowercase.
// // Hint: Use string methods like .toUpperCase() for the first letter and .slice(1) for the rest.
// // Example: console.log(capitalizeName("chris"));


// function capitalizeName(namees) {
//  return namees.charAt(0).toUpperCase() + namees.slice(1).toLowerCase();
// }

// console.log(capitalizeName("cKRis"))
// console.log(capitalizeName("ALhcE"));
// console.log('-------------');

// // Task 20: Function Scope
// // Scenario: Inner Function Access
// // Description:Write outerFunction that defines let message = "Hello". Inside, define and call innerFunction which prints message.
// // Hint: Show that innerFunction can access variables in the parent outerFunction scope.
// // Example: function outerFunction() { ... }

// function outerFunction() {
//     let message = "Hello";

//     function innerFunction() {
//       console.log(message);
//     }

//     innerFunction();
// }

// outerFunction();
// console.log('-------------');

// // PUSH

// // Task 21: push Method
// // Scenario: Shopping Cart
// // Description: Start with an empty cart. Use push inside a function addItem(item) to add an item to the end of the array.
// // Hint: Add End: cart.push("Apples").
// // Example: const cart = [];

// const cart = [];

// function addItem(item) {
//   cart.push(item);
// }


// addItem("Apples");
// addItem("Valluk");
// addItem("Rose");

// console.log(cart);
// console.log('-------------');
// // Task 22: pop Method
// // Scenario: Last-in, First-out
// // Description: Use an array of numbers. Use pop to remove and store the last number, then print the removed number.
// // Hint: Remove End: let removed = numbers.pop();
// // Example: const numbers = [10, 20, 30];

// const numbers = [10, 20, 30];

// let removed = numbers.pop();
// console.log("delet number:", removed); 
// console.log("updet array:", numbers);
// console.log('-------------');


// Task 23: shift Method
// Scenario: Customer Queue
// Description: Use an array of names. Use the shift method to process (remove) and print the first customer in the queue.
// Hint: Remove Front: queue.shift()..
// // Example: const queue = ["Anya", "Ben", "Chloe"];

// const queue = ["Anya", "Ben", "Chloe"];
//  let served = queue.shift();

// console.log("Served customer:", served);
// console.log("reminig queue :", queue);
// console.log('-------------');
// // Task 24: unshift Method
// // Scenario: VIP Insertion
// // Description: Use the queue array from Task 23. Use unshift to add "VIP Customer" to the beginning of the queue.
// // Hint: Add Front: queue.unshift("VIP Customer").
// // Example: const queue = ["Ben", "Chloe"];

// const cheng = ["Ben", "Chloe"];

// cheng.unshift("VIP INsertion");

// console.log("Updet queue:", cheng);
// console.log('-------------');
// // Task 25: for...of Loop
// // Scenario: Movie Marathon
// // Description: Use the array of movie titles. Use a for...of loop to print every title.
// // Hint: Value Iteration: for (const movie of movies) { ... }
// // Example: const movies = ["Dune", "Arrival", "Interstellar"];

// const movies = ["Dune", "Arrival", "Interstellar"];
 
// for (const movie of movies){
//     console.log(movie);
    
// }
// console.log('-------------');
// // Task 26: for...in Loop (Keys)
// // Scenario: Inventory Check
// // Description: Use the object. Use a for...in loop to print the name of each property (the inventory key/fruit name).
// // Hint: Key Iteration: for (const fruit in inventory) { ... }
// // Example: const inventory = { apples: 5, bananas: 10, oranges: 3 };

// const inventory = { apples: 5, bananas: 10, oranges: 3 };

// for (const fruit in inventory){
//     console.log(fruit);
    
// }
// console.log('-------------');

// // Task 27: for...in Loop (Values)
// // Scenario: Price Listing
// // Description: Use the inventory object. Use a for...in loop to print both the fruit name (key) and its quantity (value).
// // Hint: Access Value: Use inventory[fruit] inside the loop.
// // Example: const inventory = { apples: 5, bananas: 10 };

// const inventor = {
//   apples: 5,
//   bananas: 10
// };

// for (const fruit in inventor) {
//   console.log(fruit + ": " + inventor[fruit]);
// }

// console.log('-------------');

// // Task 28: slice (Copy)
// // Scenario: Save Game State
// // Description: Create an array of high scores. Use the slice() method with no arguments to create a new copy of the scores.
// // Hint: Copying: const newScores = originalScores.slice();
// // Example: const originalScores = [100, 90, 80];

// let originalScores = [100, 90, 80, 70, 60]
//  const newScores = originalScores.slice();

//  console.log("Original Scores:", originalScores);
// console.log("Copied Scores:", newScores);

// console.log('-------------');

// // Task 29: slice (Partial)
// // Scenario: Top 3 Scores
// // Description: Use the high scores array. Use slice(0, 3) to extract and print only the first three scores.
// // Hint: Extract Range: allScores.slice(startIndex, endIndex). Remember the end index is exclusive.
// // Example: const allScores = [100, 90, 80, 70, 60];

// const allScores = [100, 90, 80, 70, 60];

// const score = allScores.slice(0, 3);

// console.log("All Scores:", allScores);
// console.log("Top 3 Scores:", score);

// console.log('-------------');


// // Task 30: Loop & Array Combo
// // Scenario: Filter List
// // Description: Use the array of numbers. Use a for...of loop and an if statement to push numbers greater than 10 into a new array.
// // Hint: Combine: Start with const filtered = [];. Use filtered.push(...) inside the conditional loop.
// // Example: const data = [5, 12, 3, 22, 8];
// const data = [5, 12, 3, 22, 8];
// const filtered = [];

// for (const number of data) {
//   if (number > 10) {
//     filtered.push(number);
//   }
// }

// console.log("Original Data:", data);
// console.log("Filtered Data (greater than 10):", filtered);
// console.log('-------------');

