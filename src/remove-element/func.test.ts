function removeElement(nums: number[], val: number): number {
  let result = 0
  let indexToBeUpdated = 0
  const rows = []
  const lastIndex = nums.length - 1
  for (let i = 0; i < nums.length; i++) {
    if (nums.length > 100) {
      throw new Error("You created an infinte loop")
    }
    const islastIndex = i === lastIndex
    const before = [...nums].join(",")
    const currentIndex = i
    const nextIndex = i + 1
    const [current, next] = [nums[i], nums[nextIndex]]
    // When are we able to splice?

    const shouldSplice = current === val && !islastIndex

    // last element
    if (islastIndex) {
    } else {
      // all other elements
      nums.splice(indexToBeUpdated, 2, next, 81)
      indexToBeUpdated++
      if (nextIndex !== lastIndex) {
        result++
      }
    }

    const after = [...nums].join(",")
    const row = { islastIndex, current, next, shouldSplice, indexToBeUpdated, numsBefore: before, numsAfter: after }
    rows.push(row)
  }
  console.table(rows)
  console.log({ result })
  return result
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
