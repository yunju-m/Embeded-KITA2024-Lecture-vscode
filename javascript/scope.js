// 스코프 (Scope, 식별자 참조범위)
// 1. 전역스코프
// 2. 지역스코프
// 3. 블록스코프
// 4. 모듈스코프

// var키워드의 경우 함수내에서 var키워드로 선언된 변수만 함수의 지역변수
// var는 블록스코프를 따르지 않음
// 스코프 체인
// : 하위스코프에서 상위스코프로 연결되어 있는 것
// : 변수 참조나 함수 호출시에 자신의 스코프부터 상위스코프로 계속해서 검색

var x = 1;  // global
let y = 2;  // global
const z = 3;// global
console.log(x, y, z);

// global: func1
// local: x, y
function func1(x, y) {
    console.log(x, y);
}
func1(5, 10);

// global: func2
function func2() {
    var x = 4;  // func2-local
    let y = 5;  // func2-local
    const z = 6;    // func2-local
    function func3() {  // func2-local
        // var x; ==> undefined 
        // x를 선언하기 전에 사용하면
        // => func3의 첫 라인에 선언문을 호이스팅함
        console.log(x);
        var x = 4;  // func3-local
        let y = 8;  // func3-local
        const z = 9;    // func3-local
        console.log(x, y, z);
    }
    func3();
}
func2();

// var로 선언한 변수는 global scope를 따름
{
    var x = 10; // global
    let y = 11; // local
    const z = 12;   // local
}
console.log(x, y, z);