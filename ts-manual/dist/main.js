import { _sum } from "./sub";
_sum;
const a = 10;
// 타입 어노테이션(주석)
const sum = (a, b) => a + b;
const b = _sum(1, 5);
function greeting(user) {
    return `${user}님 반갑습니다.`;
}
