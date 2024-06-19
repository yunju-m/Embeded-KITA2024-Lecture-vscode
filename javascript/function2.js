// 즉시 실행 함수 (IIFE, Immediately Invoked Function Expression)
(function () {
    const a = 3;
    const b = 5;
    console.log(a + b);
}());

(function (a, b) {
    console.log(a + b);
}(1, 2));

// 즉시 실행 함수
// (function (a, b) { return a + b; }(1, 2)); ==> 실행결과 3이라는 값(표현식)
const result = (function (a, b) {
    return a + b;
}(1, 2));
console.log(result);

// cf) 함수 표현식
// function (a, b) { return a + b; } ==> 함수 값(표현식)
const result2 = function (a, b) {
    return a + b;
}
console.log(result2);

// 재귀함수
// 함수가 자기 자신을 호출, 반드시 종료조건이 있어야 함
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(1)); // 1
console.log(factorial(3)); // 6
console.log(factorial(10)); //3628800

// 중첩 함수
// 함수 내에 함수를 정의해서 바깥쪽 함수가 안쪽 함수의 기능을 독립적으로 사용
// 클로져(closure) 생성시 주로 사용
function outer() {
    // inner함수가 outer함수 블록 상단에 호이스팅됨(선언이 상단으로 끌어올려짐)
    inner();
    const o = 'o';
    console.log(o);
    function inner() {
        const i = 'i';
        console.log(i);
    }
    // console.log(i); // i는 inner 함수의 스코프를 가진다.
    inner();
}
outer();

// 콜백(callback) 함수 : 함수(고차함수)의 파라미터로 전달되는 함수
// 콜백함수의 유용성 : 함수(기능)를 함수에 값으로 전달할 수 있어서
//                      함수 상호간의 독립성을 유지할 수 있으며
//                      프로그램 전체를 유연하고 확장성있게 구성할 수 있음
// 고차(higher-order) 함수 : 콜백 함수를 전달 받은 함수
// 콜백 함수는 이벤트 처리, AJAX 통신, 타이머 함수 등에 사용됨
// hofunction 고차함수, f 콜백함수
const hofunction = function (f, str) {
    console.log(f(str));
}

const cbfunction = function (str) {
    return 'cbfunction : ' + str;
}

hofunction(cbfunction, 'hello');

// 배열의 고차함수
// foreach : 배열의 각 요소마다 기능을 수행
// map : 배열의 각 요소에 기능을 수행한 결과 배열을 얻음
// filter : 배열의 각 요소들 중에서 조건을 만족(true)하는 요소들의 배열을 얻음
// reduce : 배열의 요소들에 대한 합계를 얻음
const arr = [1, 2, 3, 4, 5];

const forEachArr = arr.forEach(function (e) {
    console.log(e);
});
console.log(forEachArr);

const mapArr = arr.map(function (e) {
    return e ** e;
});
console.log(mapArr);    // [ 1, 4, 27, 256, 3125 ]

const filterArr = arr.filter(function (e) {
    return e % 2;
});
console.log(filterArr);    // [ 1, 3, 5 ]

const sum = arr.reduce(function (acc, curr) {
    return acc + curr;
}, 100);
console.log(sum);

// 배열고차함수
const exarr = [1, 'a', 'b', 2, 3, 'c', 4, 'd', 'e', 'f', 5];

// 1) 숫자들의 합 구하기
const sumex = exarr.reduce(function (acc, curr) {
    if (typeof curr == 'number') {
        return acc + curr;
    } else {
        return acc;
    }
}, 0);
console.log(sumex);

// 2) 숫자들은 제곱값으로, 문자들은 아스키코드 값으로 변환한 배열 만들기
const exChangeArr = exarr.map(function (e) {
    if (typeof e == 'number') {
        return e ** e;
    } else if (typeof e == 'string') {
        return e.charCodeAt(0);
    }
});
console.log(exChangeArr);

// 3) 문자들 중에서 아스키코드값이 홀수인 것들의 배열 만들기
const oddStrArr = exarr.filter(function (e) {
    if (typeof e == 'string') {
        return e.charCodeAt(0) % 2;
    }
});
console.log(oddStrArr);

// 4) 숫자는 문자로, 문자는 숫자(아스키코드값)로 변환한 배열 만들기
const typeChangeArr = exarr.map(function (e) {
    if (typeof e == 'number') {
        return e.toString();
    } else if (typeof e == 'string') {
        return e.charCodeAt(0);
    }
});
console.log(typeChangeArr);


