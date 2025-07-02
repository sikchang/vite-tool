


/* any  type 
장점 : 모든 데이터가 들어올 수 있다.
*/

let obj: any;

obj = 1
obj = 'a'
obj = {x:10}
obj = [1,2,3]
obj = ()=>{}
obj.toUpperCase();
obj.toFixed();


/* unknown : 성의만 보이는 뜻 ㅋㅋ any랑 동일함 */

let arr: unknown;

arr = 1;
arr = 'hi ww'

/* 타입 좁히기 (narrowing) */
// 정제를 해서 옮겨주겠다
if (typeof arr === 'number') {
    arr.toFixed();
}






























