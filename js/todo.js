const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    // JSON.stringify : 어떤 js 코드던 string으로 만들어주는 기능
    // localStorage는 string으로만 저장하기 때문 (array 저장 x)
    // JSON.parse : string -> code
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // target = button , parentElement = li
    const liId = event.target.parentElement.id
    const removeTarget = document.getElementById(liId);
    removeTarget.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(liId));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 새로고침 전의 array 복구
    // parsedToDos array의 각 원소당 한번 함수 실행
    parsedToDos.forEach(element => {
        paintToDo(element);
    });
}