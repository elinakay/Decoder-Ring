const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("should encode a message correctly", () => {
    const input = "message";
    const expected = "23513434112251";
    expect(polybius(input)).to.equal(expected);
  });

  it("should decode a message correctly", () => {
    const input = "23513434112251";
    const expected = "message";
    expect(polybius(input, false)).to.equal(expected);
  });

  it("should translate 'i' and 'j' to 42 when encoding", () => {
    const input = "jinx";
    const expected = "42423335";
    expect(polybius(input)).to.equal(expected);
  });

  it("should translate 42 to '(i/j)' when decoding", () => {
    const input = "42423424";
    const expected = "(i/j)(i/j)sr";
    expect(polybius(input, false)).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const input1 = "A Message";
    const input2 = "a message";
    expect(polybius(input1)).to.equal(polybius(input2));
    expect(polybius(input1, false)).to.equal(polybius(input2, false));
  });

  it('should maintain spaces in the message when encoding', () => {
    const input = 'this is a secret message';
    const expectedOutput = '44324234 4234 11 345131245144 23513434112251';
    const output = polybius(input, true);
    expect(output).to.equal(expectedOutput);
  });

  it('should maintain spaces in the message when decoding', () => {
    const input = '44324234 4234 11 345131245144 23513434112251';
    const expectedOutput = 'th(i/j)s (i/j)s a secret message';
    const output = polybius(input, false);
    expect(output).to.equal(expectedOutput);
  });
});



