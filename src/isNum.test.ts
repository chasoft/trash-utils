import { describe, it, expect } from 'bun:test'
import { isNum } from './isNum.js'

describe('isNum', () => {
  it('should return true for valid numbers', () => {
    expect(isNum(0)).toBe(true)
    expect(isNum(1)).toBe(true)
    expect(isNum(-1)).toBe(true)
    expect(isNum(42)).toBe(true)
    expect(isNum(-42)).toBe(true)
    expect(isNum(3.14)).toBe(true)
    expect(isNum(-3.14)).toBe(true)
    expect(isNum(Number.MAX_VALUE)).toBe(true)
    expect(isNum(Number.MIN_VALUE)).toBe(true)
    expect(isNum(Number.MAX_SAFE_INTEGER)).toBe(true)
    expect(isNum(Number.MIN_SAFE_INTEGER)).toBe(true)
  })

  it('should return false for NaN', () => {
    expect(isNum(NaN)).toBe(false)
    expect(isNum(Number.NaN)).toBe(false)
    expect(isNum(0 / 0)).toBe(false)
  })

  it('should return false for Infinity and -Infinity', () => {
    expect(isNum(Infinity)).toBe(false)
    expect(isNum(-Infinity)).toBe(false)
    expect(isNum(Number.POSITIVE_INFINITY)).toBe(false)
    expect(isNum(Number.NEGATIVE_INFINITY)).toBe(false)
    expect(isNum(1 / 0)).toBe(false)
    expect(isNum(-1 / 0)).toBe(false)
  })

  it('should return false for non-number types', () => {
    expect(isNum('42')).toBe(false)
    expect(isNum('0')).toBe(false)
    expect(isNum('')).toBe(false)
    expect(isNum('hello')).toBe(false)
    expect(isNum(true)).toBe(false)
    expect(isNum(false)).toBe(false)
    expect(isNum(null)).toBe(false)
    expect(isNum(undefined)).toBe(false)
    expect(isNum({})).toBe(false)
    expect(isNum([])).toBe(false)
    expect(isNum([1, 2, 3])).toBe(false)
    expect(isNum({ value: 42 })).toBe(false)
    expect(isNum(() => 42)).toBe(false)
    expect(isNum(Symbol('test'))).toBe(false)
    expect(isNum(BigInt(42))).toBe(false)
  })

  it('should work as a type guard', () => {
    const value: unknown = 42
    
    if (isNum(value)) {
      // TypeScript should now know that value is number
      expect(typeof value).toBe('number')
      expect(value.toFixed(2)).toBe('42.00')
    }
  })

  it('should handle edge cases', () => {
    expect(isNum(parseInt('invalid'))).toBe(false) // NaN
    expect(isNum(parseFloat('invalid'))).toBe(false) // NaN
    expect(isNum(Math.sqrt(-1))).toBe(false) // NaN
    expect(isNum(Number('invalid'))).toBe(false) // NaN
  })
})
