const todoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
//const toDoInput = todoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos()
{
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))

}

function deleteToDo(event)
{
    //this.parentNode.remove();
    //부모노드 내역을 읽어와서 li 리스트 삭제
    const li = event.target.parentElement;
    li.remove();
    //array 내역을 삭제 후 갱신 처리
    toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id));
    //localStorage 내역 삭제 처리
    saveToDos();
    
}
//todolist 리스트 추가 작업 처리
function paintToDo(newToDo)
{
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
//    li.appendChild(span);
    span.innerText = newToDo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

//입력하고 엔터 치면 지워지고 내역을 localStorage 저장 및 갱신
function handleToDoSubmit(event)
{
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    
    const newToDoObj = {
        text:newToDo,
        id : Date.now(),
    }
     
    console.log(newToDoObj);
    toDos.push(newToDoObj); 
    //작성된 todo를 리스트에 추가
    paintToDo(newToDoObj);
    //localStorage 내역에 갱신 처리
    saveToDos();
}

todoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null)
{
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);

// 아래 2개는 동일하게 처리(arrow function)
// (item) => console.log("ssss"+item)
// function sayhello(item)
// {
//  console.log("ssss"+item)
// }

}