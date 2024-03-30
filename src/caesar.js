// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

    const caesarModule = (function () {

    // Caesar function for encoding and decoding messages using the Caesar cipher
      function caesar(input, shift, encode = true) {
        if (!shift || shift === 0 || shift < -25 || shift > 25) {
          return false;
        }
        
        shift = ((shift % 26) + 26) % 26; // normalize shift to be within 0-25 range
        
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
      
        input = input.toLowerCase(); // convert input to lowercase
      
        for (let i = 0; i < input.length; i++) {
          let char = input[i];
          let index = alphabet.indexOf(char);
        
          if (index === -1) {
            result += char;
            continue;
          }
        
          if (!encode) {
            index = (index - shift + 26) % 26;
          } else {
            index = (index + shift) % 26;
          }
        
          let shiftedChar = alphabet[index];
        
          result += shiftedChar;
        }
        
        return result;
      }
      
         

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
