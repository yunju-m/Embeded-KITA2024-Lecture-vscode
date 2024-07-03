// generator

function* gen() {
    yield 1;
    yield 2;
    yield 3;
    //return; 생략
}

const genObj = gen();
console.log(genObj.next()); // { value: 1, done: false }
console.log(genObj.next()); // { value: 2, done: false }
console.log(genObj.next()); // { value: 3, done: false }
console.log(genObj.next()); // { value: undefined, done: true }

function* gen2() {
    const a = yield 1;
    const b = yield (a + 1);
    const c = yield (b + 1);
}

const gen2Obj = gen2();
console.log(gen2Obj.next()); // { value: 1, done: false }
console.log(gen2Obj.next(10)); // (a+1) => (10+1)
console.log(gen2Obj.next(20)); // (b+1) => (20+1)
console.log(gen2Obj.return(4)); // { value: 4, done: true }
