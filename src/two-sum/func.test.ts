/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums: any[], target: any) {
  if (nums.length === 2) return [0, 1]
  const map = {} as any
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const complement = target - num
    const hasComplement = !!map[complement]

    if (map[num]) {
      map[num].indexes.push(i)
    } else {
      const entry = { num, complement, indexes: [i] }
      map[num] = entry
    }
    if (hasComplement) {
      const complementEntry = map[complement]
      const indexOfComplement = complementEntry.indexes[0]
      const result = [indexOfComplement, i]
      return result
    }
  }
  throw new Error("There must be an answer")
}

describe("twoSum", () => {
  it("returns [0,1] when nums = [2,7,11,15], target = 9", () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    const actualResult = twoSum(nums, target)
    const expectedResult = [0, 1]
    expect(actualResult).toEqual(expectedResult)
  })

  it("returns [1,2] when nums = [3,2,4], target = 6", () => {
    const nums = [3, 2, 4]
    const target = 6
    const actualResult = twoSum(nums, target)
    const expectedResult = [1, 2]
    expect(actualResult).toEqual(expectedResult)
  })

  it("returns [0,1] when nums = [3,3], target = 6", () => {
    const nums = [3, 3]
    const target = 6
    const actualResult = twoSum(nums, target)
    const expectedResult = [0, 1]
    expect(actualResult).toEqual(expectedResult)
  })

  it("returns [0,1] when nums = [3,2,3], target = 6", () => {
    const nums = [3, 2, 3]
    const target = 6
    const actualResult = twoSum(nums, target)
    const expectedResult = [0, 2]
    expect(actualResult).toEqual(expectedResult)
  })
})
