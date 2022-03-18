/*

*/

let str1 = "I love javascript";

//length
let len = str1.length
console.log(len)

//slice(start, end(optional))
//substring(start, end(optional))

console.log(str1.slice(3))//"ove javascript"
console.log(str1.slice(-3))//"ipt" it will count backwards
console.log(str1.slice(5, 1))//"" starting index is bigger so it will give an empty result

console.log(str1.substring(3))//"ove javascript"
console.log(str1.substring(-3))//"I love javascript"
console.log(str1.substring(5, 1))//" lov" it will swap the numbers if first one is bigger
