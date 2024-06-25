// 전역객체
// 웹브라우저 환경에서 전역객체는 window
// node환경에서 전역객체는 global 또는 globalThis

/* 웹 브라우저 환경에서 */
console.log(window);
let x = 10;
console.log(window.x); // undefined
var y = 10;
console.log(window.y); // 10
const z = 10;
console.log(window.z); // undefined

/* node 환경에서 */
console.log(global);
console.log(globalThis);
console.log(global == globalThis);

let a = 10;
var b = 10;
// a는 global의 프라퍼티가 아니라
// global이 가지고있는 객체의 프라퍼티가 된다.
console.log(global.a); // undefined
console.log(global.b); // undefined
console.log(globalThis.a); // undefined
console.log(globalThis.b); // undefined