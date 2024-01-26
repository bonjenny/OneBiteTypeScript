/**
 * * <<Unknown 타입>>
 * 타입 계층도의 최상단에 위치
 * 모든 타입의 최상단 타입, 슈퍼 타입 (집합으로 본다면 전체집합)
 */

function unknownExam() {
  // unknown 타입은 모든 타입 업캐스팅 가능
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 당연하게도 다운캐스팅은 불가
  let unknownVar: unknown;

  // let num: number = unknownVar; // ! 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.
  // let str: string = unknownVar; // ! 'unknown' 형식은 'string' 형식에 할당할 수 없습니다.
  // let bool: boolean = unknownVar; // ! 'unknown' 형식은 'boolean' 형식에 할당할 수 없습니다.
}

/**
 * * <<Never 타입>>
 * 타입 계층도의 최하단에 위치
 * 모든 타입의 부분집합 (집합으로 본다면 공집합)
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {} // 반환할 수 있는 값의 종류가 아무것도 없음
  }

  let num: number = neverFunc(); // number에 업캐스팅, never 타입은 모든 타입의 부분집합이므로 가능
  let str: string = neverFunc(); // string에 업캐스팅, never 타입은 모든 타입의 부분집합이므로 가능
  let bool: boolean = neverFunc(); // boolean에 업캐스팅, never 타입은 모든 타입의 부분집합이므로 가능

  // let never1: never = 10; // 'number'타입이 'never'타입으로 다운캐스팅 => 불가
  // let never2: never = "hello"; // ! 'string'형식은 'never' 형식에 할당할 수 없습니다.
  // let never3: never = true;  // ! 'boolean'형식은 'never' 형식에 할당할 수 없습니다.
}

/**
 * * <<Void 타입>>
 * 
 */

function voidExam() {
  
}