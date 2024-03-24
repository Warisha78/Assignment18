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
// var username = prompt("Enter your username:");

// Flag to track if username is valid
// var isValid = true;

// Check if username contains any special symbols
// for (var i = 0; i < username.length; i++) {
//   var charCode = username.charCodeAt(i);
//   if (
//     charCode === 33 ||
//     charCode === 44 ||
//     charCode === 46 ||
//     charCode === 64
//   ) {
//     isValid = false;
//     break;
//   }
// }

// // Display appropriate message based on username validity
// if (!isValid) {
//   alert("Please enter a valid username without special symbols [@, ., , , !]");
// } else {
//   alert("Username is valid: " + username);
// }
// // Q14
// var ingredients = ["cookie", "cake", "apple pie", "chips", "patties"];

// var order = prompt(
//   "welcome to pie in the sky! what you like to have?"
// ).toLowerCase();
// var flag = false;
// for (var i = 0; i < ingredients.length; i++) {
//   if (ingredients[i].toLowerCase() === order) {
//     flag = "true";
//     break;
//   }
// }
// if (flag) {
//   alert(order + " is available");
// } else {
//   alert("sorry " + order + " is not in our  menu");
// }
// // Q15
// var str = "University of Karachi";
// var newStrr = str.split("");
// for (var i = 0; i < newStrr.length; i++) {
//   document.write(newStrr[i] + "<br> ");
// }
// Q16;
// // Prompt user for input
// var userInput = prompt("Enter a string:");
// var lastCharacter = userInput[userInput.length - 1];
// alert("Last character: " + lastCharacter);
// // Q17
// var sentence = "The quick brown fox jump over the lazy dog";
// var lowerCaseSentence = sentence.toLowerCase();
// var words = lowerCaseSentence.split(" ");
// var count = 0;
// for (var i = 0; i < words.length; i++) {
//   if (words[i] === "the") {
//     count++;
//   }
// }

// // Display the count
// document.write("Number of occurrences of 'the':", count);
// PDF second
// chapter 21
// // 1()
// var x = "I have done my Assignment";
// var x = x.toLowerCase();
// var x = "I have done my Assignment";
// // var x = x.toUpperCase();
// var x = ("Example string");
// // var y = x.toLowerCase();
// var arr = ["Pencil,rubber,scale"];
// var newArr = arr[0].toLowerCase();
// document.write(newArr);
// var str = "example string";
// var newStr = str.toUpperCase();
// // alert(newStr);
// var city = "kaRacHi";
// var capatalizedWord =
//   city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
// document.write(capatalizedWord);
// // Chapter22-25
// var sameWords = "captain";
// var differentWord = sameWords.slice(1, 3);
// console.log(differentWord);
// var string = "Gokberk Yildrim";
// var num = string.length;
// // console.log(num);
// var animal = "elephant";
// var newAnimal = animal.slice(2, 6);
// var newString = newAnimal;
// // console.log(newString);
// var string = "Gokberk Yildrim";
// var num = string.length;
// var reduceStr = string.slice(0, 1) + string.slice(-3);
// console.log(num);
// console.log(reduceStr);
// var text = "to be or not to be";
// var indx = text.lastIndexOf("be");
// console.log(indx);
// // ans is 16
// var text = "to be or not to be";
// var indx = text.indexOf("be");
// // console.log(indx);
// var sentence = "if they wanna go , let them go";
// var newSentence = sentence.lastIndexOf("go");
// console.log(newSentence);
// if (str.charAt(indexNum) !== '') {
// // }
// var string = "abcde";
// var newString = string.charAt(2);
// console.log(newString);
// var string = "Gokberg Yildrim";
// var newString = string.charAt(10);
// var result = newString;
// console.log(result);
// var string = "Gokberg Yildrim";
// var newString = string.lastIndexOf("m");
// var x = newString;
// console.log(x);
// var string = "Gokberg Yildrim";
// var newString = string.charAt(5);
// var x = newString;
// console.log(x);
