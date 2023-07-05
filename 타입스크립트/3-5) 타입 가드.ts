/**
 * 7/5(수)
 * 3-5) 타입 가드
 * https://cat-antlion-144.notion.site/4a739b0b1a0b4599aeb99f2821eb4da0
 * =============================================================
 */

// <<typeof>>
function doSomething(x: number | string) {
  if (typeof x === "string") {
    console.log(x.substr(1)); // string이기 때문에 에러가 발생하지 않습니다
    return;
  }
  // console.log(x.substr(1)); // Error: `x`가 `string`이라는 보장이 없습니다
  console.log(x);
}
doSomething("abc");
doSomething(111);

// <<instanceof>>
class Foo {
  foo = 123;
}

class Bar {
  bar = 123;
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo); // ok
    // console.log(arg.bar); // Error!
  } else {
    // Bar
    // console.log(arg.foo); // Error!
    console.log(arg.bar); // ok
  }
}

doStuff(new Foo());
doStuff(new Bar());

// <<in>>
interface A {
  x: number;
}
interface B {
  y: string;
}

function doStuff2(q: A | B) {
  if ("x" in q) {
    console.log("x is in q");
    return;
  }
  console.log("x is not in q");
}

let ex: A = {
  x: 1,
};
doStuff2(ex);

// <<리터럴 타입 가드>>
type TriState = "yes" | "no" | "unknown";

function logOutState(state: TriState) {
  if (state == "yes") {
    console.log("사용자가 yes를 골랐습니다");
  } else if (state == "no") {
    console.log("사용자가 no를 골랐습니다");
  } else {
    console.log("사용자가 아직 결정을 내리지 않았습니다.");
  }
}

logOutState("yes");

// <<사용자 정의 타입 가드>>
interface Foo {
  foo: number;
  common: string;
}

interface Bar {
  bar: number;
  common: string;
}

/**
 * 사용자 정의 Type Guard!
 */
function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

/**
 * 사용자 정의 Type Guard 사용 예시
 */
function doStuff3(arg: Foo | Bar) {
  if (isFoo(arg)) {
    console.log(arg.foo); // ok
    // console.log(arg.bar); // Error!
  } else {
    // console.log(arg.foo); // Error!
    console.log(arg.bar); // ok
  }
}

doStuff3({ foo: 123, common: "123" });
doStuff3({ bar: 123, common: "123" });
