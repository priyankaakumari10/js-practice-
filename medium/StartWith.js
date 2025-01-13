
const usernames = ['user123', 'admin123', 'guest456', 'admin456'];

const ans = usernames.filter((user)=> user.startsWith("admin"));

const ans2 = usernames.filter((user)=> user.slice(0,5)==="admin")

console.log(ans2)