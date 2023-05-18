const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should return false if shift value is not present", () => {
    const input = "hello";
    const shift = undefined;
    const encode = true;
    expect(caesar(input, shift, encode)).to.be.false;
  });

  it("should return false if shift value is equal to 0", () => {
    const input = "hello";
    const shift = 0;
    const encode = true;
    expect(caesar(input, shift, encode)).to.be.false;
  });

  it("should return false if shift value is less than -25", () => {
    const input = "hello";
    const shift = -30;
    const encode = true;
    expect(caesar(input, shift, encode)).to.be.false;
  });

  it("should return false if shift value is greater than 25", () => {
    const input = "hello";
    const shift = 30;
    const encode = true;
    expect(caesar(input, shift, encode)).to.be.false;
  });

  it("should ignore capital letters", () => {
    expect(caesar("HeLLo", 1)).to.equal("ifmmp");
    expect(caesar("WorLD", 5)).to.equal("btwqi");
  });

  it("should handle right shifts that go past the end of the alphabet", () => {
    const input = "z";
    const shift = 3;
    const encode = true;
    expect(caesar(input, shift, encode)).to.equal("c");
  });

  it("should handle left shifts that go past the start of the alphabet", () => {
    const input = "a";
    const shift = -3;
    const encode = true;
    expect(caesar(input, shift, encode)).to.equal("x");
  });

  it("should maintain spaces and other non alphabetic symbols", () => {
    expect(caesar("Hello, world!", 5)).to.equal("mjqqt, btwqi!");
    expect(caesar("This is a test.", 3)).to.equal("wklv lv d whvw.");
  });

  it("should be able to decode messages", () => {
    const input = "khoor, zruog!";
    const shift = 3;
    const encode = false;
    expect(caesar(input, shift, encode)).to.equal("hello, world!");
  });
});

