/*
    Arithmetic Operations
    +,-,*,/,%,++,--,**

    % remainder / mod

    x++ : post increment, first use x, then add 1
    ++x: pre increment, first add 1, then use x

    x--: post decrement, first add 1, then use x
    --x: pre decrement, first substract 1, then use x
*/

console.clear();

let x = 12;
let y = 3;

console.log(x++);//12
console.log(x);//12
console.log(++x);//14

x++; //x=x+1;

console.log(x);//15

x+=5//x = x+5
console.log(x);//40

x/=3; //x = x/3
console.log(x);

y+=9; //10
y%=4; //Remainder = 1

console.log(y); //2

console.log(y**3);//8 = 2^3


