function pluralizeRecords(n) {
  if (n < 0) {
    throw new Error("Аргумент должен быть неотрицательным числом");
  }

  let recordsWord;

  // Правила для формы множественного числа на русском языке
  if (n % 10 === 1 && n % 100 !== 11) {
    recordsWord = "запись";
  } else if ((n % 10 >= 2 && n % 10 <= 4) && (n % 100 < 10 || n % 100 >= 20)) {
    recordsWord = "записи";
  } else {
    recordsWord = "записей";
  }

  return `В результате выполнения запроса было найдено ${n} ${recordsWord}`;
}

// Пример использования функции
const numberOfRecords = 21;
const resultString = pluralizeRecords(numberOfRecords);
console.log(resultString);
