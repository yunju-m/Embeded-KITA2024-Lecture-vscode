// 리터럴 (literal)
// - 코드에 쓰여진 값
// - 모든 리터럴은 타입이 있다.

// 1. 문자열 리터럴
"hello"
'hello'

// 2. 객체 리터럴 (객체 = 값 = 리턴값 = 연관배열)
// 연관배열(association array) : 키가 문자열인 배열
const obj = {
    name: "홍길동",
    age: 20
};

// 3. 숫자 리터럴
100
3.14
0

// 4. 배열 리터럴
const arr1 = [];
const arr2 = [1, 2, 3];
const arr3 = ['hello', 'hi', 'how are you'];

// 5. 불리언 리터럴
true
false

// 6. 정규표현식 리터럴
const regex = /abc/; // a가 오고 b가 오고 c가 오는 패턴 정규표현식

// 7. 함수 리터럴
const add = function (a, b) {
    return a + b;
};

// 8. null 리터럴
null

// 9. undefined 리터럴
undefined

// 10. undefined
// : 선언 후에 엔진이 메모리 확보를 위해 초기화한 상태에 대한 값
// null
// : 사용자가 값이 없음을 표기하기 위한 값
// ex) 지갑이 없음 --> undefined
//      지갑은 있는데 돈이 없음 --> null