
const items = [
    { id: 1, name: 'Shirt', category: 'Clothing' },
    { id: 2, name: 'Pants', category: 'Clothing' },
    { id: 3, name: 'Milk', category: 'Grocery' },
    { id: 4, name: 'Bread', category: 'Grocery' },
    { id: 4, name: 'ots', category: 'Grocery' },
];

const obj = {};

items.map((item)=>{
  if(!obj[item.category]){
     obj[item.category] = [];
  }
    obj[item.category].push(item)
})

console.log(obj)