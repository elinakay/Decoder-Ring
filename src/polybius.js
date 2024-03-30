const polybiusModule = (function () {
  // Function for encoding and decoding messages using the Polybius square cipher
  function polybius(input, encode = true) {
    // Define the Polybius square cipher alphabet
    const alphabet = {
      a: 11, b: 21, c: 31, d: 41, e: 51,
      f: 12, g: 22, h: 32, i: 42, j: 42,
      k: 52, l: 13, m: 23, n: 33, o: 43,
      p: 53, q: 14, r: 24, s: 34, t: 44,
      u: 54, v: 15, w: 25, x: 35, y: 45, z: 55,
    };
  
    // Return false if no input is provided
    if (!input) return false;
  
    const inputLowerCase = input.toLowerCase();
    const inputArray = inputLowerCase.split("");
  
    // Encoding
    if (encode) {
      const resultArray = inputArray.map((char) => {
        if (char === " ") return " ";
        if (char === "i" || char === "j") return "42"; // 'i' and 'j' share the same Polybius code
        const num = alphabet[char];
        return num ? num.toString() : "";
      });
      return resultArray.join("");
    }
  
    // Decoding
    const inputString = inputArray.join("");
    const resultArray = [];
    let i = 0;
    while (i < inputString.length) {
      const char = inputString[i];
      if (char === " ") {
        resultArray.push(" ");
        i++;
        continue;
      }
      const num = parseInt(inputString.slice(i, i + 2));
      if (num === 42) {
        resultArray.push("(i/j)"); // Decode Polybius code 42 as 'i/j'
        i += 2;
        continue;
      }
      if (num < 11 || num > 55) {
        return false; // Return false for invalid Polybius codes
      }
      // Find the corresponding letter for the Polybius code
      const alphabetEntry = Object.entries(alphabet).find(
        ([key, value]) => value === num
      );
      if (alphabetEntry) {
        const [key] = alphabetEntry;
        resultArray.push(key);
        i += 2;
        continue;
      }
      return false;
    }
    return resultArray.join("");
  }

  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };

