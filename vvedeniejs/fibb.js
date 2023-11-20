function fibb(n) {
  if (n < 0 || n > 1000) {
    throw new Error("Аргумент должен быть неотрицательным числом не больше 1000");
  }

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return n === 0 ? a : b;
}

// Пример использования функции
const fibonacciNumber = 10;
const resultFibonacci = fibb(fibonacciNumber);
console.log(`Число Фибоначчи под номером ${fibonacciNumber} равно ${resultFibonacci}`);
