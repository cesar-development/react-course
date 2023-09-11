export function compoundInterest(deposit, contribution, years, rate) {
  let total = deposit

  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1)
  }

  return Math.round(total)
}
