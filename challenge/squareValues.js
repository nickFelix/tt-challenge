function squareArray(arr) {
    return arr.map(e => {
        return Math.pow(e, 2);
    }).sort(function(a, b) {
        return a - b;
    });
}

module.exports = squareArray