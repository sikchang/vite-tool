import gsap from "gsap";
import { main } from "./main";
import { deleteMemo, insertMemo } from "./service/service";
import type { Tables } from "./supabase/database.types";
// import { supabase } from "./supabase/supabase";


let draggingEl: HTMLElement | null = null;

export function hendleDragStart(e:DragEvent) {
    const target = e.target as HTMLElement;

    const memo = target.closest('.memo');

    if (memo && e.dataTransfer) {
        draggingEl = memo as HTMLElement;
        e.dataTransfer!.effectAllowed = 'move'

        memo.classList.add('dragging')
    }
}

/* 드래그 중이지 않은 엘리면트를 찾아서 현재 마우스 위치에 따라 드래그 중이지 않은
 엘리먼트의 크기의 절반을 마우스가 넘었다면 그 엘리먼트를 대체하는 것 */
function getDragAfterElement(container:HTMLElement,y:number):HTMLElement | null {
    // 나머지 애들의 좌표 값을 가져와야함 (이부분이 복잡함)
    // '.memo:not(.dragging)' 메모 클래스에 dragging이 포함하지 않는 것만 찾겠다.
    const draggableElements = [...container.querySelectorAll('.memo:not(.dragging)')] as HTMLElement[];

    // child : 각각의 엘리먼트
    return draggableElements.reduce((closest,child)=>{
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if(offset < 0 && offset > closest.offset){
            return { offset, element: child }
        } else {
            return closest;
        }
    }, {offset: -Infinity, element: null as HTMLElement | null}).element;
}

export function hendleDragOver(e:DragEvent){
    e.preventDefault();

    const afterElement = getDragAfterElement(main,e.clientY);

    if (!draggingEl) return;

    /* 바꿔치기하는 구간 */
    if (afterElement === null) {
        main.appendChild(draggingEl)
    } else {
        main.insertBefore(draggingEl,afterElement)
    }
}

//드래그 끝
export function hendleDragEnd() {
    
    if (draggingEl) {
        draggingEl?.classList.remove('dragging')
        draggingEl = null;
    }
}

/* 
1. supabase를 사용해서 DELETE 통신을 하자
2. 이벤트 위임 처리 (삭제 버튼을 클릭하면 article의 data-id를 가져오기)
3. supabase .eq(id:가져온ID)
*/

// 삭제 눌렀을 때
export async function hendleDelete(e:MouseEvent) {
    const target = e.target as Element;
    
    const btn = target.closest('button')!;
    const article = target.closest('article');
    
    if (!(btn && article)) return;
    // console.log(article);
    const id = article.dataset.id;
    console.log('가져온 아이디 : ', id);
    
    if (confirm('진짜 삭제할거야...?')) {
        deleteMemo(Number(id))
    }
}

export function hendleOpenPop(){
    
    const tl = gsap.timeline()
    .to('#dialog',{autoAlpha:1,duration:0.2})
    .to('.pop',{y:0,ease:'power3.inOut'})
    
}



export function hendleCreate(e:MouseEvent) {
    e.preventDefault();

    const title = document.querySelector('#title') as HTMLInputElement;
    const description = document.querySelector('#description') as HTMLInputElement;
    const priority = document.querySelector('#priority') as HTMLSelectElement;
    
    /* 
        title 값
        description 값
        priority 값
    */

    insertMemo({
        title:title.value,
        description: description.value,
        priority: priority.value as Tables<'memo'>['priority']
    })

    title.value = '';
    description.value = '';
    priority.value = 'high';

}
export function hendleClosePop(){
    const tl = gsap.timeline()
        .to('.pop', { y: '100%', ease: 'power3.inOut' })
        .to('#dialog', { autoAlpha: 0, duration: 0.2 });
    
}



























