// module.mjs
// export한 것들만 외부에서 사용 가능

// 모듈(파일) 스코프를 갖음
var x = 1;
let y = 2;
const z = 3;
const func = () => {
    console.log('module.mjs');
};

export { x as mx, y as my, z as mz, func as mfunc }