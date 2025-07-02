

/* void type */

function sayHi():string {
    return 'hi'
}

function printHi():void {
    console.log('hi ㅋㅋ');
}


/* never type */

// 존재하지 않는 / 불가능한 타입 / 어떤 값도 정의할 수 없는 타입
// 절대 발생하지 않는 값 / 절대 도달할 수 없는 코드

function showError(message: string) {
    throw new Error(message)
}

function loop(): never{
    while (true) {
        
    }
}














