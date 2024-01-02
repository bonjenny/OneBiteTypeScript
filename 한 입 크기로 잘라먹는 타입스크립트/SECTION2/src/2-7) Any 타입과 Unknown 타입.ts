/**
 * 1/2(화)
 * * 2-7) Any 타입과 Unknown 타입
 * https://www.inflearn.com/course/lecture?courseSlug=%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&unitId=155996
 * =============================================================
 */

// * <<Any 타입>>
// 특정 변수의 타입을 우리가 확실히 모를 때 사용

// ! 기본적으로 초기화하는 값을 기준으로 타입을 "자동 추론"하기 때문에 오류 발생
let anyBadVar = 10;
// anyBadVar = "hello";

// TODO: 변수의 타입을 any로 지정할 경우 오류가 발생하지 않게 됨
// 다만, any 타입은 타입스크립트가 가지는 모든 이점을 포기하는 것과 다를 바가 없음 (런타임 오류 해결못하기 때문)
// 그래서 any 타입 사용은 최대한 지양하는 것이 좋다.
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase(); // ! 컴파일 시 오류 발생 X, "런타임" 시 오류 발생
anyVar.toFixed();

let num: number = 10;
num = anyVar; // ! 모든 타입의 변수에 any 타입 변수를 할당할 수 있음

// * <<Unknown 타입>>
// 아무 연산, 아무 메서드 사용할 수는 없음
// 따라서 any보다는 조금 더 안전하다
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // ! 모든 타입의 변수에 unknown 타입 변수를 할당할 수 없음
// unknownVar.toUpperCase(); // ! 특정 타입 함수도 모두 사용 불가

// 타입 좁히기 시 가능
if (typeof unknownVar === "number") {
  num = unknownVar;
}