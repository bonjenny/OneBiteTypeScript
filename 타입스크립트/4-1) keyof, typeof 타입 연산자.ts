/**
 * 7/5(수)
 * 4-1) keyof, typeof 타입 연산자
 * https://cat-antlion-144.notion.site/keyof-typeof-a84ed3cae5f2496a8b19282e676746ea
 * =============================================================
 */

// <<keyof>>
// 객체 타입에서 객체의 키 값들을 숫자나 문자열 리터럴 유니언을 생성
type Point = { x: number; y: number };

// 타입 P와 P2는 동일한 타입입니다
type P = keyof Point;
type P2 = "x" | "y";

// <<typeof>>
// 타입스크립트에서는 typeof 연산자를 타입을 선언할 때도 사용 가능
let s = "hello";
let n: typeof s; // let n: string

// 인터페이스가 선언되어 있지 않은 객체에 대하여 타입을 가져와 사용 가능
const user1 = {
  name: "john",
  age: 30,
};

type IUser = typeof user1;

function getUserName(user: IUser) {
  return user.name;
}

console.log(getUserName(user1));
