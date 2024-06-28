// 이터러블 (iterable)

const arr = [1, 2, 3];

// 객체의 프라퍼티 중에 Symbol.iterator가 있으면 이터러블이다.
console.log(Symbol.iterator in arr);

// 배열은 이터러블이므로 for~of구문으로 반복 가능
for (let each of arr) {
    console.log(each);
}

// 배열은 이터러블이므로 스프레드 문법 사용 가능
console.log([...arr]);

// 배열은 이터러블이므로 구조분해할당이 가능
const [a, ...rest] = arr;
console.log(a, rest);

// 이터레이터 획득
const it = arr[Symbol.iterator]();

// 이터레이터는 next라는 프라퍼티(메소드)를 가지고 있다.
console.log('next' in it); // true

// next 호출해서 배열내의 객체들을 호출
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// 객체는 이터러블이 아니다!!!
const person = {
    name: '홍길동',
    age: 20
};

console.log('Symbol.iterator' in person); // false

// for (let each of person) {
//     console.log(each);
// }

for (let key in person) {
    console.log(key);
}

// 유사배열객체를 배열로 만들면 이터러블이 된다.
const obj = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};

const arr2 = Array.from(obj);
console.log(arr2);

for (let each of arr2) {
    console.log(each);
}

