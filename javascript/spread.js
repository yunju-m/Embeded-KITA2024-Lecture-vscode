// 스프레드 문법 (spread syntax) : ES6

console.log(...[1, 2, 3]);
console.log(...'Hello');
// 객체는 이터러블이 아니므로 스프레드 문법 사용 불가능
// console.log(...{ name: '홍길동', age: 20 });

// rest parameter와 스프레드 문법
const print = function (...rest) { // rest parameter(여러 인자들을 하나의 배열로 받음)
    console.log(rest);
};
print(...[1, 2, 3]); // 스프레드 문법(배열을 각각 펼침)

// 스프레드 결과는 값이 아니므로 구조 분해 할당에 사용할 수 없음
const [a, b, c, arr] = [1, 2, 3, [4, 5]];
// const [a, b, c, arr] = ...[1, 2, 3, [4, 5]];
console.log(a, b, c, arr);
