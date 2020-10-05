module.exports = function reverse (n) {
    if(n < 0){
        n = Math.abs(n)
    }
    let str = n.toString()
    let arr = [...str]
    str = arr.reverse().join('')
    return parseFloat(str)
}
