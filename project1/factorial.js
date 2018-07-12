console.log("FACTORIAL");

const factorial = (n = 0, accumulator = 1) => {
    if (n === 0) return accumulator

    return factorial(n - 1, n * accumulator)
}

const showCalculation = (n, accumulator) => {
    console.log(`${n}! =`, factorial(n, accumulator));
}

showCalculation(0, 1)
showCalculation(1, 1)
showCalculation(2, 1)
showCalculation(3, 1)
showCalculation(4, 1)
showCalculation(5, 1)
showCalculation(6, 1)