// 5) 모든 숫자와 모든 문자들의 아스키코드값의 합계 구하기 (reduce 사용)
const sums = exarr.reduce(function (acc, curr) {
    if (typeof curr == 'string') {
        return acc + curr.charCodeAt(0);
    }
    return acc + curr;
}, 0);
console.log(sums);

// 실습) 배열고차함수 - JSON
const jsonArr = [
    { "name": "홍길동", "age": 38, "gender": "M", "email": "hong@hong.com" },
    { "name": "유관순", "age": 18, "gender": "F", "email": "ryu@ryu.com" },
    { "name": "이순신", "age": 62, "gender": "M", "email": "lee@lee.com" },
    { "name": "신사임당", "age": 25, "gender": "F", "email": "sin@sin.com" },
    { "name": "장보고", "age": 45, "gender": "M", "email": "jang@jang.com" }
];

// 1) 각 사람의 나이에 1을 더한 이름과 나이를 출력
const plusOneAgeJsonArr = jsonArr.forEach(function (e) {
    console.log(e.name, e.age + 1);
});

// 2) 성별을 M은 남자로 F는 여자로 변환한 배열 생성
const genderArr = jsonArr.map(function (obj) {
    obj.gender = obj.gender == 'M' ? '남자' : '여자';
    return obj;
});
console.log(genderArr);

// 3) 나이가 30이하인 사람들만 추출해서 배열 생성
const lessThirtyAgeArr = jsonArr.filter(function (e) {
    return e.age <= 30;
});
console.log(lessThirtyAgeArr);

// 4) 이메일주소의 @ 앞부분이 4자리 이상인 사람들만 추출해서 배열 생성
const moreFourEmailLengArr = jsonArr.filter(function (e) {
    return e.email.indexOf('@') >= 4;
});
console.log(moreFourEmailLengArr);

// 5) 각 사람들의 나이의 합계를 출력
const sumAges = jsonArr.reduce(function (acc, curr) {
    return acc + curr.age;
}, 0);
console.log(sumAges);

// 실습) 고차함수 - AJAX로 데이터 불러와서 실습해 주셈!
//       https://jsonplaceholder.typicode.com/users

// 2. 회사이름에 "Romaguera"가 포함된 사용자들만 추출해서 배열 생성
// 3. "Gwenborough" 도시에 사는 모든 사용자의 id의 합계를 출력
// 4. id가 홀수인 사용자들 중에 lat과 lng의 합이 0 이상인 사용자들의 배열
// 5. id가 홀수인 사용자들 중에 이메일주소의 @문자 뒤의 글자가 4이상인
//    사용자들 중에서 zipcode가 7글자 이하인 사용자들의 배열

const axios = require('axios');

axios(
    {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users'
    })
    .then(function (response) {
        test(response.data);
    }
    );

const test = function (dataArr) {
    // 1. '.net' 이메일을 사용하는 사용자들만 추출해서 배열 생성
    const googlePersons = dataArr.filter(function (user) {
        return user.email.includes('.net');
    });
    console.log(googlePersons);

    // 2. 회사이름에 "Romaguera"가 포함된 사용자들만 추출해서 배열 생성
    const companyArr = dataArr.filter(function (user) {
        return user.company.name.includes('Romaguera');
    });
    console.log(companyArr);

    // 3. "Gwenborough" 도시에 사는 모든 사용자의 id의 합계를 출력
    const sumsUserId = dataArr.reduce(function (acc, user) {
        if (user.address.city === 'Gwenborough') {
            return acc + parseInt(user.id);
        } else {
            return acc;
        }
    }, 0);
    console.log(sumsUserId);

    // 4. id가 홀수인 사용자들 중에 lat과 lng의 합이 0 이상인 사용자들의 배열
    const oddUsers = dataArr.filter(function (user) {
        if (user.id % 2 == 1
            && parseFloat(user.address.geo.lat)
            + parseFloat(user.address.geo.lng) >= 0) {
            return user;
        }
    });
    console.log(oddUsers);

    // 5. id가 홀수인 사용자들 중에 이메일주소의 @문자 뒤의 글자가 4이상인
    //    사용자들 중에서 zipcode가 7글자 이하인 사용자들의 배열
    const oddUsers2 = dataArr.filter(function (user) {
        return user.id % 2 == 1
            && user.email.substring(user.email.indexOf('@') + 1).length >= 4
            && user.address.zipcode.length <= 7;
    });
    console.log(oddUsers2);
}

