function pow(x, n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("Натуральное значение n поддерживается только");
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

// Пример использования функции
const base = 2;
const exponent = 3;
const result = pow(base, exponent);
console.log(`${base} в степени ${exponent} равно ${result}`);
