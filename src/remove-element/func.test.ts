function removeElement(nums: number[], val: number): number {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
  }

  return i
}

describe("removeElement", () => {
  it("returns 2 when nums = [3,2,2,3], val = 3", () => {
    const nums = [3, 2, 2, 3]
    const val = 3
    const actualResult = removeElement(nums, val)
    const expectedResult = 2
    expect(actualResult).toEqual(expectedResult)
  })

  it("returns 5 when nums = [0,1,2,2,3,0,4,2], val = 2", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2]
    const val = 2
    const actualResult = removeElement(nums, val)
    const expectedResult = 5
    expect(actualResult).toEqual(expectedResult)
  })

  it("returns 1 when nums = [4,5], val = 4", () => {
    const nums = [4, 5]
    const val = 4
    const actualResult = removeElement(nums, val)
    const expectedResult = 1
    expect(actualResult).toEqual(expectedResult)
  })
})
