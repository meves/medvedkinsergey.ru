export const isDigit = (digit: string): boolean => {
    const reducedDigit = Number(digit)
    if (typeof reducedDigit === 'number' && reducedDigit === reducedDigit) return true
    else return false
}