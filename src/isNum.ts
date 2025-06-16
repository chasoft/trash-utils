/**
 * Checks if a value is a valid number
 * @param n - The value to check
 * @returns true if the value is a valid number, false otherwise
 * 
 * @example
 * ```typescript
 * isNum(42)        // true
 * isNum('42')      // false
 * isNum(NaN)       // false
 * isNum(Infinity)  // false
 * isNum(null)      // false
 * isNum(undefined) // false
 * ```
 * 
 * @author Brian Cao - Because someone had to do it! 🤓
 */
export function isNum(n: any): n is number {
  return typeof n === 'number' && !isNaN(n) && isFinite(n)
}
