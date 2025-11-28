function curry(fn){

    return function foo(...args){
        if(args.length >= fn.length){
            return fn(...args);
        } else {
            return (...args2) => {
                return foo(...args, ...args2);
            }
        }
    }
}

function sum(a, b, c){
    return a + b + c;
}

function product(a,b,c,d){
    return a * b * c * d;
}

let sumfn = curry(sum);
let prodfn = curry(product);
console.log(sumfn(1)(2,3));
console.log(sumfn(1,2)(3));