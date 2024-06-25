// 실행 컨텍스트 (Execution Context)
// : 자바스크립트 코드가 실행되는 환경
// : 기본적으로 전역컨텍스트, 함수컨텍스트로 구성

// 컨텍스트 스위칭 (Context Switching)
// : 실행 컨텍스트가 변경

const gv = '전역변수';
const gf = function () {
    console.log('전역함수');
}
function add(a, b) {
    const sum = a + b;
    console.log(sum);
    gf();
}
add(3, 5);

// 위 코드의 실행 컨텍스트와 순서
// 1. 전역컨텍스트 선언부 : gv, gf, add 생성
// 2. 전역컨텍스트 실행부
//      1) gv = '전역변수'
//      2) gf = function() { console.log('전역함수'); }
//      3) add = function(a, b) { ... }
//      4) add(3, 5);
//      [컨텍스트 스위칭 : 전역컨텍스트 > add함수 컨텍스트]
// 3. add함수 컨텍스트 선언부 : a, b, sum 생성
// 4. add함수 컨텍스트 실행부
//      1) sum = a+b;
//      2) [컨텍스트 스위칭 : add함수 컨텍스트 > log함수 컨텍스트]
//      console.log(sum); 실행
//      3) gf();
//      [컨텍스트 스위칭 : add함수 컨텍스트 > gf함수 컨텍스트]
//      [컨텍스트 스위칭 : gf함수 컨텍스트 > log함수 컨텍스트]
//      console.log('전역함수');
// 5. gf() 종료
// 6. add() 종료
// 7. 전역컨텍스트 종료