

/* alias : 별칭 */


// type, interface 이 두가지가 별칭을 할 수 있음

type User1 = {
    id: number,
    name: string,
    auth: string,
    isPaid: boolean,
}

type User2 = User1 & {addres:string}

const user1:User1 = {
    id: 1,
    name: 'sik',
    auth: 'admin',
    isPaid:true,
}

const user2:User2 = {
    id: 2,
    name: 'chang',
    auth: 'user',
    isPaid: false,
    addres: '고양시',
}

interface User3 {
    id: number,
    name: string,
    auth: string,
    isPaid: boolean,
}

/* interface User3 {
    addres:string
}
 */

interface User4 extends User3{
    addres:string
}

// const user3:User3 & {addres:string} = {
const user3:User4 = {
    id: 3,
    name: 'sung',
    auth: 'user',
    isPaid: true,
    addres: '일산1동'
}


// 객체의 키가 동적으로 결정될 때 유용하게 사용할 수 있는

/* index signature */
type Person = {
    name: string,
    age: number,
    email: string,
    [key: string]:string | number,
}


const person:Person = {
    name: 'sik',
    age: 31,
    email: 'changsik323@gmail.com',
    gender: 'male',
    phone: 123456789,
}




































