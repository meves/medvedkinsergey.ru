import { isDigit } from "./isDigit"

export const getQueryStringParamValue = (asPath: string, par: string): number | null => {
    const index = asPath.search(par)
    let digit = ''
    if (index === -1) return null
    for (let i = index + par.length+1; asPath[i] !== '&' && i !== asPath.length; i++) {
        digit += asPath[i]
    }  
    if (!isDigit(digit)) return null
    return Number(digit)
}