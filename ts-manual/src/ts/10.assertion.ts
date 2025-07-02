// 타입 "단언"

// const input = document.querySelector<HTMLInputElement>('#text-field')!;
// const input = document.querySelector('#text-field') as HTMLInputElement;
const input = document.querySelector('#text-field');

if (input) {
    (input as HTMLInputElement).value
}


const personA:{
    readonly name: string,
    readonly age: number,
} = {
    name: 'sik',
    age: 31,

}

const personB = {
    name: 'sik',
    age: 31,
} as const

// personB.name = 'sikchang';






















