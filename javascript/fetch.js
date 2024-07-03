// fetch
// 자바스크립트에서 비동기처리를 간편하게 하기 위해 고안

// get
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        console.log(json.length);
    });

// post
fetch('https://jsonplaceholder.typicode.com/todos',
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userId: 1,
            title: 'JavaScript',
            completed: false
        })
    }).then(response => response.json())
    .then(todos => console.log(todos))
    .catch(err => console.log(err));

// put / patch
fetch('https://jsonplaceholder.typicode.com/todos/1',
    {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userId: 1,
            title: 'React',
            completed: true
        })
    }).then(response => response.json())
    .then(todos => console.log(todos))
    .catch(err => console.log(err));

// delete
fetch('https://jsonplaceholder.typicode.com/todos/1',
    {
        method: 'DELETE'
    }).then(response => response.json())
    .then(todos => console.log(todos))
    .catch(err => console.log(err));