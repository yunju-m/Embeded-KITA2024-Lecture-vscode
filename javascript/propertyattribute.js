// javascript 객체의 프라퍼티들의 속성

const hong = {
    name: 'hong'
};

// name 프로퍼티의 속성 객체
// { value: 'hong', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(hong, 'name'));

hong.age = 20;
// { value: 20, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(hong, 'age'));

console.log(Object.getOwnPropertyDescriptors(hong));

// getter / setter
// getter : 프로퍼티의 값을 획득, setter: 프로퍼티의 값을 변경

const person = {
    firstName: '홍',
    lastName: '길동',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        // destructuring assignment (구조분해할당)
        // 배열의 각각의 요소를 각각의 변수에 할당
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(person.fullName);   // get fullName이 호출됨!
person.fullName = '강 감찬'; // set fullName이 호출됨!
console.log(person.firstName, person.lastName);

// 데이터 프라퍼티 정의
const lee = {};

Object.defineProperty(lee, 'name', {
    value: '이순신',
    writable: false,
    enumerable: false,
    configurable: false
});

lee.name = '장보고';    // writable: false이므로 값 변경 불가
delete lee.name;    // configurable: false이므로 프라퍼티 제거 불가
console.log(Object.getOwnPropertyDescriptor(lee, 'name'));

lee.age = 20;
console.log(Object.getOwnPropertyDescriptors(lee));

console.log(Object.keys(lee));  // enumerable: false이므로 age만 검색

// 객체 변경 불가
// 1. 확장금지 : Object.preventExtensions => 추가만 가능
// 2. 밀봉 : Object.seal => 프로퍼티 읽기/쓰기만 가능
// 3. 동결 : Object.freeze => 프로퍼티 읽기만 가능

const kang = {
    name: '강 감찬',
    age: 30
};

Object.preventExtensions(kang);
kang.gender = '남';
console.log(kang);

Object.seal(kang);
delete kang.age;
console.log(kang);

Object.freeze(kang);
delete kang.age;
console.log(kang);