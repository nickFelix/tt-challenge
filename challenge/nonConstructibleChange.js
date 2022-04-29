function findMinimum(coins) {

    coins.sort((a, b) => a - b);
    let currentValue = 0;

    coins.forEach(coin => {
        if (coin > currentValue + 1) {
            return currentValue + 1;
        }
        currentValue += coin;
    });

    return currentValue + 1;
}

module.exports = findMinimum;