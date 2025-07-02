


/* 1. Omit<T(타입),K(키)>
   생략한다. */

type User = {
    id: number,
    name: string,
    email: string,
}

type PublicUser = Omit<User,'email'>

const user:PublicUser = {
    id: 1,
    name: 'sik',
    
}

/* 2. Pick<T,K> 
뽑아 쓴다.*/

const user2:Pick<User,'id'|'name'> = {
    id: 2,
    name: 'chang'
}


/* 3. Partial<T> 
부분적 처리*/

type User3 = {
    id: number,
    name: string,
    email: string,
    address: {
        lat: number,
        long: number
    }
}

const user3:Partial<User3> = {
    name:'sung'
}


/* 4. Required<T>
필수 처리 */

const user4:Required<User3> = {
    id: 1,
    name: 'sik',
    email: 'sik@gmail.com',
    address: {
        lat: 20,
        long:33.5
    }
}


/* 5. Readonly<T> */

const user5:Readonly<User3> = {
    id: 10,
    name: 'chang',
    email: 'sik@gmail.com',
    address: {
        lat: 20,
        long:33.4
    }
}


/* Record<K,T> */
// K들로 구성된 객체를 만들고, 각 값은 V타입으로 지정

type Role = 'admin' | 'user' | 'guest'

type RoleStatus = Record<Role,boolean>

const access = {
    admin: true,
    user: true,
    guest: false,
}
























































