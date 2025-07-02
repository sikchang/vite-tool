let arr:number[] = [1, 2, 3];

let str:string[] = 'a,b,c'.split(',');



/* generic type 타입 변수 */

let _arr:Array<number> = [1, 2, 3];
let _str:Array<string> = ['a','b','c']

/* 유니온 타입 nuion type + arr type */
let multi:(string | number | boolean)[] = ['hi',10,true]

multi = ['ㅎㅇㅋㅋ',100,false]


// 자리 정하면 안되나?
// 빼먹으면 안되는거 아닌가?
// 이 상황에 필요한 것이 tuple type이다.
// 자리와 타입까지 정확하게 지정할 수 있다.
/* tuple type */
let tupleA:[number,number,number] = [1, 2, 3];

let tupleB:[string,number] = ['sik',31]

// tupleB = [30, 'gd'];

/* 다차원 배열 */
const user:[string,number][] = [
    ['성창식', 31],
    ['홍길동', 32],
    ['장보고', 33],
]



