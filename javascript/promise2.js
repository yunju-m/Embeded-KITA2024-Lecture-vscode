// Promise 실습
// 1. 비동기 호출 : "https://jsonplaceholder.typicode.com/albums/11"
// 2. id가 11인 앨범의 userId를 Promise로 구현
// 3. 비동기 호출 : "https://jsonplaceholder.typicode.com/users/2"
// 4. userId가 2인 사용자의 username과 email을 Promise로 구한다.
// 결과 : Antonette Shanna@melissa.tv

const promiseGet = url => {
    return new Promise((resolve, rejected) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onload = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(JSON.parse(xhr.response));
            } else {
                rejected(new Error(xhr.status));
            }
        };
    });
};

const albumsURL = 'https://jsonplaceholder.typicode.com/albums';
const usersURL = 'https://jsonplaceholder.typicode.com/users';

// 1) Promise 체이닝
get(`${albumsURL}/11`)
    .then(({ userId }) => get(`${usersURL}/${userId}`))
    .then(({ username, email }) => {
        document.querySelector("#result").innerHTML = username + " " + email;
    })
    .catch(error => console.log(error));

// 2) async/await
(async () => {
    const { userId } = await promiseGet(`${albumsURL}/11`);
    const userInfo = await promiseGet(`${usersURL}/${userId}`);
    console.log(userInfo.username, userInfo.email);
})();