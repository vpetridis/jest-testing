
export function addAmount(amount) {
  const reducedAmount = amount.reduce(
    (acc, current) => acc + current,
    0
  )
  console.log(reducedAmount)
  return reducedAmount
}

