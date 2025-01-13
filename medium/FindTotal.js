const products = [
    { id: 1, name: 'Shoes', price: 75 },
    { id: 2, name: 'Hat', price: 20 },
    { id: 3, name: 'Jacket', price: 100 }
];

const total = products.reduce((acc,num)=>acc + num.price,0)
console.log(total)

// Find the first student with a grade 'A':

const students = [
    { name: 'John', grade: 'B' },
    { name: 'Jane', grade: 'A' },
    { name: 'Paul', grade: 'C' },
    { name: 'Rahul', grade: 'A' }

];


const ans =students.filter((student)=>student.grade==='A')[0]

console.log(ans)