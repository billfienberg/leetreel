function removeElement(nums: number[], val: number): number {
  return 81
}

describe("removeElement", () => {
  it("returns 2 when nums = [3,2,2,3], val = 3", () => {
    const nums = [3, 2, 2, 3]
    const val = 3
    const actualResult = removeElement(nums, val)
    const expectedResult = 2
    expect(actualResult).toEqual(expectedResult)
    expect(nums[0]).toEqual(2)
    expect(nums[1]).toEqual(2)
  })

  it("returns 5 when nums = [0,1,2,2,3,0,4,2], val = 2", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2]
    const val = 2
    const actualResult = removeElement(nums, val)
    const expectedResult = 5
    expect(actualResult).toEqual(expectedResult)
    expect(nums[0]).toEqual(0)
    expect(nums[1]).toEqual(1)
    expect(nums[2]).toEqual(3)
    expect(nums[3]).toEqual(0)
    expect(nums[4]).toEqual(4)
  })
})
