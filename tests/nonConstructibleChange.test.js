const findMinimum = require('../challenge/nonConstructibleChange');

test('Test Non-Constructible Change case 1', () => {
    expect(findMinimum(
        [5, 7, 1, 1, 2, 3, 22]
    )).toBe(20)
});

test('Test Non-Constructible Change case 2', () => {
    expect(findMinimum(
        [1, 1, 1, 1, 1]
    )).toBe(6);
});

test('Test Non-Constructible Change case 3', () => {
    expect(findMinimum(
        [1, 5, 1, 1, 1, 10, 15, 20, 100]
    )).toBe(55);
});