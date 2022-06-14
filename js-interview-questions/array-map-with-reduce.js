
const map = (array, callback) => {
    return array.reduce((a,b) => [...a, callback(b)], [])
}

console.log(map([1, 2, 3], (v) => v + 1)); // [2,3,4]
