const numbers = [1, 2, 7, 4, 4, 2, 18, 259, 36, 1];

function filteredNumbers() {
  const uniqueSet = new Set(numbers);
  return Array.from(uniqueSet).sort((a, b) => a - b);
};

const result = filteredNumbers(numbers);

console.log(result);