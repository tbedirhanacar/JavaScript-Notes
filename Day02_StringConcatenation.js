/*
    Strings:
    ' ' Single quote
    " " Double quote
    ` ` Backtick - ES6 (modern javascript)
*/

console.clear();

let fName = 'jonny';
console.log(fName);//"jonny"

let lName = "cash";
console.log(lName);//"cash"

//1.My Name is 'jonny'
//use '' inside "" to get as string
let str1 = "My name is 'jonny'";
console.log(str1);

//2.My Name is jonny (variable)
let str2 = 'My name is ' + fName;
console.log(str2);

//3.My Name is 'jonny'
//how to use and display a single quote inside a single quote
let str3 = 'My name is \'jonny\'';
console.log(str3);

//4.Backtick 
let firstName = 'Sam'
let lastName = 'Walton'
let age = 50
let location = 'Dallas'

let info = 'First Name: ' + firstName + ', Last Name: ' + lastName + ', Age: ' + age + ', Location: ' + location
console.log(info)

let personInfo= `First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}, Location: ${location}` //Better way
console.log(personInfo)