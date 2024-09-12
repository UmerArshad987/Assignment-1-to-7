////CHAPTER = 1

// Q:1
// alert('Welcome to our website!')

// Q:2
// alert("Error! Please enter a valid password.")

// Q:3
// alert('Welcome to JS Land...\nHappy Coding!')

// Q:4
// alert('Welcome to JS land')
// alert('Happy Coding!\nPrevent this page from creating additional dialogs')

// Q:5
// console.log("Hello... I can run JS through my web browser's console");




////CHAPTER = 2

//Q:1
// var username;

//Q:2
//let myName = 'Umer Arshad'

//Q:3
//  let message;
//  message = "Hello World";
//  alert(message)

//Q;4
// let Mname = "John Doe";
// let Mage = "15 years old";
// let Mqualification = "Certified Mobile Application Development";
// alert("Name: " + Mname);
// alert("Age: " + Mage);
// alert("Qualification: " + Mqualification);

//Q:5
// let pizza = "PIZZA";
// let message = pizza + '\n' +
//               pizza.substring(0, 4) + '\n' +
//               pizza.substring(0, 3) + '\n' +
//               pizza.substring(0, 2) + '\n' +
//               pizza.substring(0, 1);
// alert(message);

//Q:6
// let email = "Umerarshad42101@gmail.com"; 
// let message = "My email address is " + email;
// alert(message);

//Q:7
// let book = "A Smarter Way to Learn JavaScript";
// let message = "I am trying to learn from the book : " + book;
// alert(message);

// Q:8
// document.write("Yah! I can write HTML content through JavaScript");

// Q:9




//// CHAPTER = 3 

// Q:1
// var age = 15;
// alert("Your age is: " + age);

// Q:2
//   // Retrieve the current visit count or set it to 0 if not found
//var visitCount = +(localStorage.getItem('visitCount') || '0') + 1;

//   // Save the updated visit count back to localStorage
//localStorage.setItem('visitCount', visitCount);

//   // Show the visit count in an alert box
//alert("You have visited this site " + visitCount + " times");

// Q:3
// var birthYear = 2004; 
// alert("Your birth year is " + birthYear);

        // another way is 
// var birthYear = 1990;
// var message = "My birth year is " + birthYear + "<br>Data type of my declared variable is " + typeof birthYear;
// document.write(message)

// Q:4
// var visitorName = "John Doe";
// var productTitle = "T-shirt";
// var quantity = 5;
// document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");




////CHAPTER = 4

// Q:1
// var visitorName = "John Doe", productTitle = "T-shirt", quantity = 5;

// Q:2

// Legal Variable Names:
//1) userAge
//2) totalPrice
//3) itemCount
//4) isAvailable
//5) currentYear

// Illegal Variable Names:

//1) 2ndPlace (Cannot start with a number)
//2) total-price (Cannot contain hyphens)
//3) var (Reserved keyword)
//4) user name (Cannot contain spaces)
//5) class (Reserved keyword in some contexts)

// Q:3
//  document.write('<h1>Rules for Naming JS Variables</h1>');
//  document.write('<p>1. Variable names can only contain letters, numbers, <code>$</code>, and <code>_</code>. For example: <code>Smy_1stVariable</code></p>');
//  document.write('<p>2. Variable names must begin with a letter, <code>$</code>, or <code>_</code>. For example: <code>Sname</code>, <code>_name</code>, or <code>name</code></p>');
//  document.write('<p>3. Variable names are case sensitive.</p>');
//  document.write('<p>4. Variable names should not be JavaScript keywords.</p>');





////CHAPTER = 5

// Q:1
//   var num1 = prompt("Enter the first number:");
//   var num2 = prompt("Enter the second number:");
//   var sum = parseFloat(num1) + parseFloat(num2);
//   document.write("The sum of " + num1 + " and " + num2 + " is: " + sum);

// Q:2
// subtraction
// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");
// var number1 = Number(num1);
// var number2 = Number(num2);
// var difference = number1 - number2;
// document.write("The difference between " + number1 + " and " + number2 + " is: " + difference);

