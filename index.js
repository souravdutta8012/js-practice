// ======================== 1. third min and third max ======================= //

const thirdRule = (arr) => {
    const a = arr.sort((a, b) => { return a - b })[2];
    const b = (arr.sort((a, b) => { return a - b }).reverse())[2];
    return [a, b];
}

console.log('1. ' + thirdRule([5, 6, 12, 3, 7, 13, 2]));

// ======================== 1. third min and third max ======================= //
