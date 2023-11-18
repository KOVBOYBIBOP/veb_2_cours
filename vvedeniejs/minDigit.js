function minDigit(x) {
  if (x < 0) {
    throw new Error("Аргумент должен быть неотрицательным числом");
  }

  if (x === 0) {
    return 0;
  }

  let min = 9; // Изначально устанавливаем минимум как максимально возможную цифру

  while (x > 0) {
    const digit = x % 10;
    if (digit < min) {
      min = digit;
    }
    x = Math.floor(x / 10);
  }

  return min;
}

// Пример использования функции
const number = 95874;
const resultMinDigit = minDigit(number);
console.log(`Наименьшая цифра числа ${number} равна ${resultMinDigit}`);