// Multiplication
// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");
// var number1 = Number(num1);
// var number2 = Number(num2);
// var difference = number1 * number2;
// document.write("The difference between " + number1 + " and " + number2 + " is: " + difference);

// Division
// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");
// var number1 = Number(num1);
// var number2 = Number(num2);
// var difference = number1 / number2;
// document.write("The difference between " + number1 + " and " + number2 + " is: " + difference);

// Modulus
// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");
// var number1 = Number(num1);
// var number2 = Number(num2);
// var difference = number1 % number2;
// document.write("The difference between " + number1 + " and " + number2 + " is: " + difference);

// Q:3
//  // a. Declare a variable
//  var myVariable;
        
//  // b. Show the value of variable in the browser
//  document.write("Value after variable declaration is: " + myVariable + "<br>");
 
//  // c. Initialize the variable with some number
//  myVariable = 5;
 
//  // d. Show the value of variable
//  document.write("Initial value: " + myVariable + "<br>");
 
//  // e. Increment the variable
//  myVariable++;
 
//  // f. Show the value after increment
//  document.write("Value after increment is: " + myVariable + "<br>");
 
//  // g. Add 7 to the variable
//  myVariable += 7;
 
//  // h. Show the value after addition
//  document.write("Value after addition is: " + myVariable + "<br>");
 
//  // i. Decrement the variable
//  myVariable--;
 
//  // j. Show the value after decrement
//  document.write("Value after decrement is: " + myVariable + "<br>");
 
//  // k. Show the remainder after dividing the variable's value by 3
//  var remainder = myVariable % 3;
 
//  // l. Output the remainder
//  document.write("The remainder is: " + remainder);

// Q:4
// var ticketPrice = 600; 
// var numberOfTickets = 5;
// var totalCost = ticketPrice * numberOfTickets;
// document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR");

// Q:5
    //   var number = 2;
    //   console.log(number + " x 1 = " + (number * 1));
    //   console.log(number + " x 2 = " + (number * 2));
    //   console.log(number + " x 3 = " + (number * 3));
    //   console.log(number + " x 4 = " + (number * 4));
    //   console.log(number + " x 5 = " + (number * 5));
    //   console.log(number + " x 6 = " + (number * 6));
    //   console.log(number + " x 7 = " + (number * 7));
    //   console.log(number + " x 8 = " + (number * 8));
    //   console.log(number + " x 9 = " + (number * 9));
    //   console.log(number + " x 10 = " + (number * 10))

// Q:6
        // // a. Store a Celsius temperature into a variable
        // var celsius = 25;
        // // b. Convert Celsius to Fahrenheit
        // var fahrenheit = (celsius * 9 / 5) + 32;
        // // Output the result
        // document.write(celsius + "°C is " + fahrenheit + "°F<br>");
        // // c. Store a Fahrenheit temperature into a variable
        // var fahrenheitTemp = 70;
        // // d. Convert Fahrenheit to Celsius
        // var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
        // // Output the result
        // document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C");

// Q:7
    // var priceItem1 = 650;
    // var priceItem2 = 100;
    // var quantityItem1 = 3;
    // var quantityItem2 = 7;
    // var shippingCharges = 100;
    // var totalCostItem1 = priceItem1 * quantityItem1;
    // var totalCostItem2 = priceItem2 * quantityItem2;
    // var totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;

    // // Display the receipt in console

    // console.log ("\nShopping Cart\n");    
    // console.log("Price of item 1 is " + priceItem1 );
    // console.log("Quantity of item 1 is " + quantityItem1 );
    // console.log("Price of item 2 is " + priceItem2);
    // console.log("Quantity of item 2 is " + quantityItem2 );
    // console.log("Shipping Charges: " + shippingCharges );
    // console.log ("\nTotal cost of your order is " + totalCost);
    
    // // Display the receipt in browser

    // document.write("<h1>Shopping Cart</h1>");
    // document.write("Price of item 1 is " + priceItem1 + "<br>");
    // document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
    // document.write("Price of item 2 is " + priceItem2 + "<br>");
    // document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
    // document.write("Shipping Charges: " + shippingCharges + "<br>");
    // document.write("Total cost of your order is " + totalCost);

