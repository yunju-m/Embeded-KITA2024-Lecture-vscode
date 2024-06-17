// 식별자 (Identifier)
// 프로그래밍에서 사용하는 서로를 구분짓는 유일한 이름
// ex) 변수명, 함수명 ...

function func() {
    console.log("func");
}

let f = func;

f();
func();

console.log(func());    // 함수 실행 결과

console.log(func);  // 함수 자체

// 예약어(reversed word) : function, let
// 식별자(Identifier) : func, console, log, f
// 리터럴(literal) : "func", function func() {console.log("func");}

// 아래 코드에서 예약어, 식별자, 리터럴, 연산자 구분
const c1 = 100;
const c2 = 200;
let l1 = c1 + c2;

function f1(a, b) {
    return a + b;
}

const f2 = function (a, b) {
    return a * b;
}

console.log('f1 수행결과 : ' + f1(3, 5));
console.log('f2 수행결과 : ' + f2(2, 4));

// 예약어 : const, let, function, return
// 식별자 : c1, c2, l1, a, b, f1, f2, console, log
// 리터럴 : 100, 200,'f1 수행결과', 'f2 수행결과', 3, 5, 2, 4
//            function f1(a, b){return a+b}, function (a, b){return a*b}
// 연산자 : =, +, *