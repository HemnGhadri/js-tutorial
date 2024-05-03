// 1- Declare Function: In this way you can write function after usage because js load function in first step
function my_function(first_name, last_name) {
    console.log(`${first_name} ${last_name}`)
}

my_function("John", "Meyers")

// 2- New way expression function: in this way you should write function before usage
const my_function2 = function (first_name, last_name) {
    console.log(`${first_name} ${last_name}`)
}
my_function2("John", "Meyers")

// New New way is arrow function: This way is better
const my_function3 = (first_name, last_name) => {
    console.log(`${first_name} ${last_name}`)
}
my_function3("John", "Meyers")
//=============== Example 2
const add = (a, b) => a + b;
console.log(add(5,6))
//=============== Example 3
const addWith5 = a => a + 5;
console.log(addWith5(13))
//=============== Example 4
const addWith6 = a => {return a + 6};
console.log(addWith6(13))
//=============== Example 5

let arr = [1,2,3,4,5,6]
arr.forEach(n=>console.log(n))