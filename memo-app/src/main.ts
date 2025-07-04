import { hendleClosePop, hendleCreate, hendleDelete, hendleDragEnd, hendleDragOver, hendleDragStart, hendleOpenPop } from './handler';
import { fetchMemo } from './service/service';
import './style.css'


export const main = document.querySelector('main') as HTMLElement;
export const create = document.querySelector('.create') as HTMLElement;
export const done = document.querySelector('.done') as HTMLElement;
export const close = document.querySelector('.close') as HTMLElement;



// 해당 데이터가 렌더링이 될 수 있도록 진행
window.addEventListener('DOMContentLoaded', () => {
    fetchMemo();
})

main.addEventListener('dragstart', hendleDragStart);
main.addEventListener('dragover', hendleDragOver);
main.addEventListener('dragend', hendleDragEnd);
main.addEventListener('click', hendleDelete);
// 생성 버튼 클릭 이벤트
create.addEventListener('click', hendleOpenPop);
done.addEventListener('click', hendleCreate);
close.addEventListener('click', hendleClosePop);








































































