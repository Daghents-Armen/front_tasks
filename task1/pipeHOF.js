function add(a){
    return a + 5;
}

function double(a){
    return a * 2;
}

function sub(a){
    return a - 4;
}

function pipe(...fns){
    return function(a){
        let prop = a;
        for (let i = 0; i < fns.length; ++i){
            let res = fns[i](prop);
            prop = res;
        }

        return prop;
    }
}

let func = pipe(add, add, double, sub);
console.log(func(2));