/**
 * 7/4(화)
 * 2-5) 제너레이터와 비동기 이터레이션
 * https://cat-antlion-144.notion.site/da34ddc110924ac6a7f0ee5210aea6e7?pvs=25
 * =============================================================
 */



/**
 * 제너레이터: 이터레이터를 쉽게 구현할 수 있도록 지원하는 문법
 *             function* 키워드를 사용하여 함수를 만들고,
 *             yield 키워드를 사용하여 값을 반환
 */

function* generateSequence() {
  yield 1;
  // sadf
  // asdf
  yield 2;
  yield 3;
  return 3;
}

let generator = generateSequence(); //제너레이터가 생성됩니다
let one = generator.next(); // next함수를 통해 다음 값을 얻을 수 있습니다
console.log(JSON.stringify(one)); // {value: 1, done: false}
console.log(JSON.stringify(generator.next())); // {value: 2, done: false}
console.log(JSON.stringify(generator.next())); // {value: 3, done: true}


// for ... of
let generator2 = generateSequence();
for (let value of generator2) {
  console.log(value); // 1, 2, 3
}

// 전개 문법
let sequence = [0, ...generateSequence()];
console.log(sequence); // [0, 1, 2, 3]


// 제너레이터 컴포지션
function* generateSequence2(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {
  // 0..9
  yield* generateSequence2(48, 57);
  // A..Z
  yield* generateSequence2(65, 90);
  // a..z
  yield* generateSequence2(97, 122);
}

let str = '';
for (let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}
console.log(str); // 0..9 A..Z a..z