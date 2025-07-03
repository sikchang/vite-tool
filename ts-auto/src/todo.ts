import { loadStorage, saveStorage } from "./storage";
import type { TodoList } from "./type";


let todos:TodoList = loadStorage();

// todos 데이터를 로컬 스토리지에 저장해주세요.

export function addTodo(content:string):void{
  const newTodo = {
    id:Date.now(),
    content:content,
    completed:false
  }

  todos.push(newTodo);

  saveStorage(todos)
}


export function deleteTodo(id:number):void{

  todos = todos.filter(todo => todo.id !== id);
  saveStorage(todos)

}

export function toggleTodo(id: number):void {
    // 배열을 반환(map) => 기존 데이터 배열 (해당 id 아이템을 찾아서 completed: ! completed)
    todos = todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed } : todo
    )
    saveStorage(todos)
}

export function updateTodo(id:Number,textContent:string):void {
    todos = todos.map(todo =>
                         //...todo 전체 객체를 불러온 후 , content만 수정하겠다.
        todo.id === id ? { ...todo, content: textContent } : todo
    );
    // saveStorage의 실행이 배열이기에 map을 활용해서 배열로 내보낸다.
    saveStorage(todos)
}