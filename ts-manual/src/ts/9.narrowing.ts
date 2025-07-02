type Cat = {
    name: string,
    age: number,
    
}


// x는 객체일 수도 있다!라는 뜻
function fn(x: string | number | Date | Cat) {
    if (typeof x === 'string') {
        x.toUpperCase();
    } else if (typeof x === 'number') {
        x.toFixed();
    } else if (x instanceof Date) {
        x.getTime();
    } else if ('age' in x) {
        x.age;
    }
}