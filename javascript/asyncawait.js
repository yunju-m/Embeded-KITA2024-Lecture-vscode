// async / await

// 비동기 함수내에서 동기(직렬) 처리
async function afunc() {
    const a = await new Promise(resolve => setTimeout(() => resolve(1), 3000));
    const b = await new Promise(resolve => setTimeout(() => resolve(2), 2000));
    const c = await new Promise(resolve => setTimeout(() => resolve(3), 1000));
    console.log([a, b, c]);
}
const now = Date.now();
afunc()
    .then(() => console.log(Date.now() - now)); // 6초

// 비동기 함수내에서 비동기(병렬) 처리
async function afunc2() {
    const result = await Promise.all([
        new Promise(resolve => setTimeout(() => resolve(1), 3000)),
        new Promise(resolve => setTimeout(() => resolve(2), 2000)),
        new Promise(resolve => setTimeout(() => resolve(3), 1000))
    ]);
    console.log(result);
}
const now2 = Date.now();
afunc2()
    .then(() => console.log(Date.now() - now2)); // 3초

// await 선택적 사용
const afunc3 = async function (x) {
    let sum = 0;
    sum += await x + 1;
    // 즉시실행함수는 동기/비동기 영향을 받지 않음
    // 즉시실행함수 앞에 await는 아무 의미 없음
    sum += setTimeout(() => (() => {
        console.log(x);
        return x * 2;
    })(), 3000);
    sum += await x + 1;
    console.log(sum);
};
afunc3(1);