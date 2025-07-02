



// generic type
// 유연한 함수를 활용하기 위해 사용한다.

type User<T,U> = { name: T, age: U };

const user:User<String,number> = {
    name: 'sik',
    age: 31
}


/* 
T => Type
U => Util or Unique
K => Key
V => Vlaue
R => Return type
E => Element or Error
S => State
*/

function fn<T>(value:T):T {
    return value;
}


fn(10)
fn('하이 ㅋㅋ')
fn([])
fn({})



// const arr:Array<number> = [1, 2, 3];

function swapAtoB<T,U>(a:T, b:U):(T|U)[] {
    return [b,a]
}


swapAtoB(0, 'a');
swapAtoB([], 'a');


function getLength<T extends {length:number | string}>(arr:T):number | string {
    return arr.length;
}

getLength([1,2,3])
getLength(['a','b','c'])
getLength('하이 ㅋㅋ')
getLength({length:'as'})


// type Response<T> = { type: string; content: T };
type Response<T> = T extends string ? { type: string; content: string } : { type: string; content: T };
const r1: Response<string> = { type: 'text', content: '하이;;' };
const r2: Response<{name:string}> = { type: 'json', content: { name: 'sik' }};




function getById<T extends {id:number}>(item:T):number {
    return item.id
    
}


getById({ id: 10, title: '아이폰' });
getById({ id: 20, title: '갤럭싀' });
// getById({title: '갤럭싀' }); // 여기서 에러


























