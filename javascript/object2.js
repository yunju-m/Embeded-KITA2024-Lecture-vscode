// 기본타입, 참조타입 복사
let message = "Hello";
let message_cp = message;
console.log(message);
console.log(message_cp);

message_cp = "Hi"
console.log(message);   // Hello
console.log(message_cp);    // Hi

// 참조타입 복사
// 참조 값만 복사됨
const hong = {
    name: "홍길동"
};
const hong_cp = hong;
console.log(hong.name);
console.log(hong_cp.name);

hong_cp.name = "강감찬";
console.log(hong.name); // 강감찬
console.log(hong_cp.name);  // 강감찬

// a와 b가 가리키는 객체가 같은 객체
let a = {};
let b = a;
console.log(a == b);    // true
console.log(a === b);   // true

// a와 b가 가리키는 객체가 다른 객체
let a2 = {};
let b2 = {};
console.log(a2 == b2);  // false
console.log(a2 === b2); // false

// 객체 복제, 객체 2개
let user = {
    name: "유관순",
    age: 18
};

let user_clone = Object.assign({}, user);
user_clone.name = "이순신";
console.log(user.name);
console.log(user_clone.name);
console.log(user == user_clone);    // false
console.log(user === user_clone);   // false

// lodash를 활용한 deep copy
var objects = [
    { 'a': 1 },
    { 'b': 2 }
];
var _ = require('lodash');
var shallow1 = _.cloneDeep(objects);
console.log(shallow1[0] == objects[0]);

// structuredClone를 활용한 deep copy
var shallow2 = structuredClone(objects);
console.log(shallow2[0] == objects[0]);