const substitutionModule = (function () {
  // Function for encoding and decoding messages using the substitution cipher
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

  // Expose the substitution function
  return {
    substitution,
  };
})();

// Export the substitution function for testing purposes
module.exports = { substitution: substitutionModule.substitution };

