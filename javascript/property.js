// 프로퍼티 (property)

const hong = {};

// 프로퍼티 동적 추가
hong.name = "홍길동";
hong.age = 20;
hong.gender = "male";
hong['hong-address'] = "충청도 일대";

// 프로퍼티 값 수정
hong.name = "강감찬";

// 프로퍼티 삭제
delete hong.gender;

// 프로퍼티 리스트 확인
for (let key of Object.keys(hong)) {
    console.log(key, hong[key]);
}

// 프로퍼티 축약
// 프로퍼티명과 프로퍼티에 저장되는 변수명이 같으면 하나만 작성
const name = "이순신";
const age = 30;
const lee = {
    name,
    age
};

for (let key of Object.keys(lee)) {
    console.log(key, lee[key]);
}

// 계산된 프로퍼티명
const prefix = "person";
let idx = 0;
const obj = {
    [`${prefix}-${++idx}`]: idx,
    [`${prefix}-${++idx}`]: idx,
    [`${prefix}-${++idx}`]: idx
};

for (let key of Object.keys(obj)) {
    console.log(key, obj[key]);
}

// 메서드 축약
const dog1 = {
    name: '루미',
    getName: function () {
        return this.name;
    }
};

console.log(dog1.getName());

const dog2 = {
    name: '루미',
    getName() {
        return this.name;
    }
};

console.log(dog2.getName());