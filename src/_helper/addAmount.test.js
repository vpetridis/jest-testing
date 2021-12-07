import { addAmount } from "./addAmount.helper"

test("should return 3", () => {
  expect(addAmount([1, 2, 3])).to.equal(3)
})
