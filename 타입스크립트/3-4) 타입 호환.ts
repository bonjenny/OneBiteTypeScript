/**
 * 7/5(수)
 * 3-4) 타입 호환
 * https://cat-antlion-144.notion.site/0ef751280f9746ce930282296c6b2579
 * =============================================================
 */

// <<구조적 타이핑>>
// 오직 멤버만으로 타입을 관계시키는 방식

interface Named {
  name: string;
}
class Person {
  name: string;
}
let p: Named;
// 성공, 구조적 타이핑이기 때문입니다.
p = new Person();

// <<구조적 타입 시스템의 기본>>
// y가 최소한 x와 동일한 멤버를 가지고 있다면 y는 x에 호환됨
interface Named {
  name: string;
}
let x: Named;
let y = { name: "Alice", location: "Seattle" };
x = y; // 호환되기 때문에 할당이 가능합니다

function greet(n: Named) {
  console.log("Hello, " + n.name);
}
greet(y); // Named 인터페이스에 호환되기 때문에 호출 가능합니다

// <<함수의 호환>>
// x와 y는 반환 타입이 동일하고
// x의 모든 매개변수를 y가 모두 가지고 있기 때문에 x는 y에 호환 가능
// 허나, y의 모든 매개변수를 x가 모두 가지고 있지 않기 때문에 y는 x에 호환되지 않음
let x2 = (a: number) => 0;
let y2 = (b: number, s: string) => 0;

y2 = x2; // 성공
// x = y; // 오류

let z = () => ({ name: "Alice" });
let a = () => ({ name: "Alice", location: "Seattle" });
z = a; // 성공
// a = z; // 오류, x()는 location 프로퍼티가 없습니다.

// <<이넘의 호환>>
// 이넘은 숫자와 호환되며 숫자는 이넘과 호환됨
enum Status {
  Ready,
  Waiting,
}
enum Color {
  Red,
  Blue,
  Green,
}
let status1 = Status.Ready;
let xs: number = status1; // 성공
// status1 = Color.Green; // Error: Type 'Color.Green; is not assignable to type 'Status'.

// <<클래스의 호환>>
// 정적 멤버(static member)와 생성자(constructor)를 제외하고 속성만 비교
class Hulk {
  handSize: number;
  constructor(name: string, numHand: number) {}
}

class Captain {
  static x: number;
  handSize: number;
  constructor(numHand: number) {}
}

let h: Hulk = new Hulk("Hulk", 1);
let c: Captain = new Captain(1);

h = c; // OK
c = h; // OK

// <<제네릭의 호환>>
// 제네릭은 타입 변수가 속성에 할당되었는지를 기준으로 호환여부 결정
// 속성에 할당되지 않으면 호환이 가능하고 속성에 할당되었으면 호환이 되지 않음
interface Empty<T> {}
let d: Empty<number> = {};
let e: Empty<string> = {};

d = e; // OK, because y matches structure of x

interface NotEmpty<T> {
  data: T;
}
let f: NotEmpty<number> = { data: 1 };
let g: NotEmpty<string> = { data: "1" };

// f = g; // Error, because x and y are not compatible
