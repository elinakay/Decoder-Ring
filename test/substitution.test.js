const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    const actual = substitution("thinkful", "abcde");
    expect(actual).to.be.false;
  });

  it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
    const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
    const expected = "ykrrpik";
    expect(actual).to.equal(expected);
  });

  it("should return false if there are any duplicate characters in the given alphabet", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
  });

  it("should maintain spaces in the message, before and after encoding or decoding", () => {
    const actual = substitution("hello world", "plmoknijbuhvygctfxrdzeswaq");
    const expected = "jkvvc scxvo";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const actual = substitution("HeLlO wOrLd", "plmoknijbuhvygctfxrdzeswaq");
    const expected = "jkvvc scxvo";
    expect(actual).to.equal(expected);
  });
});
