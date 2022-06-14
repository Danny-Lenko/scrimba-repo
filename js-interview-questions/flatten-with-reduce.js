const makeFlat = (array) => {
    return array.reduce((accumulator,value)=>{
        return Array.isArray(value) ? [...accumulator, ...makeFlat(value)] : [...accumulator,value]
    },[])
}


console.log(makeFlat(["one", ["two", "three"], ["four", ["five"]]])); // ['one','two','three','four','five']
