// Set
const set = new Set([1, 1, 2, 2, 3, 3, 4, 5]);
console.log(set); // 1, 2, 3, 4, 5

// 문자열은 이터러블이므로 Set으로 만들 수 있음
const set2 = new Set('Hello');
console.log(set2); // H, e, l, o

// 배열 중복 제거
const uniqArr = arr => [...new Set(arr)];
console.log(uniqArr([1, 1, 2, 2, 3, 3])); // [1, 2, 3]

// Set 요소크기
console.log(new Set([1, 2, 3, 4, 5, 5]).size); // 5

// Set 요소추가
console.log(new Set([1]).add(2).add(3)); // 1, 2, 3

// Set 요소확인
console.log(new Set([1, 2, 3]).has(2)); // true

// Set 요소삭제
console.log(new Set([1, 2, 3]).delete(2)); // true

// Set 요소 전체삭제
const set3 = new Set([1, 2, 3]);
set3.clear();
console.log(set3); // Set(0) {}

// forEach로 Set요소 순회
// 인자: 요소값, 요소값, Set
const set4 = new Set([1, 2, 3, 4, 5]);
set4.forEach((v1, v2, set) => {
    console.log(v1, v2, set);
});

// Set은 이터러블 : for ~ of 순회가능, 스프레드 가능, 구조분해할당 가능
for (const val of set4) {
    console.log(val);
}
console.log([...set4]); // [1, 2, 3, 4, 5]

const [a, b, ...rest] = set4;
console.log(a, b, rest); // 1, 2, [3, 4, 5]

// Set을 이용한 집한연산 구현
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// 교집합
Set.prototype.intersection = function (set) {
    const result = new Set();
    for (const value of set) {
        if (this.has(value)) result.add(value);
    }
    return result;
};
Set.prototype.intersection2 = function (set) {
    return new Set([...this].filter(v => set.has(v)));
};

console.log(setA.intersection(setB)); // Set(2) { 3, 4 }
console.log(setA.intersection2(setB)); // Set(2) { 3, 4 }

// 합집합
Set.prototype.union = function (set) {
    const result = new Set(this);
    for (const value of set) {
        result.add(value);
    }
    return result;
};
Set.prototype.union2 = function (set) {
    return new Set([...this, ...set]);
};
console.log(setA.union(setB)); // Set(6) { 1, 2, 3, 4, 5, 6 }
console.log(setA.union2(setB)); // Set(6) { 1, 2, 3, 4, 5, 6 }

// 차집합
Set.prototype.difference = function (set) {
    const result = new Set(this);
    for (const value of set) {
        result.delete(value);
    }
    return result;
};
Set.prototype.difference2 = function (set) {
    return new Set([...this].filter(v => !set.has(v)));
};
console.log(setA.difference(setB)); // Set(2) { 1, 2 }
console.log(setA.difference2(setB)); // Set(2) { 1, 2 }
console.log(setB.difference(setA)); // Set(2) { 5, 6 }
console.log(setB.difference2(setA)); // Set(2) { 5, 6 }

// Map
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// Map 크기 (== 엔트리의 개수)
console.log(map.size);

// 엔트리 추가
map.set('key3', 'value3'); // Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }
console.log(map);

// Map 엔트리 접근
console.log(map.get('key2')); // value2

// Map 엔트리 존재 여부 확인
console.log(map.has('key3')); // true

// Map 엔트리 제거
map.delete('key3');
console.log(map); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// Map 엔트리 전체 제거
map.clear();
console.log(map);

// Map 엔트리 순회
const map2 = [
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
];

// forEach 인자 : 값, 키, 맵
map2.forEach((v, k, map) => console.log(v, k, map));

// Map은 인터러블 : for ~ of 사용가능, 스프레드 가능, 구조분해할당 가능
for (const entry of map2) {
    console.log(entry);
}

console.log([...map2]); // [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]
const [entry1, entry2, entry3] = map2;
console.log(entry1, entry2, entry3);

// keys(), values(), entries()
for (const key of map2.keys()) {
    console.log(key);
}
for (const value of map2.values()) {
    console.log(value);
}
for (const entry of map2.entries()) {
    console.log(entry);
}
