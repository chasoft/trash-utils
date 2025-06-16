import { describe, it, expect } from 'bun:test'
import { isNum } from './index.js'

describe('index exports', () => {
  it('should export isNum function', () => {
    expect(typeof isNum).toBe('function')
    expect(isNum(42)).toBe(true)
    expect(isNum('42')).toBe(false)
  })
})
