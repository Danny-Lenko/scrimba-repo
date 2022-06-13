const isIsogram = (string) => {

    const lowerCased = string.toLowerCase()

    const result = lowerCased.split('').every((v,i)=>console.log(v,i) || lowerCased.indexOf(v)===i)

    return result

}

console.log(isIsogram('ambidExtRously')) // true
console.log(isIsogram('patteRN')) // false

