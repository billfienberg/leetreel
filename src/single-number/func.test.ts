function singleNumber(nums: number[]): number {
  let res = 0
  const rows = []
  for (const num of nums) {
    const targetLength = res.toString(2).length
    const updatedRes = num ^ res
    const updatedResAsBinaryString = updatedRes.toString(2)
    const numAsBinaryString = num.toString(2).padStart(targetLength, "0")
    const resAsBinaryString = res.toString(2).padStart(targetLength, "0")
    const paddedResAsBinaryString = updatedResAsBinaryString.padStart(targetLength, "0")
    rows.push({ res, resAsBinaryString, num, numAsBinaryString, updatedRes, paddedResAsBinaryString })
    res = updatedRes
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
