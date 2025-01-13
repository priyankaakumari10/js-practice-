const ar= [1,2,3,4,8,6];

const updatedAr=ar.map((n)=>(2*n));
console.log(updatedAr)
//inline without extra space
for(n of ar.keys()){
    ar[n] = 2*ar[n]
}
console.log(ar)