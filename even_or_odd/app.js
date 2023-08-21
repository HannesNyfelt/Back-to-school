function even_or_odd(a, b, c) {
    function isEven(num) {
        return num % 2 === 0
    }
    function classifyNumber(num) {
        return isEven(num) ? "even" : "odd"
    }
    return `${classifyNumber(a)}, ${classifyNumber(b)}, ${classifyNumber(c)}`
}

console.log(even_or_odd(5, 6, 9));
console.log(even_or_odd(86, 6, 4));