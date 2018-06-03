const calculateDivisors = num => {
    let marker = 0;
    let fizzBuzzSum = 0;
    while (marker < num) {
        if (!(marker % 3) || !(marker % 5)) fizzBuzzSum += marker;
        marker++
    }
    return fizzBuzzSum
}

module.exports = calculateDivisors