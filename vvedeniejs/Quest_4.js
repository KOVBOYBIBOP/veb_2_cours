class Vector3D {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  // Сумма двух векторов
  add(vector) {
    return new Vector3D(this.x + vector.x, this.y + vector.y, this.z + vector.z);
  }

  // Покомпонентное произведение двух векторов
  multiply(vector) {
    return new Vector3D(this.x * vector.x, this.y * vector.y, this.z * vector.z);
  }

  // Разность двух векторов
  subtract(vector) {
    return new Vector3D(this.x - vector.x, this.y - vector.y, this.z - vector.z);
  }

  // Умножение вектора на скаляр
  scalarMultiply(scalar) {
    return new Vector3D(this.x * scalar, this.y * scalar, this.z * scalar);
  }

  // Длина вектора
  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  // Скалярное произведение векторов
  dotProduct(vector) {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z;
  }
}

// Пример использования класса Vector3D
const vector1 = new Vector3D(1, 2, 3);
const vector2 = new Vector3D(4, 5, 6);

const sum = vector1.add(vector2);
const product = vector1.multiply(vector2);
const difference = vector1.subtract(vector2);
const scalarProduct = vector1.scalarMultiply(2);
const vectorLength = vector1.length();
const dotProduct = vector1.dotProduct(vector2);

console.log("Сумма векторов:", sum);
console.log("Произведение векторов (покомпонентное):", product);
console.log("Разность векторов:", difference);
console.log("Умножение вектора на скаляр:", scalarProduct);
console.log("Длина вектора:", vectorLength);
console.log("Скалярное произведение векторов:", dotProduct);
