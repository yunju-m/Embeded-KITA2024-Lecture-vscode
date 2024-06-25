// Object.prototype

const person = {
    name: '홍길동'
};

// 객체의 생성자 함수
console.log(person.constructor);

// 객체가 가진 프라퍼티 조사
console.log(person.hasOwnProperty('name'));

// 프로토타입 확인 (상속여부 확인)
console.log(Object.prototype.isPrototypeOf(person));

// 프라퍼티 열거가능여부 확인
console.log(person.propertyIsEnumerable('name'));

// 객체의 문자열 표현 확인
console.log(Object.toString(person));
console.log(Object.toLocaleString(person));

// typeof 연산자 (객체 타입 확인)
console.log(typeof person);

// instanceof 연산자 (상속여부 확인)
console.log(person instanceof Object);

// 프로토타입 체인 (프로토타입 연결)
const kang = {
    name: '강감찬'
};

if (Object.prototype == kang.__proto__) {
    console.log("kang은 Object를 상속받음!");
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('유관순', 20);

console.log("확인");
console.log(Function.prototype.__proto__ == Object.prototype);
console.log("=========================");

// person1은 Person 상속
console.log(person1.__proto__ == Person.prototype);

// Person은 Function 상속
console.log(Person.__proto__ == Function.prototype);

// 그러므로 person1은 Person을 상속, Person은 Function을 상속
// person1 - Person - Function 프로토타입 체인

// Fuction은 Object를 상속받지 않음
console.log(Function.__proto__ == Object.prototype);
console.log(typeof Function);
console.log(typeof Object);
console.log(typeof person);

// in 연산자 : 객체에 프라퍼티 존재 여부 확인
console.log('name' in person1);

// Object.keys/values/entries
person1.age = 30;
person1.gender = '여';

console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(Object.entries(person1));

// forEach 고차함수와 화살표 함수 사용해서 person1의 프라퍼티를 나열
// 형식) name:유관순 age:30 gender:여
Object.entries(person1).forEach(
    ([key, value]) => console.log(key + ":" + value)
);