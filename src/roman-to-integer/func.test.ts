const map = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
} as any

const [I, V, X, L, C, D, M] = ["I", "V", "X", "L", "C", "D", "M"]

function romanToInt(s: string): number {
  let result = 0
  let previous, current

  for (let i = s.length - 1; i >= 0; i--) {
    current = s[i]
    const numeral = map[current]
    let shouldSubtractNumeral = false

    if (current === I && (previous === V || previous === X)) {
      shouldSubtractNumeral = true
    } else if (current === X && (previous === L || previous === C)) {
      shouldSubtractNumeral = true
    } else if (current === C && (previous === D || previous === M)) {
      shouldSubtractNumeral = true
    }

    result = shouldSubtractNumeral ? result - numeral : result + numeral
    previous = current
  }

  return result
}

describe("romanToInt", () => {
  it(`returns 3 when s = "III"`, () => {
    const s = "III"
    const actualResult = romanToInt(s)
    const expectedResult = 3
    expect(actualResult).toEqual(expectedResult)
  })

  it(`returns 4 when s = "IV"`, () => {
    const s = "IV"
    const actualResult = romanToInt(s)
    const expectedResult = 4
    expect(actualResult).toEqual(expectedResult)
  })

  it(`returns 9 when s = "IX"`, () => {
    const s = "IX"
    const actualResult = romanToInt(s)
    const expectedResult = 9
    expect(actualResult).toEqual(expectedResult)
  })

  it(`returns 58 when s = "LVIII"`, () => {
    const s = "LVIII"
    const actualResult = romanToInt(s)
    const expectedResult = 58
    expect(actualResult).toEqual(expectedResult)
  })

  it(`returns 1994 when s = "MCMXCIV"`, () => {
    const s = "MCMXCIV"
    const actualResult = romanToInt(s)
    const expectedResult = 1994
    expect(actualResult).toEqual(expectedResult)
  })
})
