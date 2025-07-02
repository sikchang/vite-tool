// 여기서부터는 타입스크립트의 기능들 16번까지



const user = {
    name: 'sik',
    age: 31,
    gender: 'mela',
    address:'고양시',
}

// 타입스크립트 user의 객체의 타입을 User에 입력해준다
type User = typeof user;

if (typeof user === 'string') {
    // 자바스크립트
}



type UserKey = keyof User;

const settings = {
    theme: 'dark',
    fontSize: 16,
    language: 'ko',
}

type settingsKey = keyof typeof settings;
// 'theme' | 'fontSize' | 'language'

// typeof 뒤에는 자바스크립트 객체가 와야 함
// keyof 뒤에는 타입스크립트의 타입이 와야함


























