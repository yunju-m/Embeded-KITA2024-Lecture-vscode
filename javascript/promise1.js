// Promise

let todos;

const get1 = url => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            todos = JSON.parse(xhr.responseText);
        } else {
            console.error(`${xhr.status} ${xhr.statusText}`);
        }
    }
}

get1('http://jsonplaceholder.typicode.com/posts/1');
// 비동기처리가 완료되기 전에 아래코드가 실행되서 todos가 undefined가 된다.
console.log(todos);
document.querySelector("#result").innerHTML = todos;

// 비동기 처리가 완료되고 다음작업이 수행되도록 콜백처리
const get2 = url => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            successCallback(JSON.parse(xhr.responseText));
        } else {
            failureCallback(xhr);
        }
    }
};

get2('http://jsonplaceholder.typicode.com/posts/1');

const successCallback = todos => {
    console.log(todos);
    document.querySelector("#result").innerHTML = todos.title;
}

const failureCallback = xhr => {
    console.error(`${xhr.status} ${xhr.statusText}`);
    document.querySelector("#result").innerHTML = `${xhr.status} ${xhr.statusText}`;
}

// Promise 사용
const get3 = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(JSON.parse(xhr.responseText));
                document.querySelector("#result").innerHTML = xhr.responseText;
            } else {
                reject(`${xhr.status} ${xhr.statusText}`);
                document.querySelector("#result").innerHTML = `${xhr.status} ${xhr.statusText}`;
            }
        };
    });
};

get3('http://jsonplaceholder.typicode.com/posts/1');

// Promise 상태
// 1. pending
const pending = new Promise(() => { });
console.log(pending);

// 2. fullfilled
const fullfilled = new Promise((resolve) => resolve('성공'));
console.log(fullfilled);

// 3. rejected
const rejected = new Promise((_, reject) => reject(new Error('에러')));
console.log(rejected);

// Promise 후속처리
const get4 = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(JSON.parse(xhr.responseText));
                document.querySelector("#result").innerHTML = xhr.responseText;
            } else {
                reject(`${xhr.status} ${xhr.statusText}`);
                document.querySelector("#result").innerHTML = `${xhr.status} ${xhr.statusText}`;
            }
        };
    });
};

get4('http://jsonplaceholder.typicode.com/posts/1')
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('반드시 실행!'));