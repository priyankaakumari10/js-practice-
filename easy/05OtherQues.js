// Check if any number is greater than 10

const arr =[1,2,3,4,510,30,90]
const ans = arr.filter((n)=> n>10);

// Find the index of all even numbers
const ans2 = arr.filter((n)=> n%2===0);

// Check if there’s a number divisible by both 3 and 5
const ans3 = arr.filter((n)=> n%3===0 && n%5===0);
console.log(ans3)