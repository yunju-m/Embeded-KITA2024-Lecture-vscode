// encode / decode
// encode : 코드를 변환
// decode : 변환된 코드를 원복

const name = '홍길동';
const age = 20;
const gender = '남';

let uri = `https://www.naver.com/shop/product/1000?name=${name}&age=${age}&gender=${gender}`;
console.log(uri);
const enURI = encodeURI(uri); // ? = & 인코딩 안함
console.log(enURI);
const deURI = decodeURI(enURI);
console.log(deURI, '\n');

console.log(uri);
const enURIComp = encodeURIComponent(uri);  // ? = & 인코딩함
console.log(enURIComp);
const deURIComp = decodeURIComponent(enURI);
console.log(deURIComp);