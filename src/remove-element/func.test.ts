function removeElement(nums: number[], val: number): number {
  const originalNums = [...nums].join(",")
  let numberOfSplices = 0
  let rightPointer = nums.length - 1
  const rows = []
  for (let i = 0; i <= rightPointer; i++) {
    if (nums.length > 100) {
      throw new Error("You created an infinte loop")
    }

    const leftElement = nums[i]
    const rightElement = nums[rightPointer]
    if (leftElement === val) {
      numberOfSplices++
      nums.splice(i, 1, rightElement)
      nums.splice(rightPointer, 1, leftElement)
    }
    if (rightElement === val) {
      i--
      rightPointer--
    }
    const newNums = [...nums].join(",")

    const row = { originalNums, i, rightPointer, newNums }
    rows.push(row)
  }
  const result = nums.length - numberOfSplices
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
    const expectedNums = nums.filter((x) => x !== val).sort()
    expect(actualResult).toEqual(expectedResult)
    expect(nums.slice(0, expectedResult).sort()).toEqual(expectedNums)
  })

  it("returns 5 when nums = [0,1,2,2,3,0,4,2], val = 2", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2]
    const val = 2
    const actualResult = removeElement(nums, val)
    const expectedResult = 5
    const expectedNums = nums.filter((x) => x !== val).sort()
    expect(actualResult).toEqual(expectedResult)
    expect(nums.slice(0, expectedResult).sort()).toEqual(expectedNums)
  })

  it("returns 1 when nums = [4,5], val = 4", () => {
    const nums = [4, 5]
    const val = 4
    const actualResult = removeElement(nums, val)
    const expectedResult = 1
    const expectedNums = nums.filter((x) => x !== val).sort()
    expect(actualResult).toEqual(expectedResult)
    expect(nums.slice(0, expectedResult).sort()).toEqual(expectedNums)
  })
})
