// each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// by considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms

function fib() {
    let prev = 1
    let next = 2
    let evenSum = 2
    for (let i = 1; i < 40; i++) {
        if (i % 2 === 1) {
            prev += next
            if (prev % 2 === 0 && prev < 4000000) {
                evenSum += prev
            }
            console.log(prev)
        } else if (i % 2 === 0) {
            next += prev
            if (next % 2 === 0 && next < 4000000) {
                evenSum += next
            }
            console.log(next)
        }
    } return evenSum
}

fib() // 4613732