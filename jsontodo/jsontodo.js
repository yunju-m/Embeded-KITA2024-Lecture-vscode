let seq = 1;
const requestTodo = (method, url, payload) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if (payload) {
        xhr.setRequestHeader('content-type', 'application/json');
    }
    xhr.send(payload);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            printTodoList(JSON.parse(xhr.responseText));
        }
    }
}

// 초기 todo 리스트 목록 호출
requestTodo("GET", "http://localhost:3000/todos");

// todo 리스트 등록 이벤트 리스너
$("#registBtn").on("click", () => {
    const newTodo = new Todo($("#registContent").val());
    requestTodo("POST", "http://localhost:3000/todos", JSON.stringify(newTodo));
});

// todo 리스트 목록 출력
const printTodoList = todoList => {
    todoList.forEach(todo => {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.innerHTML = getDateStr(todo.tdregdate);
        ul.appendChild(li);

        let ol = document.createElement('ol');
        li = document.createElement('li');
        li.innerHTML = `<button id=delBtn${todo.id}>X</button>&nbsp;`;
        li.innerHTML += `<input type ="checkbox" id ="todoCheck${todo.id}" />&nbsp;`;
        li.innerHTML += todo.tdcontent;
        ol.appendChild(li);

        $("#todoList").append(ul);
        $("#todoList").append(ol);

        // todo 리스트 삭제 이벤트 리스너
        $("#delBtn" + todo.id).on("click", () => {
            requestTodo("DELETE", `http://localhost:3000/todos/${todo.id}`);
        });
    });
}

const getDateStr = date => {
    return moment(date).format("YYYY.MM.DD HH:mm");
}