const users = [
  {name: 'Ed', age: 25},
  {name: 'Alex', age: 11},
  {name: 'Vlad', age: 22},
  {name: 'Nata', age: 17},
  {name: 'Kitty', age: 24},
  
]

const filteredUsers = users.filter((user) => {
  return user.age > 18;
});

const userNames = users.map((user) => {
  return user.name;
});

console.log(filteredUsers);
console.log(userNames);
