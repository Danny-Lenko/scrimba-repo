function isPangram(str) {
    str = str.split(' ').join('').toLowerCase().split('').sort()
    str = [...new Set(str)]
    return str.length === 26
}

console.log(isPangram('The quick Brown fox jumps over the lazy DOG'))
console.log(isPangram('The quick fox jUMps over the dog'))

