function singleNumber(nums: number[]): number {
  if (nums.length === 1) return nums[0]

  const map = {}
  for (const num of nums) {
    if (map[num]) {
      map[num]++
    } else {
      map[num] = 1
    }
  }
  const entries = Object.entries(map)
  const targetEntry = entries.find((entry) => {
    const value = entry[1]
    if (value === 1) {
      return true
    } else {
      return false
    }
  })
  const result = parseInt(targetEntry[0], 10)
  return result
}

describe.only("singleNumber", () => {
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
