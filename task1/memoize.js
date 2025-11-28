function memoize(factorial){
    let cache = {};
    return function(n){
        if(cache[n]){
            return cache[n];
        }

        let res = factorial(n);
        cache[n] = res;
        return res;
    }
}

function factorial(n){
    let fact = 1;
    for (let i = 1; i <= n; ++i){
        fact *= i;
    }

    return fact;
}

let foo = memoize(factorial);
console.log(foo(4));
console.log(foo(4));
