function getSortedArray(array, key) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const current = array[j][key];
      const next = array[j + 1][key];

      if (current > next) {
        // меняем элементы местами
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

// Пример использования функции
const objectsArray = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];

const sortedArray = getSortedArray(objectsArray, 'age');
console.log("Отсортированный массив:", sortedArray);
