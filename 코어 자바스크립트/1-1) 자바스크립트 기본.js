/**
 * 7/3(월)
 * 1-1) 자바스크립트 기본
 * =============================================================
 */



// 엄격 모드
/**
 * 잘못 만든 자바스크립트 구문과 규칙을 사용하지 않기 위한 모드
 * "use strict"; 로 사용
 */


// 변수와 상수
/**
 * let: 블록 스코프 변수 선언 키워드
 * const: 블록 스코프 상수 선언 키워드
 * var: ES6 이전, 함수 스코프 변수 선언 키워드
 */


// 자바스크립트 자료형
/**
 * 원시형: 변수 메모리에 해당 값이 그대로 저장
 * - 숫자형
 *      + BigInt: 아주 큰 숫자나 아주 높은 정밀도가 필요한 경우 사용
 * - 문자형
 * - boolean형 (true / false)
 * - null: 값이 존재하지 않거나 비어 있는 경우
 * - undefined: 값이 할당되지 않은 경우 (undefined를 직접 할당하는 것은 권장 X)
 * - Symbol형: 객체의 고유한 식별자를 만들 때 사용
 * 
 * 객체형(참조형): 변수 메모리에 객체 값의 참조 주소가 저장
 */

// BigInt형: 끝에 'n'이 붙으면 BigInt형 자료입니다.
const bigInt = 1234567890123456789012345678901234567890n;

// Symbol형: 
let user = { // 서드파티 코드에서 가져온 객체
  name: "John"
};
let id = Symbol("id");
user[id] = 1;
console.log(user[id]); // 심볼을 키로 사용해 데이터에 접근할 수 있습니다.

// typeof 연산자는 인수의 자료형을 반환
console.log(typeof undefined); // "undefined"
console.log(typeof 0); // "number"
console.log(typeof 10n); // "bigint"
console.log(typeof true); // "boolean"
console.log(typeof "foo"); // "string"
console.log(typeof null); // "object", 언어 자체의 오류. null은 object가 아닙니다
console.log(typeof console.log); // "function", function이라는 자료형은 없으나 하위 호환성을 위해 유지하고 있습니다


// 상호작용
/**
 * console.log: 알림
 * prompt: 입력 창
 * confirm: 확인/취소 창
 */


// 형 변환

console.log("1234" + 5); //문자형으로 변환 12345

console.log(Number("1234") + 5); //숫자형으로 변환 1239
console.log(+"1234" + 5); //숫자형으로 변환 1239

"1234" && console.log(true); //불린형으로 변환 true


// 기본 연산자
let a = 1;
let b = 0;
console.log(5 % 2); //나머지 연산자(%):        5를 2로 나눈 후의 나머지인 1을 출력
console.log(2 ** 3); //거듭제곱 연산자(**):    8  (2 * 2 * 2)

let c = 3 - (a = 1); //a=1, c=2  할당 연산자(=)는 값을 반환
console.log('c:', c);
a = b = c = 2 + 2; //할당 연산자: 여러 개 연결 가능

let bool = (0, 1 + 2, 3 + 4); //a=7  쉼표 연산자(,)는 코드를 짧게 쓰고자 할 때 사용. 마지막 표현식 반환


// 비교 연산자
console.log('0 == false: ', 0 == false); // true  동등 연산자
console.log('0 === false: ', 0 === false); // false, 일치 연산자. 피연산자의 형이 다르기 때문입니다.

console.log('null == null: ', null == null); // true
console.log('null == undefined: ', null == undefined); // true
console.log('undefined == null: ', undefined == null); // true
console.log('undefined == undefined: ', undefined == undefined); // true

console.log('null === null: ', null === null); // 값이 정확히 일치할 때만 true
console.log('null === undefined: ', null === undefined); // false
console.log('undefined === undefined: ', undefined === undefined); // 값이 정확히 일치할 때만 true

console.log('undefined > 0: ', undefined > 0); // false (1)
console.log('undefined < 0: ', undefined < 0); // false (2)
console.log('undefined == 0: ', undefined == 0); // false (3) undefined는 비교 연산자시 항상 false


// 논리 연산자
console.log('' || '' || '바이올렛' || "익명"); // 바이올렛. 첫번째 truthy한 값 반환
console.log('' || false); // false. truthy한 값 없을 경우 마지막 값 반환
console.log(1 && 2 && null && 3); // null. 첫번째 falsy한 값 반환
console.log(1 && 2); // 2. falsy한 값 없을 경우 마지막 값 반환


let tempStr = '';

// 1. if, else 사용
if (tempStr === '') console.log('tempStr은 빈 객체입니다.');
else console.log('tempStr은 빈 객체가 아닙니다.');

// 2. 삼항연산자 사용
tempStr === '' ? console.log('tempStr은 빈 객체입니다.') : console.log('tempStr은 빈 객체가 아닙니다.');

// 3. 논리연산자 && 사용
tempStr === '' && console.log('tempStr은 빈 객체입니다.');
tempStr === '' || console.log('tempStr은 빈 객체가 아닙니다.');


// nullish 병합 연산자
let name = '';
console.log(name || '홍길동'); // 홍길동
console.log(name ?? '홍길동'); // ''. null 또는 undefined 일 때만 뒤의 값이 반환


// 함수
function showMessage(from, text = "no text given") { //매개변수 기본값
  console.log(from + ": " + text);
}
function showMessage(from, text) {
  text = text ?? "no text given"; // 또는 || 연산자 사용
  console.log(from + ": " + text);
}

// 함수 선언문 - 위치와 상관없이 어디서든지 실행가능
sayHi("John"); // Hello, John
function sayHi(name) {
  console.log(`Hello, ${name}`);
}

// 함수 표현식 - let, const 는 해당 위치 이후에만 사용가능
// sayHi("John"); // error!
let sayHi2 = function (name) {  // (*) 마술은 일어나지 않습니다.
  console.log(`Hello, ${name}`);
};
sayHi2("John");


/**
 * 화살표 함수: 자체 컨텍스트가 없는 짧은 코드를 담을 용도로 만들어졌기 때문에
 *              일반 함수와 다음과 같은 다른 점이 있습니다.
 * 
 * - this를 가지지 않습니다.
 * - arguments를 지원하지 않습니다.
 * - new와 함께 호출할 수 없습니다.
 * - super를 호출할 수 없습니다.
 */

let sum = (a, b) => a + b;

/* 위 화살표 함수는 아래 함수의 축약 버전입니다.
let sum = function(a, b) {
  return a + b;
};
*/

var adder = {
  base: 1,

  add: function (a) {
    let f = v => v + this.base;
    return f(a);
  },

  normalAdd: function (a) {
    let f = function (v) { return v + this.base; }
    return f(a);
  },

  addThruCall: function (a) {
    let f = v => {
      v + this.base;
      console.log('addThruCall의 this: ', this);
      console.log('addThruCall의 b: ', b);
    }
    let b = {
      base: 2
    };

    return f.call(b, a);
  }
};

console.log(adder.add(1));         // 이는 2가 콘솔에 출력될 것임
console.log(adder.normalAdd(1));   // NaN. this.base가 undefined임
console.log(adder.addThruCall(1)); // 이도 2가 콘솔에 출력될 것임