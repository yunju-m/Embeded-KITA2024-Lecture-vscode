// 타입 변환(Type Casting)

// 1. 묵시적형변환
// 1) 엔진이 연산자를 어떤 연산으로 처리하는가
// 2) 피연산자가 형변환이 가능한가

console.log(null + ''); // 'null'
console.log(1 - '1');   // 0
console.log(1 / 'one'); // NaN
console.log(+'0');  // 0
console.log(+ 'string');    // NaN
// console.log((Symbol()) + ''); // TypeError
console.log([] + '');   // ''
console.log(+undefined);    //  NaN
console.log(+true); // 1
console.log(+false);    // 0
console.log(+null); // 0
console.log(+undefined);    //NaN
console.log(!false);    // true
console.log(!null); // true
console.log(!'');   // true

// 2. 명시적 형변환
// false로 판별될 수 있는 것들 : false, NaN, undefined, null, '', 0, -0
// false: 0, true: 1
console.log(String(1)); // '1'
console.log((1).toString());    // '1'
console.log(Number(false)); // 0
console.log(parseInt('1')); // 1
console.log(Boolean('x'));  // true
console.log(Boolean(''));   // false
console.log(Boolean(0));    // false
console.log(Boolean(1));    // true
console.log(Boolean({}));   // true
console.log(Boolean([]));   // true

// 3. 단축 평가 (short circuit evaluation)
// 논리합(||), 논리곱(&&) 연산시 연산 중간에 결과를 알 수 있으면
// 평가 중간에 평가를 종료
console.log('Cat' || 'Dog');    // Cat
console.log('Cat' && 'Dog');    // Dog
console.log('' || 'Dog');   // Dog
console.log('' && 'Dog');   // 
console.log(true || 1); // true
console.log(0 || true); // true
console.log(true && 1); // 1
console.log(1 && true); // true

let done = true;
let message = '';
message = done && 'completed';
console.log(message);   // completed

// elem이 null일 경우 참조에러에 대비하는 코드
let elem = null;
let result = elem && elem.value;
console.log(result);    // null

// 옵셔널 체이닝 연산자 (optional chaining operator) : ?. (ECMA2020)
// 좌측 피연산자가 null 또는 undefined인 경우 undefined로 처리
// =>  null 참조 오류 회피
let elem2 = null;
console.log(elem2?.value);

// 널 병합 연산자 (null coalescing operator) : ?? (ECMA2020)
// 좌측 피연산자가 null이나 undefined인 경우 우측 피연산자 값을 반환
// 그렇지 않으면 좌측 피연산자 값을 반환
let l1 = null ?? 'l1 기본값';
console.log(l1);
let l2 = 3 ?? 'l2 기본값';
console.log(l2);