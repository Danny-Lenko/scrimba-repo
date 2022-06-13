const isLeapYear = (year) => {
    const numberYear = Number(year)
    return numberYear % 100 === 0 ? numberYear % 400 === 0 : numberYear % 4 === 0
}

console.log(isLeapYear("2020")); // true
console.log(isLeapYear("2018")); // false
console.log(isLeapYear("1700")); // false
console.log(isLeapYear("1600")); // true

