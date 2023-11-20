function countDuplicates(arr) {
  const countMap = {};

  arr.forEach(num => {
    countMap[num] = (countMap[num] || 0) + 1;
  });

  const result = {};
  for (const num in countMap) {
    if (countMap[num] > 1) {
      result[num] = countMap[num];
    }
  }

  return result;
}

// Пример использования функции
const inputArray = [1, 2, 3, 4, 2, 3, 5, 6, 6];
const duplicatesCount = countDuplicates(inputArray);
console.log("Повторяющиеся числа:", duplicatesCount);
