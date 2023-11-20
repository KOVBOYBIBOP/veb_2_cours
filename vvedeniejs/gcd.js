function gcd(a, b) {
  if (a < 0 || b < 0) {
    throw new Error("Аргументы должны быть неотрицательными числами");
  }

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

// Пример использования функции
const num1 = 24;
const num2 = 36;
const resultGCD = gcd(num1, num2);
console.log(`Наибольший общий делитель ${num1} и ${num2} равен ${resultGCD}`);
