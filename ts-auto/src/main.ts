import { loadStorage } from "./storage";
import { addTodo, deleteTodo, toggleTodo, updateTodo } from "./todo";
import type { Todo, TodoList } from "./type";
import S from "/src/style.module.css";



/* 

1. todolist 구조를 가진 태그를 만들어 화면에 렌더링 해주세요.
2. css module을 사용해 스타일링을 해주세요.
3. 생성된 DOM 요소를 잡아 submit 이벤트를 바인딩(handleSubmit) 해주세요.
4. input의 value값을 가져와주세요.
5. render 함수를 만들어 아이템을 appendChild를 사용해 렌더링 해주세요.

*/

const tag = `
  <div class="${S.container}">
    <form>
      <label for="todo">할 일 : </label>
      <input type="text" id="todo"/>
      <button type="submit">추가</button>
    </form>
    <hr />
    <ul id="renderPlace"></ul>
  </div>
`
document.querySelector('#app')?.insertAdjacentHTML('beforeend',tag);

  // <div class="${S.container}">
  //   <form>
  //     <label for="todo">할 일 : </label>
  //     <input type="text" id="todo"/>
  //     <button type="submit">추가</button>
  //   </form>
  //   <hr />
  //   <ul id="renderPlace"></ul>
  // </div>

const input = document.querySelector('#todo') as HTMLInputElement;
const list = document.querySelector('#renderPlace') as HTMLUListElement;
const form = document.querySelector('form');

function handleSubmit(e:SubmitEvent){
  e.preventDefault()
  const value = input.value.trim();
  if(!value) return;

  addTodo(value)
  input.value = '';
  render()
}

/* 
  삭제 버튼을 클릭 했을 때 데이터 삭제
  1. 버튼을 선택합니다.
  2. 버튼에 클릭 이벤트 바인딩
  3. 선택 항목 제거 (filter)
  4. 스토리지 저장
  5. 리렌더링
*/
function render(){

  const todos:TodoList = loadStorage()

  list.innerHTML = '';
  
  // DOM 생성
  todos.forEach((todo:Todo)=>{
    const li = document.createElement('li');
    li.dataset.id = String(todo.id);
    li.innerHTML = `
      <input name="checkbox" type="checkbox" ${ todo.completed ? 'checked' : '' } />
      <span contenteditable="true">${todo.content}</span>
      <button type="button" class="delete">삭제</button>
    `

    list.appendChild(li)


    /* Dom이 생성된 이후 삭제이벤트 입력 */
    const deleteBtn = li.querySelector('.delete')!;
    const checkbox = li.querySelector('input[type="checkbox"]')!;
    const span = li.querySelector('span')!

    // console.log(deleteBtn)
    deleteBtn.addEventListener('click', () => {
      deleteTodo(todo.id)
      render()
    })

    checkbox.addEventListener('change', () => {
      // console.log(todo.id)
      const id = todo.id;
      // 배열을 반환(map) => 기존 데이터 배열 (해당 id 아이템을 찾아서 completed: ! completed)
      toggleTodo(todo.id)
      render()
    })

    // input창에 포커스 아웃을 할 때 실행은 blur를 줄 수 있다.
    span.addEventListener('blur', () => {
      /*1. span의 글자 가져오기. (textContent)
          - 글이 있어야 함 & 기존 글자랑 달라야 함.
        2. updateTodo()
        3. render()
        해당 todo.id의 content를 가져와야 한다.
      */
      // console.log(todo.id)
      // 글자 가져오기
      const textContent = span.textContent?.trim()
      // 글이 있어야함
      if (!textContent) return;
      // 기존 글자랑 달라야함.
      if (todo.content === textContent) return;
      // console.log(textContent)
      updateTodo(todo.id,textContent)
      render()
    })


  })

}


render();

form?.addEventListener('submit',handleSubmit)

































