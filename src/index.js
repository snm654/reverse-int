module.exports = function reverse(n) {
    n = Math.abs(n) + ''
    let result = n[n.length - 1]
    for (let i = n.length - 2; i >= 0; i -= 1) {
        result = result + n[i];
    }
    return result
}
