const values = [-10, -5, 0, 5, 10];

function squareArray(arr) {
    return arr.map(e => {
        return Math.pow(e, 2);
    }).sort(function(a, b) {
        return a - b;
    });
}

console.log(squareArray(values));