const requestTodo = (method, url, payload) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        if (payload) {
            xhr.setRequestHeader('content-type', 'application/json');
        }
        xhr.send(payload);
        xhr.onload = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(`${xhr.status} ${xhr.statusText}`);
            }
        }
    });
};

// 초기 todo 리스트 목록 호출
const getTodoList = () => {
    requestTodo("GET", "http://localhost:3000/todos")
        .then(res => printTodoList(res))
        .catch(err => console.error(err));
};

// todo 리스트 검색 이벤트 리스너
$("#searchBtn").on("click", () => {
    const searchTodo = $("#searchContent").val();
    requestTodo("GET", "http://localhost:3000/todos")
        .then(res => printTodoList(res.filter(todo => todo.tdcontent.includes(searchTodo))));
});

// todo 리스트 등록 이벤트 리스너
$("#registBtn").on("click", () => {
    const newTodo = new Todo($("#registContent").val());
    requestTodo("POST", "http://localhost:3000/todos", JSON.stringify(newTodo));
});

// todo 리스트 목록 출력
const printTodoList = todoList => {
    $("#todoList").empty();

    todoList.forEach(todo => {
        li = document.createElement('li');
        li.innerHTML += `<div class="li-container"><input id ="todoCheck${todo.id}" class="form-check-input" type ="checkbox" />
        <label for="todoCheck${todo.id}" class="form-check-label">${todo.tdcontent}</label>
        <label for="todoCheck${todo.id}">${getDateStr(todo.tdregdate)}</label>
        <button id=delBtn${todo.id} class="btn btn-danger">X</button></div>`;

        $("#todoList").append(li);
        $(`label[for=todoCheck${todo.id}]`).css('text-decoration', todo.tdcompleted ? 'line-through' : '');
        $(`#todoCheck${todo.id}`).prop('checked', todo.tdcompleted);

        // todo 체크박스 이벤트 리스너
        $("#todoCheck" + todo.id).on("click", () => {
            requestTodo("PATCH", `http://localhost:3000/todos/${todo.id}`, JSON.stringify({ tdcompleted: !todo.tdcompleted }));
        });

        // todo 리스트 삭제 이벤트 리스너
        $("#delBtn" + todo.id).on("click", () => {
            requestTodo("DELETE", `http://localhost:3000/todos/${todo.id}`);
        });
    });
};

const getDateStr = date => {
    return moment(date).format("YYYY.MM.DD HH:mm");
};

getTodoList();