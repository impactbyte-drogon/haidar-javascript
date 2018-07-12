console.log("LEVEL 16");

const add = (a, b) => {
    const c = a + b
    console.log(`(${a} + ${b})`);
    return c
}

const substract = (a, b) => {
    const c = a - b
    console.log(`(${a} - ${b})`);
    return c
}

const divide = (a, b) => {
    const c = a / b
    console.log(`(${a} / ${b})`);
    return c
}

console.log(add(substract(2, 1), divide(4, 2)));