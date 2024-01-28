/**
 * 12/19(화)
 * * 2-3) 배열과 튜플
 * https://www.inflearn.com/course/lecture?courseSlug=%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&unitId=154366&tab=curriculum
 * =============================================================
 */

// * <<배열>> - 타입이 고정된 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "jihee"];

// * <<제네릭>>
let boolArr: Array<boolean>= [true, false, true]; // "제네릭" 문법으로도 배열 타입 정의 가능!

// * 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"]; // 마우스로 올려보면 자동 추론 타입은 (string | number)[] 라고 돼있음 -> 유니온타입

// * 다차원 배열의 타입을 정의하는 방법 (배열 안의 배열...)
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
]; // 대괄호를 열고 대괄호를 열어줌

let doubleArr2: (number[]|string[])[] = [
  [1, 2, 3],
  [4, 5],
  ["string", "string"]
]; // 대괄호를 열고 대괄호를 열어줌

// * <<튜플>> - 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2]; // 길이와 타입이 고정된 배열을 만들 수 있음
// tup1 = [1, 2, 3]; // ! 길이를 만족하지 않는 타입을 저장할 수 없음
// tup1 = ['a', 'b']; // ! 타입을 만족하지 않는 타입을 저장할 수 없음

let tup2: [number, string, boolean] = [1, "2", true];
// ? 튜플을 배열과는 다른 어떠한 특정한 타입이라고 볼 수 있는가?
// 그건 아니다. 컴파일 결과를 보면, 튜플 또한 "배열"로 컴파일되어있는 것을 볼 수 있다.

tup1.push(1); // 이런 식으로 push 하는 것도 가능 // ! 배열 메서드를 사용할 때는 튜플의 길이 제한을 알아보지 못함
tup1.pop();
tup1.pop();
tup1.pop();

// ? 그렇다면 튜플은 언제 유용하게 사용할 수 있을까?
const users: [string, number][] = [
  ["엄지희", 1],
  ["엄아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  // [5, "최아무개"], // ! 눈치없는 동료가 이런식으로 저장해두었다면?
  // TODO: 인덱스의 위치에 따라 넣어야 하는 값이 정해져 있는 경우, 튜플을 사용하여 쉽게 해결할 수 있다!
];