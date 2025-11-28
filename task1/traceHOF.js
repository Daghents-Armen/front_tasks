function foo(a,b){
    return a + b;
}

function trace(foo){
    let history = [];
    return function(a,b){
        let res = foo(a,b)
        history.push({args: [a,b], output: res});
        tracedfunc.history = history;
        return res;
    }
}

let tracedfunc = trace(foo);
console.log(tracedfunc(1,2));
console.log(tracedfunc(2,4));
console.log(tracedfunc.history);


