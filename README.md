**Substitution, Caesar, and Polybius Ciphers**

This repository contains JavaScript implementations of three classical ciphers: Substitution Cipher, Caesar Cipher, and Polybius Cipher. These ciphers are implemented as functions within JavaScript modules and can be used for encoding and decoding messages.

### Usage

1. **Substitution Cipher**:
   - The substitution cipher function takes three parameters: the input string to be encoded/decoded, the substitution alphabet, and an optional parameter indicating whether to encode or decode (default is encoding).
   - To encode a message, provide the input string and the substitution alphabet.
   - To decode a message, provide the input string, the substitution alphabet, and set the encode parameter to false.
   - Example usage:
     ```javascript
     const { substitution } = require('./substitution');
     
     const encodedMessage = substitution("Hello, world!", "zyxwvutsrqponmlkjihgfedcba");
     console.log(encodedMessage); // Output: "Svool, dliow!"
     
     const decodedMessage = substitution("Svool, dliow!", "zyxwvutsrqponmlkjihgfedcba", false);
     console.log(decodedMessage); // Output: "Hello, world!"
     ```

2. **Caesar Cipher**:
   - The Caesar cipher function takes three parameters: the input string to be encoded/decoded, the shift value, and an optional parameter indicating whether to encode or decode (default is encoding).
   - To encode a message, provide the input string and the shift value.
   - To decode a message, provide the input string, the shift value, and set the encode parameter to false.
   - Example usage:
     ```javascript
     const { caesar } = require('./caesar');
     
     const encodedMessage = caesar("Hello, world!", 3);
     console.log(encodedMessage); // Output: "khoor, zruog!"
     
     const decodedMessage = caesar("khoor, zruog!", 3, false);
     console.log(decodedMessage); // Output: "hello, world!"
     ```

3. **Polybius Cipher**:
   - The Polybius cipher function takes two parameters: the input string to be encoded/decoded and an optional parameter indicating whether to encode or decode (default is encoding).
   - To encode a message, provide the input string.
   - To decode a message, provide the input string and set the encode parameter to false.
   - Example usage:
     ```javascript
     const { polybius } = require('./polybius');
     
     const encodedMessage = polybius("Hello, world!");
     console.log(encodedMessage); // Output: "3251131343 2543241341!"
     
     const decodedMessage = polybius("3251131343 2543241341", false);
     console.log(decodedMessage); // Output: "hello, world!"
     ```

### Notes
- Each cipher function is encapsulated within its own JavaScript module for easy integration and testing.
- The provided implementation ensures that the original input case is maintained during encoding and decoding.
- Ensure that the provided alphabet for substitution cipher contains exactly 26 unique characters.
- For the Polybius cipher, the number '42' represents both 'i' and 'j'.
