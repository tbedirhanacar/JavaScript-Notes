console.clear()//this will clear the console after every run

/*
    Primitive Data Types in JS
    String, number, boolean, null, undefined
*/

var myName = 'javascript'
console.log(typeof(myName));//"string"
console.log(myName);

var myName = "java"
console.log(typeof(myName));

/* 
    Number literal:
    we only have number data type, no int, no double, no byte
*/

var myNum=20;
console.log(typeof(myNum));//"number"
var myNum=20.9;
console.log(typeof(myNum));//"number"

var myNum=20/0;
console.log(myNum);//"Infinity"
console.log(typeof(myNum));//"number"

//String + number
var num2='a'+20;
console.log(num2); //a20
console.log(typeof(num2));//"string"

/* 
    boolean:
    True or False
 */

var isExist = true;
console.log(isExist);//true
console.log(typeof(isExist));//"boolean"

/*
    null
*/

var pickedColor = null;
console.log(pickedColor);//null
console.log(typeof(pickedColor));//"object"

/*
    undefined
*/

var selectedCar
console.log(selectedCar);//undefined
console.log(typeof(selectedCar));//"undefined"


