// Event Handler 등록 방법

// document.querySelector("#btn").onclick = function () {
//     alert('자바스크립에서 나오는 이벤트 발생!');
// };
// document.querySelector("#btn").onclick = function () {
//     alert('또 나올까?');
// };

// 발생한 이벤트에 대해 여러개의 이벤트 핸들러 등록이 가능
// document.querySelector("#btn").addEventListener('click', function (e) {
//     alert('버튼 클릭!');
// });
// document.querySelector("#btn").addEventListener('click', function (e) {
//     alert('두번째 버튼 클릭!');
// });
// document.querySelector("#btn").addEventListener('click', function (e) {
//     alert('세번째 버튼 클릭!');
// });


// 이벤트핸들러 분리
const first = function (e) {
    alert('hello');
};
const second = function (e) {
    alert('nice to meet you');
};
const third = function (e) {
    alert('have a good day');
};
// 이벤트핸들러 등록
document.querySelector("#btn").addEventListener('click', first);
document.querySelector("#btn").addEventListener('click', second);
document.querySelector("#btn").addEventListener('click', third);

// 이벤트핸들러 제거
document.querySelector("#btn").removeEventListener('click', second);