import { addAmount } from "./addAmount.helper"
const data = [1, 2, 3]

test("should return 6", () => {
  expect(addAmount(data)).toBe(6)
})
