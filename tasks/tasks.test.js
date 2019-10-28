var {compress, 
    palindrom, 
    join, 
    arraySumm, 
    isMonotone, 
    getValue, 
    strCompress} = require('./');
const assert = require('assert');

describe("Poliform", () => {
    it('("Ш4л4ш") => true', () => {
        assert.equal(palindrom('Ш4л4ш'), true)
    });
    it('("Eva, can I see bees in a cave?") => true', () => {
        assert.equal(palindrom('Eva, can I see bees in a cave?'), true)
    });
    it('("Яндекс") => false', () => {
        assert.equal(palindrom('Яндекс'), false);
    });
});

describe("Compress", () => {
    it("([3, 2, 1, 5, 6, -1, 10]) => '-1,1-3,5-6,10'", () => {
        assert.equal(compress([3, 2, 1, 5, 6, -1, 10]), '-1,1-3,5-6,10')
    });
});

describe("Join", () => {
    it("('!', 1, 0, 5, -11) => '1!0!5!-11'", () => {
        assert.equal(join('!', 1, 0, 5, -11), '1!0!5!-11');
    });
});

describe("Summ of array`s numbers", () => {
    it("[1, 2, '3x'] => 6", () => {
        assert.equal(arraySumm([1, 2, '3x']), 6);
    });
    it("[1, 2, 'x3'] => 3", () => {
        assert.equal(arraySumm([1, 2, 'x3']), 3);
    });
    it("[1, [1, 2], 2] => 6", () => {
        assert.equal(arraySumm([1, [1, 2], 2]), 6);
    });
});

describe("Array is monotonous", () => {
    it("([0, 1, 5, 9, 15]) => true", () => {
        assert.equal(isMonotone([0, 1, 5, 9, 15]), true)
    });
    it("([0, 1, 1, 5, 9, 9, 15]) => true", () => {
        assert.equal(isMonotone([0, 1, 1, 5, 9, 9, 15]), true)
    });
    it("([15, 8, 4, 2, 1]) => true", () => {
        assert.equal(isMonotone([15, 8, 4, 2, 1]), true)
    });
    it("([0, 1, 5, 15, 4]) => false", () => {
        assert.equal(isMonotone([0, 1, 5, 15, 4]), false)
    });
});


describe("Get object value", () => {
    const o = {
        a: {
          b: {},
          c: 42,
          v: {
              g: {
                  l: {
                      k: {
                          l: "Hello!"
                      }
                  }
              }
          }
        },
        z: null,
        u: undefined
      };
    it("(o, 'a.c') => 42", () => {
        assert.equal(getValue(o, 'a.c'), "42");
    });
    it("(o, 'a.d') => undefined", () => {
        assert.equal(getValue(o, 'a.d'), undefined);
    });
    it("(o, 'z') => null", () => {
        assert.equal(getValue(o, 'z'), null)
    });
    it("(o, 'a.v.g.l.k.l') => 'Hello!'", () => {
        assert.equal(getValue(o, 'a.v.g.l.k.l'), "Hello!")
    });
    it("(o, 'u') => null", () => {
        assert.equal(getValue(o, 'u'), undefined)
    });
});

describe("Compress string", () => {
    it("('AAABbbbBcCCC') => 'A3Bb3BcC3'", () => {
        assert.equal(strCompress('AAABbbbBcCCC'), 'A3Bb3BcC3');
    });
    it("('bbbbbbbbbbbbCbCCCC') => 'b12CbC4'", () => {
        assert.equal(strCompress('bbbbbbbbbbbbCbCCCC'), 'b12CbC4');
    });
});