import { roundUp } from '../../modules/expense.utils'

describe('roundUp', () => {
  it('correctly rounds up a number with more than two decimal places', () => {
    const result = roundUp(16.666666)
    expect(result).toBe('16.67')
  })

  it('correctly rounds up a number with exactly two decimal places', () => {
    const result = roundUp(16.66)
    expect(result).toBe('16.66')
  })

  it('correctly rounds up a number with less than two decimal places', () => {
    const result = roundUp(16.6)
    expect(result).toBe('16.60')
  })

  it('correctly rounds up a number with no decimal places', () => {
    const result = roundUp(16)
    expect(result).toBe('16.00')
  })
})
