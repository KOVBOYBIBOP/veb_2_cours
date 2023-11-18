function cyclicShiftLeft(arr, k) {
  const n = arr.length;
  k = k % n; // чтобы избежать избыточных сдвигов

  const shiftedArray = [...arr.slice(k), ...arr.slice(0, k)];
  return shiftedArray;
}

// Пример использования функции
const inputArray5 = [1, 2, 3, 4, 5];
const k = 2;
const shiftedArray = cyclicShiftLeft(inputArray5, k);
console.log("Циклический сдвиг влево:", shiftedArray);
