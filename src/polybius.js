// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const alphabet = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      i: 42,
      j: 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
    };
  
    if (!input) return false;
  
    const inputLowerCase = input.toLowerCase();
    const inputArray = inputLowerCase.split("");
  
    // Encoding
    if (encode) {
      const resultArray = inputArray.map((char) => {
        if (char === " ") return " ";
        if (char === "i" || char === "j") return "42";
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
        resultArray.push("(i/j)");
        i += 2;
        continue;
      }
      if (num < 11 || num > 55) {
        return false;
      }
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
