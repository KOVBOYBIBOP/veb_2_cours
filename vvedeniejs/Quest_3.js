function maxOfMinRowElements(matrix) {
  const minRowValues = matrix.map(row => Math.min(...row));
  return Math.max(...minRowValues);
}

// Пример использования функции
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const result = maxOfMinRowElements(matrix);
console.log("Наибольший из минимальных элементов строк матрицы:", result);
