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
 * undefined 타입의 슈퍼타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined; // todo: 문제가 되지 않음!
  }

  let voidVar: void = undefined;
}

/**
 * * <<any 타입>>
 * 타입 계층도를 완전히 무시해버리는, "치트키 타입"
 * todo: 즉, 함부로 사용하는 것이 위험한 타입 >> 최대한 사용 자제
 * 모든 타입의 슈퍼타입이 될 수도,
 * 모든 타입의 서브타입이 될 수도 있음 (never 제외)
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // ! "다운캐스팅"이지만, 허용됨
  undefinedVar = anyVar; // ! "다운캐스팅"이지만, 허용됨
  
  // todo: never 타입은 정말 순수한 공집합이기 때문에 어떤 변수도, 심지어 any라도 다운캐스팅 불가
  // neverVar = anyVar; // ! 'any' 형식은 'never' 형식에 할당할 수 없습니다.
}