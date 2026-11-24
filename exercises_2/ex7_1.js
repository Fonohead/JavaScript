const person = {
  name: 'Ed',
  age: 25
}

function printInfo() {
  return `Name: ${this.name}, Age: ${this.age}`;
}

const result = printInfo.call(person);

console.log(result);

