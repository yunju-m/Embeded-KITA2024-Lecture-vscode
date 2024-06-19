// 함수 (function)

// 함수 선언문 : runtime 이전에 메모리에 생성
function add(x, y) {
    return x + y;
}
console.log(add);
console.log(add()); // NaN  x=undefined, y=undefined
console.log(add(3)); // NaN x=3, y=undefined
console.log(add(3, 5)); // 8
console.log(add(3, 5, 7)); // 8 : 뒤에 있는 7 인자는 버려진다.
console.log(add('hello', 'javascripts')); // hellojavascripts

// 함수 리터럴 : 코드에 쓰여진 함수값, runtime에 메모리에 생성
const func1 = function () {
    console.log("func1");
}
func1();
const func2 = function () {
    console.log("func2");
}
const func3 = function (f) {
    f();
    console.log("func3");
}
func3(func2); // func2 함수를 전달
// func3(func2()); // func2 함수의 실행결과를 전달

const func4 = function a() {
    console.log('func4');
}
// a(); a라는 함수명은 엔진내부에서 사용
func4();

const func5 = function (a, b) {
    return a + b;
}
console.log(func5(3, 5));

// 실습1)
// 함수 리터럴을 이용해서 사칙연산(+, -, *, /)를 수행하는 하나의 함수 생성
const calc = function (func, num1, num2) {
    console.log(func(num1, num2));
}

calc(function (num1, num2) { return num1 + num2 }, 3, 5);
calc(function (num1, num2) { return num1 - num2 }, 3, 5);
calc(function (num1, num2) { return num1 * num2 }, 3, 5);
calc(function (num1, num2) { return num1 / num2 }, 3, 5);
calc(function (num1, num2) { return num1 % num2 }, 3, 5);
calc(function (num1, num2) { return num1 ** 2 + num2 ** 2 }, 3, 5);

// 화살표 함수 (arrow function)
const add2 = (x, y) => x + y; // function(x, y) { return x+y; }
console.log(add2(3, 5));

const add3 = x => x * x; // function(x) { return x*x; }
console.log(add3(3));

const afunc = (x, y) => {
    let result = x + y;
    return result;
}
console.log(afunc(10, 20));

// 실습2)
// 실습1)을 화살표 함수를 사용하여 변경
const pcalc = (func, num1, num2) => console.log(func(num1, num2));
pcalc((num1, num2) => num1 + num2, 3, 5);
pcalc((num1, num2) => num1 - num2, 3, 5);
pcalc((num1, num2) => num1 * num2, 3, 5);
pcalc((num1, num2) => num1 / num2, 3, 5);
pcalc((num1, num2) => num1 % num2, 3, 5);
pcalc((num1, num2) => num1 ** 2 + num2 ** 2, 3, 5);

// Function 생성자 함수
const ffunc = new Function('x', 'y', 'return x * y;');
console.log(ffunc);
console.log(ffunc(3, 5));

// parameter, argument
// parameter(파라미터) : 함수가 값을 전달받기 위해 선언한 함수의 지역변수
// argument(인자) : 함수의 파라미터에 전달되는 값
const pfunc = function (a, b) { // a, b는 파라미터, 함수의 지역변수
    return a + b;
}
console.log(pfunc(4, 6)); // 4, 6은 인자

// arguments : 함수의 인자들의 배열
// caller : 호출한 함수
// callee : 호출된 함수
const argfunc = function (x, y) {
    console.log(argfunc.arguments);
    console.log(argfunc.arguments[0]);
    console.log(argfunc.arguments[1]);
}
argfunc(1, 2);

// 실습3)
// 아래와 같은 함수 하나를 생성
// i) 함수를 하나 만들어서 함수의 파라미터의 수와
// 함수에 전달된 인자의 수가 같지 않으면 메세지를
// 출력하고 함수를 실행하지 않는 함수를 생성
// ii) 함수의 파라미터의 수와 전달된 인자의 수가 같다면
// 모든 인자들을 다 더해서 반환하는 함수
const eqfunc = function (pa1, pa2, pa3) {
    const argLeng = arguments.length;
    if (argLeng == 3) {
        console.log(pa1 + pa2 + pa3);
    } else {
        console.log("파라미터의 수와 인자의 수가 동일하지 않습니다.");
        return false;
    }
}
eqfunc(1, 2);
eqfunc(1, 2, 3);
eqfunc(1, 2, 3, 4);

// cf) ...스프레드 문법
// 파라미터 개수를 지정하기 곤란할 때 파라미터들을 배열로 선언
const func11 = function (...args) {
    console.log(args.length);   // 파라미터의 길이
    console.log(arguments.length); // 인자의 길이
}

func11(1, 2, 3)