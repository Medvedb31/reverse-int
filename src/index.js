module.exports = function reverse (n) {
    if (n < 0) {
        return parseInt(String(n).slice(1).split('').reverse().join(''));
    }
    else return parseInt(String(n).split('').reverse().join(''));
}
