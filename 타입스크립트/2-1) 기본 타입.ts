/**
 * 7/4(화)
 * 2-1) 기본 타입
 * https://cat-antlion-144.notion.site/1622ca3e52c64f28b27b177ec9356d5c?pvs=25
 * =============================================================
 */

// << 타입 선언 >>
let foo: string = "hello";
// let bar: number = true; // Type 'boolean' is not assignable to type 'number'.

/**
 * << 타입 종류 >>
 * - Boolean
 * - Number
 * - String
 * - Object
 * - Symbol
 * - Array
 * - Tuple
 * - Enum
 * - Any
 * - Void
 * - Null
 * - Undefined
 * - Unknown
 * - Never
 */

// String
let str: string = "hi";

// Number
let num: number = 10;

// Boolean
let bool: boolean = false;

// Object
let obj: object = {};

// Symbol
let user: Object = {
  // 서드파티 코드에서 가져온 객체
  name: "John",
};
let sym: symbol = Symbol("id");
user[sym] = 1;
console.log(user[sym]); // 심볼을 키로 사용해 데이터에 접근할 수 있습니다.

// Array
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// Tuple: 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식
let tpl: [string, number] = ["hi", 10];

// Enum: 특정 값(상수)들의 집합
enum Fruit {
  Apple = 2, // 값 변경 가능
  Pear,
  Melon,
}

// Void: 반환값이 없는 함수
let value: void = undefined;
function func(): void {
  console.log("void func");
}

// Any: 어떤 자료도 사용 가능
let str2: any = "hi";
let num2: any = 10;
let arr3: any = ["a", 2, true];

// Unknown: 타입스크립트의 Top Type
let myVar: unknown = 42;
myVar = "hello"; // 어떤 타입이든 재할당이 가능
// myVar.slice(); // Error: 개체가 알 수 없는 형식입니다.

// Never: 어떠한 타입도 불가능한 경우
// 함수가 종료되지 않기 때문에 반환 타입이 존재하지 않습니다
function neverEnd(): never {
  while (true) {}
}

// 함수가 어떠한 값도 반환하지 않고 종료되기 때문에 반환 타입이 존재하지 않습니다
function error(message: string): never {
  throw new Error(message);
}

// 도달하지 않는 코드이기 때문에 타입을 알 수 없습니다
function fn(x: string) {
  if (typeof x === "string") {
  } else {
    x; // type never
  }
}
