// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // Check if the substitution alphabet is missing or not exactly 26 characters
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
  
    // Check if the substitution alphabet contains unique characters
    const charSet = new Set(alphabet);
    if (charSet.size !== 26) {
      return false;
    }
  
    // Convert the input to lowercase
    const lowerInput = input.toLowerCase();
  
    // Initialize the result string
    let result = "";
  
    // Define the original alphabet
    const originalAlphabet = "abcdefghijklmnopqrstuvwxyz";
  
    // Define the source and target alphabets based on the encode parameter
    const sourceAlphabet = encode ? originalAlphabet : alphabet;
    const targetAlphabet = encode ? alphabet : originalAlphabet;
  
    // Iterate over each character in the input
    for (let i = 0; i < lowerInput.length; i++) {
      const char = lowerInput[i];
  
      // Check if the character is alphabetic
      if (char.match(/[a-z]/i)) {
        // Find the corresponding character in the source alphabet
        const charIndex = sourceAlphabet.indexOf(char);
        if (charIndex === -1) {
          // Character not found in source alphabet
          result += char;
        } else {
          // Find the corresponding character in the target alphabet
          const substitutionChar = targetAlphabet[charIndex];
          // Append the substituted character to the result
          result += substitutionChar;
        }
      } else {
        // Append non-alphabetic characters after converting them to alphabet
        const substitutionChar = alphabet.indexOf(char) !== -1 ? targetAlphabet[alphabet.indexOf(char)] : char;
        result += substitutionChar;
      }
    }
  
    // Return the result
    return result;
  }
  
  
  
  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
