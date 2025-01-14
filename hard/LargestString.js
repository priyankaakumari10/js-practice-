const words = ['apple', 'banana', 'watermelon', 'kiwi'];

const ans = words.reduce((acc,word)=>{
  return word.length> acc.length ? word:acc;
},"")
console.log(ans)