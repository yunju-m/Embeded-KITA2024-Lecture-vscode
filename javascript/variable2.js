// hoisting (호이스팅)
// 별도로 선언하지 않아도 선언문을 코드 최상단으로 끌어올려 주는 것

// 엔진이 선언하지 않은 변수인 v의 선언을 코드 최상단으로 끌어올려준다.
// var v;
// function add(a, b)l; 함수 선언이 엔진에 의해서 끌어올려 짐

// 자바스크립트는 선언(Declaration)과 사용(Runtime)이
// 순서적으로 분리되어 실행되는 언어, 항상 선언 후에 사용
v = 100;
console.log(v);

console.log(add(3, 5));

function add(a, b) {
    return a + b;
}