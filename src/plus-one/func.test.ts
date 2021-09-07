function plusOne(digits: number[]): number[] {
  const digitsString = digits.join("")
  const digitsInt = BigInt(digitsString)
  const incrementedInt = digitsInt + BigInt(1)
  const result = incrementedInt.toString().split("").map(Number)
  return result
}

describe("plusOne", () => {
  it("returns [1, 2, 4] when digits = [1,2,3]", () => {
    const digits = [1, 2, 3]
    const expectedResult = [1, 2, 4]
    const actualResult = plusOne(digits)
    expect(actualResult).toEqual(expectedResult)
  })

  it("returns [4, 3, 2, 2] when digits = [4,3,2,1]", () => {
    const digits = [4, 3, 2, 1]
    const expectedResult = [4, 3, 2, 2]
    const actualResult = plusOne(digits)
    expect(actualResult).toEqual(expectedResult)
  })

  it("returns [1] when digits = [0]", () => {
    const digits = [0]
    const expectedResult = [1]
    const actualResult = plusOne(digits)
    expect(actualResult).toEqual(expectedResult)
  })

  it("returns [1,0] when digits = [9]", () => {
    const digits = [9]
    const expectedResult = [1, 0]
    const actualResult = plusOne(digits)
    expect(actualResult).toEqual(expectedResult)
  })

  it.only("returns [7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,7] when digits = [7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,6]", () => {
    // prettier-ignore
    const digits = [7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,6]
    // prettier-ignore
    const expectedResult = [7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,7]
    const actualResult = plusOne(digits)
    expect(actualResult).toEqual(expectedResult)
  })
})
