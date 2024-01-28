/**
 * 1/8(월)
 * * 2-8) Void와 Never 타입
 * https://www.inflearn.com/course/lecture?courseSlug=%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&unitId=155997&tab=curriculum
 * =============================================================
 */

// * <<Void 타입>>
// void란 공허, 즉 아무것도 없음
// 아무것도 없다는 걸 의미하는 타입

function func1(): string { // 함수의 매개변수에도 타입 지정 가능
  return "hello";
}

function func2(): void { // 아무것도 반환하지 않는 함수의 반환값은?
  console.log("hello");
}

let a: void;
// a = 1; // ! void 형식의 변수는 아무것도 담을 수 없음
// a = "hello"; // ! void 형식의 변수는 아무것도 담을 수 없음
// a = {}; // ! void 형식의 변수는 아무것도 담을 수 없음
a = undefined; // undefined는 담을 수 있음
// a = null; // ? null은 nullCheckOption이 false인 경우 담을 수 있음

// * <<void와 null, undefined의 차이점은?>>

function funcUndefined(): undefined {
  console.log("hello");
  return undefined; // ! undefined로 설정할 경우 undefined를 반환하는 리턴문을 사용해야 함
}

function funcNull(): null {
  console.log("hello");
  return null; // ! null로 설정할 경우 null을 반환하는 리턴문을 사용해야 함
}

// * <<never>>
// never: 존재하지 않는,
// return문을 "절대" 반환하지 않는 경우 (절대 정상적으로 종료될 수 없는 경우)

function func3(): void {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let anyVar: any;

let b: never;
// b = 1; // ! 아무 형식도 담을 수 없음
// b = {};
// b = "";
// b = undefined; // ! void형식과 달리 undefined조차 담지 못함
// b = null; // ! strictNullChecks 옵션이 꺼져있어도 null을 담지 못함

// b = anyVar; // ! any 형식도 담을 수 없음