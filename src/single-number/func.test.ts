function singleNumber(nums: number[]): number {
  let res = 0
  for (const num of nums) {
    res = num ^ res
  }
  return res
}

describe("singleNumber", () => {
  it("returns 1 when nums = [2,2,1]", () => {
    const expectedResult = 1
    const nums = [2, 2, 1]
    const actualResult = singleNumber(nums)
    expect(actualResult).toEqual(expectedResult)
  })

  it("returns 4 when nums = [4,1,2,1,2]", () => {
    const expectedResult = 4
    const nums = [4, 1, 2, 1, 2]
    const actualResult = singleNumber(nums)
    expect(actualResult).toEqual(expectedResult)
  })

  it("returns 1 when nums = [1]", () => {
    const expectedResult = 1
    const nums = [1]
    const actualResult = singleNumber(nums)
    expect(actualResult).toEqual(expectedResult)
  })
})