// Q:8
//    var totalMarks = 980;
//    var marksObtained = 804;
//    var percentage = (marksObtained / totalMarks) * 100;

     // // Display the receipt in console
//     console.log("\nMarks Sheet")
//     console.log("\nTotal marks: " + totalMarks )
//     console.log("Marks obtained: " + marksObtained )
//     console.log("Percentage: " + percentage.toFixed(2) + "%")

    // // Display the receipt in browser
//    document.write("<h1>Marks Sheet</h1>");
//    document.write("Total marks: " + totalMarks + "<br>");
//    document.write("Marks obtained: " + marksObtained + "<br>");
//    document.write("Percentage: " + percentage.toFixed(2) + "%");

// Q:9
// var usdToPkr = 104.80;
// var sarToPkr = 28;
// var usd = 10;
// var sar = 25;
// var totalPkr = (usd * usdToPkr) + (sar * sarToPkr);

// // Display the receipt in console
// console.log("\nCurrency in PKR");
// console.log("Total Currency in PKR: " + totalPkr);


// // Display the receipt in browser
// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR: " + totalPkr);

// Q:10
// var initialNumber = 7; 
// var result = ((initialNumber + 5) * 10) / 2;
// console.log("The result after performing the arithmetic operations is: " + result);

// Q:11
// var currentYear = 2016;
// var birthYear = 1992;
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1; 

// // Output the results to the screen
// document.write("<h1>Age Calculator</h1>");
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("They are either " + age1 + " or " + age2 + " years old");

// // Output the results to the console
// console.log("Age Calculator");
// console.log("Current Year: " + currentYear);
// console.log("Birth Year: " + birthYear);
// console.log("They are either " + age1 + " or " + age2 + " years old");

// Q:12
// var radius = 20; 
// var pi = 3.142;
// var circumference = 2 * pi * radius;
// var area = pi * radius * radius;

// // Output the results to the screen
// document.write("<h1>The Geometrizer</h1>");
// document.write("Radius of a circle: " + radius + "<br>");
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area);

// // Output the results to the console
// console.log("The Geometrizer");
// console.log("Radius of a circle: " + radius);
// console.log("The circumference is: " + circumference);
// console.log("The area is: " + area);

// Q:13
// var favoriteSnack = "chocolate chip";
// var currentAge = 15;
// var maxAge = 65;
// var snacksPerDay = 3;
// var totalSnacksNeeded = (maxAge - currentAge) * 365 * snacksPerDay;

// // Output the result to the screen
// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("Favourite Snack: " + favoriteSnack + "<br>");
// document.write("Current age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of snacks per day: " + snacksPerDay + "<br>");
// document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "<br><br>");

// // Output the result to the console
// console.log("The Lifetime Supply Calculator");
// console.log("Favourite Snack: " + favoriteSnack);
// console.log("Current age: " + currentAge);
// console.log("Estimated Maximum Age: " + maxAge);
// console.log("Amount of snacks per day: " + snacksPerDay);
// console.log("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);






////CHAPTER = 6-9

