// ### 4. Checking if it's an Array
// **Instructions:**
// 1. Create different variables, each containing either an array or a non-array value.
// 2. Now use isArray to check if each variable is an array.
// 3. Print a message to the console indicating whether each variable is an array or not.

let name = "your name";
let visitedCountry = ["bangladesh", "india", "bidesh"];
let age = 25;

console.log(Array.isArray(name));
console.log(Array.isArray(visitedCountry));
console.log(Array.isArray(age));

if(Array.isArray(name)) {
    console.log("It is an array");
} else {
    console.log("It is not an array");
}
if(Array.isArray(visitedCountry)) {
    console.log("It is an array");
} else {
    console.log("It is not an array");
}
if(Array.isArray(age)) {
    console.log("It is an array");
} else {
    console.log("It is not an array");
}