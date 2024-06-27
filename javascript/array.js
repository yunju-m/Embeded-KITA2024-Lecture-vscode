// 배열 (array)

const arr1 = [1, 2, 3, 4, 5];   // 인덱스 0~4, length 5

console.log(Object.getOwnPropertyDescriptors(arr1));

console.log(typeof arr1); // object

// 크기가 5인 배열
const arr2 = new Array(5);
console.log(arr2.length); // 5

// 크기가 1인 배열
const arr3 = Array.of(5);
console.log(arr3.length); // 1

// 객체로 배열 생성
const arr4 = Array.from({ 0: 'a', 1: 'b', length: 2 });
console.log(arr4); // ['a','b']

const arr5 = Array.from({ 'key1': 'a', 'key2': 'b', length: 2 });
console.log(arr5); // [undefined, undefined]

// 유사 배열 객체 : 배열처럼 사용할 수 있는 숫자키와 length를 가진 객체
const arrobj = {
    '0': 'orange',
    '1': 'apple',
    '2': 'banana',
    length: 3
};
const arrobjLeng = arrobj.length;
for (let i = 0; i < arrobjLeng; i++) {
    console.log(arrobj[i]);
}

// 희소배열 (sparce array) : 요소가 중간중간에 있는 배열
const arr6 = [1, 2, 3, , 4, 5];
console.log(arr6);
console.log(arr6.length);

// 배열 메서드
const arr7 = [1, 2, 3, 4, 5];
// 배열여부 확인
console.log(Array.isArray(arr7)); // true
// 배열요소의 인덱스
console.log(arr7.indexOf(3)); // 2
// 배열 요소 포함 여부
console.log(arr7.includes(5)); // true

// 배열 요소 추가/삭제
const arr8 = arr7.push(6); // 베열 끝에 요소 추가
console.log(arr7);
console.log(arr8); // length
const arr9 = arr7.pop(); // 베열 끝에 요소 제거
console.log(arr7);
console.log(arr9); // 제거된 요소
const arr10 = arr7.unshift(0); // 베열 처음에 요소 추가
console.log(arr7);
console.log(arr10); // length
const arr11 = arr7.shift(0); // 베열 처음에 요소 제거
console.log(arr7);
console.log(arr11); // 제거된 요소

// 배열 합치기
const arr12 = [1, 2];
const arr13 = [3, 4];
console.log(arr12.concat(arr13));
console.log([...arr12, ...arr13]);

// 배열 중간에 요소 제거/추가
const arr15 = [1, 2, 3, 4, 5].splice(1);
console.log(arr15); // [ 2, 3, 4, 5 ]
const arr16 = [1, 2, 3, 4, 5].splice(1, 3);
console.log(arr16); // [ 2, 3, 4 ]

const arr17 = [1, 2, 3, 4, 5];
const arr18 = arr17.splice(1, 3, 10, 20);
console.log(arr17); // [ 1, 10, 20, 5 ]
console.log(arr18); // [ 2, 3, 4 ]

//배열 중간 요소 가져오기
const arr19 = [1, 2, 3, 4, 5];
console.log(arr19.slice(1)); // [ 2, 3, 4, 5 ]
console.log(arr19.slice(1, 3)); // [ 2, 3 ]

// 배열 요소 역순으로
const arr20 = [1, 2, 3, 4, 5];
console.log(arr20.reverse()); // [ 5, 4, 3, 2, 1 ]

// 배열 요소 채우기
console.log([1, 2, 3, 4, 5].fill(0)); // [ 0, 0, 0, 0, 0 ]
console.log([1, 2, 3, 4, 5].fill(0, 2)); // [ 1, 2, 0, 0, 0 ]
console.log([1, 2, 3, 4, 5].fill(0, 2, 3)); // [ 1, 2, 0, 4, 5 ]

// 배열 평탄화
console.log([1, 2, [3, 4, [5, 6]]].flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log([1, 2, [3, 4, [5, 6]]].flat(2)); // [ 1, 2, 3, 4, 5, 6 ]

// 배열 고차함수
// sort, forEach, map, filter, reduce, some, every, find
// findIndex, flatMap

const arr21 = [1, 2, 3, 4, 5];
console.log(arr21.sort()); // accending
console.log(arr21.sort((a, b) => b - a)); // descending

const persons = [
    { name: '홍길동', age: 20 },
    { name: '김길동', age: 40 },
    { name: '박길동', age: 30 },
];
console.log(persons.sort((a, b) => a.age - b.age));
console.log(persons.sort((a, b) => b.age - a.age));

console.log(arr21.some(a => a > 3)); // true

console.log(arr21.every(a => a > 3)); // false

console.log(arr21); // [ 5, 4, 3, 2, 1 ]
console.log(arr21.find(a => a > 3)); // 5
console.log(persons.find(person => person.age == 40)); // { name: '김길동', age: 40 }
console.log(arr21.findIndex(a => a > 3)); // 0
console.log(persons.findIndex(person => person.age == 40)); // 0

const arr22 = [1, 2, [3, 4, [5, 6]]];
console.log(arr22.flatMap((str, index) => [index, [str, str.length]]));
console.log(arr22.map((str, index) => [index, [str, str.length]]).flat(2));