const numbers = [1, 3, 7, 8, 5, 10];

let ans;

for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        ans=numbers[i];
        break
    }
}

let findans;
findans = numbers.find((n)=>n%2===0)


console.log(findans)