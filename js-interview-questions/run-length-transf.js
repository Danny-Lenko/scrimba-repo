function encode(str) {
    let arr = []
    let counter

    str = str.split('')
    str.forEach(char => {
        if (!arr.includes(char)) {
            arr.push(counter)
            arr.push(char)
            counter = 1
        } else {
            counter++
        }
    })

    arr.push(counter)
    arr = arr.filter(char => char).join('').split(/(?=[a-z])/)
    arr = arr.map(item => item.split('').reverse().join('')).join('')

    return arr
}

// console.log(encode('wwwiiuuuu'))

function decode(str) {
    str = str.split(/(?=[0-9])/)
    str = str.map(item => {
        item.split('')
        const arr = []
        for (let i = 0; i <= +item[0]; i++) {
            arr.push(item[1])
        }
        return arr
    })
    return str.flat().join('')
}

console.log(decode('3w2i4u'))


