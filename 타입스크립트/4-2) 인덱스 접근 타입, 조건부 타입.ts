/**
 * 7/5(수)
 * 4-2) 인덱스 접근 타입, 조건부 타입
 * https://cat-antlion-144.notion.site/38eb8dfe59e84155a8dcb05c8dd8dd33
 * =============================================================
 */

// <<인덱스 접근 타입>>
// 특정 프로퍼티의 타입을 가져오기 위해 인덱스 접근 타입 사용 가능
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"]; // type Age = number;

type P1 = Person["age" | "name"]; // string | number
type P2 = Person[keyof Person]; // string | number | boolean

// <<조건부 타입>>
// 삼항 연산자 조건문같은 형태를 통해 조건에 따라 타입을 결정 가능
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
type Example1 = Dog extends Animal ? number : string; // number
type Example2 = RegExp extends Animal ? number : string; // string

// <<오버로드 단순화>>

// 오버로드 단순화 전
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  console.log(nameOrId);
  return nameOrId as any;
}
let a = createLabel("typescript");
let b = createLabel(2.8);
let c = createLabel(Math.random() ? "hello" : 42);

// 오버로드 단순화 후
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;
function createLabel2<T extends number | string>(idOrName: T): NameOrId<T> {
  console.log(idOrName);
  return idOrName as any;
}
let a2 = createLabel2("typescript");
let b2 = createLabel2(2.8);
let c2 = createLabel2(Math.random() ? "hello" : 42);
