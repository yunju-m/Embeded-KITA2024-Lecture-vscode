// Symbol

// Symbol 생성
const symbol1 = Symbol();
console.log(typeof symbol1); // symbol

// Symbol은 유일한 키를 생성한다.
const symbol2 = Symbol('key1');
const symbol3 = Symbol('key1');
console.log(symbol2 === symbol3); // false

// Symbol.for는 전역스코프에 하나만 생성한다.
const symbol4 = Symbol.for('key2');
const symbol5 = Symbol.for('key2');
console.log(symbol4 === symbol5); // true
console.log(Symbol.keyFor(symbol4)); // key2
console.log(Symbol.keyFor(symbol5)); // key2

// Symbol을 상수로 사용
const DAY = {
    MONDAY: Symbol('MONDAY'),
    SATURDAY: Symbol('SATURDAY'),
    SUNDAY: Symbol('SUNDAY')
};

const today = Symbol('MONDAY');
console.log(DAY.MONDAY === today); // false

// Symbol을 객체의 프라퍼티 키로 사용
const person = {
    [Symbol.for('name')]: '홍길동',
    [Symbol.for('age')]: 20
}

console.log(person[Symbol.for('name')]); // 홍길동
console.log(person[Symbol.for('age')]); // 20