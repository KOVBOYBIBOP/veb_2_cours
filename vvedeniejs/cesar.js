function cesar(str, shift, action) {
  const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  const alphabetLength = alphabet.length;

  const transformChar = (char, shift) => {
    const isUpperCase = char === char.toUpperCase();
    char = char.toLowerCase();

    if (alphabet.includes(char)) {
      let index = (alphabet.indexOf(char) + shift) % alphabetLength;
      if (index < 0) {
        index += alphabetLength;
      }
      const resultChar = alphabet.charAt(index);

      return isUpperCase ? resultChar.toUpperCase() : resultChar;
    }

    return char;
  };

  return str
    .split('')
    .map(char => transformChar(char, action === 'decode' ? -shift : shift))
    .join('');
}

// Пример использования функции
const messageToEncode = "эзтыхз фзъзъз";
const encodedMessage = cesar(messageToEncode, 3, 'decode');
console.log("Расшифрованное сообщение:", encodedMessage);
