export const padStart = (number, padNum = 2) => {
    return String(number).padStart(padNum, '0')
}