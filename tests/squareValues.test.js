const squareArray = require('../challenge/squareValues');

test('Test Sorted Squared Array case 1', () => {
    expect(squareArray([1, 2, 3, 5, 6, 8, 9])).toEqual([1, 4, 9, 25, 36, 64, 81])
});

test('Test Sorted Squared Array case 2', () => {
    expect(squareArray([-2, -1])).toEqual([1, 4])
});

test('Test Sorted Squared Array case 3', () => {
    expect(squareArray([-10, -5, 0, 5, 10])).toEqual([0, 25, 25, 100, 100])
});