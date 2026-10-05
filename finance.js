export const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN')
// Future value of a monthly investment, compounded monthly, one point per year.
export function projection(monthly, years, annualRate = 0.1) {
  const r = annualRate / 12
  return Array.from({ length: years + 1 }, (_, y) => {
    const n = y * 12
    return { year: y, invested: monthly * n, value: n ? monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r) : 0 }
  })
}
