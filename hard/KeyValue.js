const employees = [
    { id: 1, name: 'Alice', role: 'Developer' },
    { id: 2, name: 'Bob', role: 'Designer' },
    { id: 3, name: 'Charlie', role: 'Manager' }
];


const ans = employees.reduce((acc,emp)=>{
  acc[emp.id] = emp;
  return acc
},{})
console.log(ans)