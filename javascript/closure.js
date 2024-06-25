// 클로저 (closure)
// : 함수 내부에서 선언된 변수는 함수스코프를 따름 (유효범위가 함수)
// : 함수 내부에서 선언된 변수의 값을 함수 외부에서 사용해야 할 경우
// : 클로저를 만들어서 사용함

const x = 1;
function outer() {
    // x는 outer함수의 지역변수
    const x = 10;
    // 지역변수 x에 접근할 수 있는 내부함수
    // 클로져: function () {console.log(x);};
    const inner = function () {
        console.log(x);
    };
    // 내부함수를 리턴 (x는 함수스코프내에서만 존재해야함, 메모리에서 사라져야함)
    return inner;
}

// outer를 호출해서 내부 함수를 리턴
const innerFunc = outer();
// 내부 함수를 실행해서 outer의 지역변수인 x에 접근
innerFunc();