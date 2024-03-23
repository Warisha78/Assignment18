// chapter 21-25
// // Q1
// var nameOne = prompt("Enter First Name");
// var nameTwo = prompt("Enter Last name");
// var fullName = nameOne + nameTwo;
// alert("Hello Sir/Madam");
// // Q2
// var mobile = prompt("Enter your favourite mobile");
// var length = mobile.length;
// document.write(" my favourite mobile is " + mobile + " length is " + length);
// // Q3
// var country = "pakistan";
// var indexOne = country.indexOf("n");
// alert("index of n is" + indexOne);
// Q4

// var string = "Hello world";
// var indexOne = string.lastIndexOf("l");
// alert("Last index of l is" + indexOne);
// // Q5
// var str = "pakistan";
// var index = 3;
// var character = str[index];
// alert("character at index 3 is " + character);
// // Q6;
// var nameOne = prompt("Enter First Name");
// var nameTwo = prompt("Enter Last name");
// var fullName = nameOne.concat(" ", nameTwo);
// alert("Merheba " + fullName);
// // q7
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write(newCity);
// // Q8
// var messege =
//   "Ali and Sami are best friends.they play cricket and football together";
// var newMessege = messege.replace(/and/g, "&");
// alert(newMessege);
// // Q9
// var string = "472";
// var number = +string;

// document.write(number);
// document.write("<br>" + "The type = " + typeof number);
// // Q10
// var userInput = "peanut";
// userInput = userInput.toUpperCase();
// alert(userInput);
// // Q11
// var inputString = prompt("Enter a language name");
// var capitalizedString =
//   inputString.charAt(0).toUpperCase() + inputString.slice(1);
// console.log(capitalizedString);
// // Q12;
// var string = 35.36;
// var number = string.toString().replace(".", "");
// console.log(number);
// // Q13
// var question = prompt("Enter a user name");
// var store = question;
// if ((store === "@", ".")) {
//   alert("please enter a valid username");
// } else {
//   alert("username is valid " + store);
// }
// Prompt user for username input
var username = prompt("Enter your username:");

// Flag to track if username is valid
var isValid = true;

// Check if username contains any special symbols
for (var i = 0; i < username.length; i++) {
  var charCode = username.charCodeAt(i);
  if (
    charCode === 33 ||
    charCode === 44 ||
    charCode === 46 ||
    charCode === 64
  ) {
    isValid = false;
    break;
  }
}

// Display appropriate message based on username validity
if (!isValid) {
  alert("Please enter a valid username without special symbols [@, ., , , !]");
} else {
  alert("Username is valid: " + username);
}
