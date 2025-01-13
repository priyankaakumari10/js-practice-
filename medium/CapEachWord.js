// Capitalize the first letter of each word
const words = ['hello', 'world', 'javascript'];

const ans=[];

for(let i=0;i<words.length;i++){
    ans[i] = words[i].replace(words[i].charAt(0),words[i].charAt(0).toUpperCase());
}

const mapAns = words.map((word)=>word.replace(word.charAt(0),word.charAt(0).toUpperCase()));

function capitalize(word){
    return word.replace(word.charAt(0),word.charAt(0).toUpperCase());
}
const eachAns = words.forEach((word)=>capitalize(word)) // not working
console.log(eachAns) // undefined

// diffrence between forEach and map
// .forEach(): Iterates over the array, but returns undefined. It’s used when you want to execute a side effect (like modifying an external variable or logging something), but not when you need to collect the results.
// .map(): Iterates over the array, applies the function, and returns a new array with the transformed values.