// Q:1
        // var a = +(prompt("Enter a number:"), 10);
        // console.log("The value of a is: " + a);

        // // display the results in the console
        // // Pre-increment
        // console.log("The value of ++a is: " + (++a));
        // // Display the current value of 'a' after pre-increment
        // console.log("Now the value of a is: " + a);
        // // Post-increment
        // console.log("The value of a++ is: " + (a++)); // This will log the value before incrementing
        // console.log("Now the value of a is: " + a);
        // // Pre-decrement
        // console.log("The value of --a is: " + (--a));
        // // Display the current value of 'a' after pre-decrement
        // console.log("Now the value of a is: " + a);
        // // Post-decrement
        // console.log("The value of a-- is: " + (a--)); // This will log the value before decrementing
        // console.log("Now the value of a is: " + a);

        // // display the results in the browser
        // document.write("<h1>Arithmetic Operations</h1>");
        // document.write("The value of a is: " + a + "<br>");
        // // Pre-increment
        // document.write("The value of ++a is: " + (++a) + "<br>");
        // document.write("Now the value of a is: " + a + "<br>");
        // // Post-increment
        // document.write("The value of a++ is: " + (a++) + "<br>");
        // document.write("Now the value of a is: " + a + "<br>");
        // // Pre-decrement
        // document.write("The value of --a is: " + (--a) + "<br>");
        // document.write("Now the value of a is: " + a + "<br>");
        // // Post-decrement
        // document.write("The value of a-- is: " + (a--) + "<br>");
        // document.write("Now the value of a is: " + a + "<br>");
    
// Q:2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// // result(--a=1),(--b=0),(++b=1),(b--=1) 
// // result= 1 - 0 + 2 + 1
// // result= 1 + 1 + 1
// // result= 3
// console.log("a is " + a);    
// console.log("b is " + b);    
// console.log("result is " + result);

// Q:3
    // var name = prompt("Please enter your name:");
    // var greetingMessage = "Hello, " + name + "! Welcome to our website.";
    // alert(greetingMessage);

// Q:5
        // var number = prompt("Enter a number to display its multiplication table:", 5 ) 

        // // Display the multiplication table in the browser
        // document.write("<h2>Multiplication Table for " + number + "</h2>");
        // document.write(number + " x 1 = " + (number * 1) + "<br>");
        // document.write(number + " x 2 = " + (number * 2) + "<br>");
        // document.write(number + " x 3 = " + (number * 3) + "<br>");
        // document.write(number + " x 4 = " + (number * 4) + "<br>");
        // document.write(number + " x 5 = " + (number * 5) + "<br>");
        // document.write(number + " x 6 = " + (number * 6) + "<br>");
        // document.write(number + " x 7 = " + (number * 7) + "<br>");
        // document.write(number + " x 8 = " + (number * 8) + "<br>");
        // document.write(number + " x 9 = " + (number * 9) + "<br>");
        // document.write(number + " x 10 = " + (number * 10) + "<br>");

        // // Display the multiplication table in the console
        // console.log("Multiplication Table for " + number);
        // console.log(number + " x 1 = " + (number * 1));
        // console.log(number + " x 2 = " + (number * 2));
        // console.log(number + " x 3 = " + (number * 3));
        // console.log(number + " x 4 = " + (number * 4));
        // console.log(number + " x 5 = " + (number * 5));
        // console.log(number + " x 6 = " + (number * 6));
        // console.log(number + " x 7 = " + (number * 7));
        // console.log(number + " x 8 = " + (number * 8));
        // console.log(number + " x 9 = " + (number * 9));
        // console.log(number + " x 10 = " + (number * 10));

// Q:6

// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");
// var totalMarksPerSubject = 100;
// var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"), 10);
// var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"), 10);
// var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"), 10);
// var totalMarks = totalMarksPerSubject * 3;
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / totalMarks) * 100;

// // Display the results in a table in the browser
// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><td colspan='2'>Total</td><td>" + totalObtainedMarks + "</td></tr>");
// document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("</table>");

// // Display the results in the console
// console.log("Marks Sheet");
// console.log("Subject: " + subject1 + " | Total Marks: " + totalMarksPerSubject + " | Obtained Marks: " + obtainedMarks1);
// console.log("Subject: " + subject2 + " | Total Marks: " + totalMarksPerSubject + " | Obtained Marks: " + obtainedMarks2);
// console.log("Subject: " + subject3 + " | Total Marks: " + totalMarksPerSubject + " | Obtained Marks: " + obtainedMarks3);
// console.log("Total Marks: " + totalMarks);
// console.log("Total Obtained Marks: " + totalObtainedMarks);
// console.log("Percentage: " + percentage.toFixed(2) + "%");
