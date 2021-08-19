function reverseString(str) {
  // Step 1. Use the split() method to return a new array
  var splitString = str.split("") // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse() // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join("") // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. Return the reversed string
  return joinArray // "olleh"
}

function isPalindrome(x: number): boolean {
  if (x < 0) return false
  const stringifiedNumber = x.toString()
  const reversedStringifiedNumber = reverseString(stringifiedNumber)
  if (stringifiedNumber === reversedStringifiedNumber) return true
  return false
}

describe("isPalindrome", () => {
  it(`returns true when x = 121`, () => {
    const x = 121
    const actualResult = isPalindrome(x)
    const expectedResult = true
    expect(actualResult).toEqual(expectedResult)
  })
  it(`returns false when x = -121`, () => {
    const x = -121
    const actualResult = isPalindrome(x)
    const expectedResult = false
    expect(actualResult).toEqual(expectedResult)
  })
  it(`returns false when x = 10`, () => {
    const x = 10
    const actualResult = isPalindrome(x)
    const expectedResult = false
    expect(actualResult).toEqual(expectedResult)
  })
  it(`returns false when x = -101`, () => {
    const x = -101
    const actualResult = isPalindrome(x)
    const expectedResult = false
    expect(actualResult).toEqual(expectedResult)
  })
})
