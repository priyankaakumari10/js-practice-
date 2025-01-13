const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
 ];

 const names = users.map((user)=> user.name)

 console.log(names)

//  Filter products with a price greater than $50: 

const products = [
    { id: 1, name: 'Shoes', price: 75 },
    { id: 2, name: 'Hat', price: 20 },
    { id: 3, name: 'Jacket', price: 100 }
    
];

const price_grt_50 = products.filter((pro)=> pro.price>50)

console.log(price_grt_50)