function removeDuplicates(nums: number[]): number {
  let result = 0
  let indexToBeUpdated = 1
  const length = nums.length
  for (let i = 0; i < length; i++) {
    const [next, current] = [nums[i + 1], nums[i]]
    const shouldSplice = current !== next

    if (shouldSplice) {
      nums.splice(indexToBeUpdated, 1, next)
      indexToBeUpdated++
      result++
    }
  }
  return result
}

describe("removeDuplicates", () => {
  it(`returns 2 when nums = [1,1,2]`, () => {
    const nums = [1, 1, 2]
    const expectedResult = 2
    const expectedNums = [1, 2]
    const actualResult = removeDuplicates(nums)
    expect(actualResult).toEqual(expectedResult)
    for (let i = 0; i < expectedNums.length; i++) {
      expect(nums[i]).toEqual(expectedNums[i])
    }
  })

  it(`returns 5 when nums = [0,0,1,1,1,2,2,3,3,4]`, () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    const expectedResult = 5
    const actualResult = removeDuplicates(nums)
    expect(actualResult).toEqual(expectedResult)
    const expectedNums = [0, 1, 2, 3, 4]
    for (let i = 0; i < expectedNums.length; i++) {
      expect(nums[i]).toEqual(expectedNums[i])
    }
  })
})
