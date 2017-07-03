// function factorial(n) {
//     if (n != 0) { return n * factorial(n - 1); }
//     return 1;
// }

// console.log(factorial(5));



function factorial(n) {
    let answer = 1;
    for (let i = 0; i < n; i++) {
        answer *= (n - 1);
    }
    return answer;
 }

 console.log (factorial (5));